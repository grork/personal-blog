### Personal Blog
This is the basic site for publishing my personal blog.

Primary content is in `posts/`, layout for posts is in
`_includes/layouts/post.njk`.

## How to view it locally
### Install prerequisites
Node 22 (LTS): `brew install node@22` or via
[nvm](https://github.com/nvm-sh/nvm)

Install dependencies: `npm install`

### View it
`npm run serve` — starts a local dev server. The port/url will be output after
the server starts.

`npm run serve:drafts` — same, but also includes posts with `published: false`
(equivalent to Jekyll's `--drafts` flag). Useful for previewing the markdown
sample page.

_Note_ the server hot-reloads on changes, but if something looks stuck just
restart with `Ctrl+C`.

## How to Publish
Push to the `master` branch — Netlify builds and deploys automatically using the
config in `netlify.toml`.
