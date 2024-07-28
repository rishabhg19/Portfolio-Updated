# Personal Website
To update the website, go on `index.js` in the data directory and add new data. Use PowerPoint to update the portfolio projects to add new graphics on the portfolio carousel.

## Deployment
To deploy updates, go on File Manager on Hostinger. Delete the current `public_html`, and make a new `public_html` directory. Run `npm run build` in terminal on VSCode, and drag the new `build` directory into `public_html` on the Hostinger File Manager. Make sure the dot file `.htaccess` is inside the build directory, because it is what enables client side routing.

