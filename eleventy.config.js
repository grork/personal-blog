const { HtmlBasePlugin } = require("@11ty/eleventy");
const {
  dateToRfc3339,
  getNewestCollectionItemDate,
} = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  // --- Plugins ---
  eleventyConfig.addPlugin(syntaxHighlight);
  // baseHref "/" disables the site-wide URL transform; the feed template passes
  // an explicit absolute base to renderTransforms/htmlBaseUrl for feed content only.
  eleventyConfig.addPlugin(HtmlBasePlugin, { baseHref: "/" });

  // RSS helper filters (registered manually since feedPlugin expects auto-generated feeds)
  eleventyConfig.addFilter("dateToRfc3339", dateToRfc3339);
  eleventyConfig.addFilter("getNewestCollectionItemDate", getNewestCollectionItemDate);

  // --- Passthrough copies ---
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");

  // --- Markdown-it configuration ---
  const markdownIt = require("markdown-it");
  const md = markdownIt({
    html: true,
    linkify: false,
    typographer: false,
  });

  md.use(markdownItAttrs, {
    leftDelimiter: "{:",
    rightDelimiter: "}",
    allowedAttributes: ["class", "id", "start"],
  });

  md.use(markdownItFootnote);

  eleventyConfig.setLibrary("md", md);

  // --- Collections ---

  // Attributions collection (sorted by position)
  eleventyConfig.addCollection("attributions", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("_attributions/*.md")
      .sort((a, b) => (a.data.position || 0) - (b.data.position || 0));
  });

  // --- Custom Filters ---

  // Readable date: "29th March 2026" (matches Jekyll's date_to_long_string: "ordinal")
  eleventyConfig.addFilter("readableDate", function (date) {
    const d = new Date(date);
    const day = d.getUTCDate();
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = day < 30 ? day % 20 : day % 30;
    const suffix = relevantDigits <= 3 ? suffixes[relevantDigits] : suffixes[0];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    return `${day}${suffix} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  });

  // Reading time: "1 minute" / "5 minutes" (matches jekyll-time-to-read)
  eleventyConfig.addFilter("readingTime", function (content) {
    const text = (content || "").replace(/<[^>]+>/g, "");
    const words = text.split(/\s+/).filter((w) => w.length > 0).length;
    const minutes = Math.max(1, Math.ceil(words / 265));
    return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  });

  // Group posts by year for the index page (replaces group_by_exp)
  eleventyConfig.addFilter("groupByYear", function (posts) {
    const groups = {};
    posts.forEach((post) => {
      const year = post.date.getUTCFullYear().toString();
      if (!groups[year]) groups[year] = [];
      groups[year].push(post);
    });
    return Object.entries(groups)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, items]) => ({ name: year, items }));
  });

  // Get sorted tag names from collections (filtering out synthetic tags)
  eleventyConfig.addFilter("getPostTags", function (collections) {
    const skipTags = new Set(["posts", "all"]);
    return Object.keys(collections)
      .filter((tag) => !skipTags.has(tag))
      .sort((a, b) => a.localeCompare(b));
  });

  // Extract first paragraph text as excerpt
  eleventyConfig.addFilter("excerpt", function (content) {
    if (!content) return "";
    const match = content.match(/<p>(.*?)<\/p>/s);
    if (!match) return "";
    return match[1].replace(/<[^>]+>/g, "").trim();
  });

  // Head: return first N items from array
  eleventyConfig.addFilter("head", function (array, n) {
    if (!Array.isArray(array)) return [];
    return array.slice(0, n);
  });

  // Get previous post in collection (older = earlier date)
  eleventyConfig.addFilter("getPreviousPost", function (collection, page) {
    const index = collection.findIndex((p) => p.url === page.url);
    return index > 0 ? collection[index - 1] : null;
  });

  // Get next post in collection (newer = later date)
  eleventyConfig.addFilter("getNextPost", function (collection, page) {
    const index = collection.findIndex((p) => p.url === page.url);
    return index >= 0 && index < collection.length - 1
      ? collection[index + 1]
      : null;
  });

  // Current year for copyright
  eleventyConfig.addFilter("yearNow", function () {
    return new Date().getFullYear().toString();
  });

  // Date formatting for permalinks and general use
  eleventyConfig.addFilter("date", function (date, format) {
    const d = new Date(date);
    if (format === "yyyy/MM/dd") {
      const y = d.getUTCFullYear();
      const m = String(d.getUTCMonth() + 1).padStart(2, "0");
      const day = String(d.getUTCDate()).padStart(2, "0");
      return `${y}/${m}/${day}`;
    }
    if (format === "%Y") {
      return d.getUTCFullYear().toString();
    }
    return d.toISOString();
  });

  // Strip .html extension from URL (for feed entry IDs)
  eleventyConfig.addFilter("stripHtmlExtension", function (url) {
    return (url || "").replace(/\.html$/, "");
  });

  // --- Handle published: false ---
  // Set ELEVENTY_DRAFTS=true (via `npm run serve:drafts`) to include unpublished posts,
  // equivalent to Jekyll's --drafts flag.
  const includeDrafts = process.env.ELEVENTY_DRAFTS === "true";
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: function (data) {
      if (data.published === false && !includeDrafts) return false;
      return data.permalink;
    },
    eleventyExcludeFromCollections: function (data) {
      if (data.published === false && !includeDrafts) return true;
      return data.eleventyExcludeFromCollections;
    },
  });

  // --- Config ---
  return {
    pathPrefix: "/ruminations/",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
