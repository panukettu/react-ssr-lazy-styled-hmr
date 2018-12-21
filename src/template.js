export default ({ body, styles }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>from server</title>
        ${styles}
      </head> 
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="/dist/bundle.js"></script>
    </html>
  `;
};
