# Spread the Gospel website

This site was built with [Jekyll](https://jekyllrb.com/)—a static site generator. 

## Requirements

Please see the [official documentation](https://jekyllrb.com/docs/installation/) for requirements for installing Jekyll.

## Development

The following are instructions for compiling and developing the site. For more about Jekyll, read the [official Quick-start guide](https://jekyllrb.com/docs/quickstart/).

### HTML
- Most of the markup lives in `index.html`.
- `index.html` relies on the default layout file, `_layouts/default.html`.

### CSS

- CSS is compiled via Sass in the `SCSS` syntax—Jekyll comes with [Sass support](https://jekyllrb.com/docs/assets/#sassscss).
- Files are located in `assets/css`.
- `assets/css/site.scss` is the manifest.

### JS

- All JS is in `assets/js`.

### Compiling

- `bundle exec jekyll build` performs a compile of the site.
- The production-ready files are generated in the `_site` directory.

### Development Environment

- `bundle exec jekyll serve` creates a local development environment—point your browser to `http://localhost:4000`.

I included some niceties if you’d like some extra, development-friendly tools. This requires:

- [Node](https://nodejs.org/en/)
- [Gulp](https://gulpjs.org/getting-started)

Run `npm i` to install dependencies.

The following are commands that you may find helpful:
- `npm run watch`: run development environment—point your browser to `http://localhost:3000`. This includes CSS hot-reloading—see CSS changes instantly without reloading the browser.
- `npm run dist`: creates production-ready files—`_site` directory—which includes compressing CSS and uglifying JS.
