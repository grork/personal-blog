### Personal Blog
This is the basic site for publishing my personal blog.

Primary content is in `_posts`, layout for posts is in `_layout/posts.html`.

## How to view it locally
### Install prerequisites
Ruby: `brew install ruby@2.7` (and follow instructions for adding to the path)

Bundler: `gem install bundler`

Get Things installed: `bundle update`

### View it
`bundle exec jekyll serve --drafts --future` -- this includes the drafts, and lets you
view the website. The port/url will be outputted at after the server has started
up.

_Note_ sometimes your changes don't reflect immediately (takes time to generate).
If all else fails, just restart with `Ctrl+C`.

## How to Publish
At the time of writing, this is published to Netlify, which builds + deploys on
push to the master branch. So keep doing that!