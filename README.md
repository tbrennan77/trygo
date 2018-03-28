# Spread the Gospel website

This site was built with [Jekyll](https://jekyllrb.com/)—a static site generator. 

## Requirements

- [Jekyll](https://jekyllrb.com/)—see the [official documentation](https://jekyllrb.com/docs/installation/) for requirements for installing Jekyll.
- [Node](https://nodejs.org/en/)

## Development

The following are instructions for compiling and developing the site. For more about Jekyll, read the [official Quick-start guide](https://jekyllrb.com/docs/quickstart/).

1. Clone the project and `cd` into the directory.
2. Run `npm install && bundle` to install dependencies.

### HTML
- Most of the markup lives in `index.html`.
- `index.html` relies on the default layout file, `_layouts/default.html`.

### CSS

- CSS is compiled via Sass in the `SCSS` syntax—Jekyll comes with [Sass support](https://jekyllrb.com/docs/assets/#sassscss).
- Files are located in `assets/css`—`assets/css/site.scss` is the manifest.

### JS

- JS files are in `assets/js`.

### Compiling

- `bundle exec jekyll build` performs a compile of the site.
- The production-ready files are generated in the `_site` directory.

### Development Environment

- `bundle exec jekyll serve` creates a local development environment—point your browser to `http://localhost:4000`.

I included some niceties if you’d like some extra, development-friendly tools. This requires:

- [Gulp](https://gulpjs.org/getting-started)

The following are commands that you may find helpful:
- `npm run watch`: run development environment—point your browser to `http://localhost:3000`. This includes CSS hot-reloading—see CSS changes instantly without reloading the browser.
- `npm run dist`: creates production-ready files—`_site` directory—which includes compressing CSS and uglifying JS.
