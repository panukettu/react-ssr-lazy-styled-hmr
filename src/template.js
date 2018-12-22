export default ({ html, styles, bundles }) => {
  return `
    <html>
      <head>
        <title>from server</title>
        ${styles}
      </head> 
      <body>
        <div id="root">${html}</div>
      </body>
      ${bundles}
    </html>
  `;
};
