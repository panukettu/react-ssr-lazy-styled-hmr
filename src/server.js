import express from "express";
import middleware from "webpack-dev-middleware";

import webpack from "webpack";
import { HMR, getTemplate } from "./ssr-hmr";

const port = process.env.PORT || 5000;

const compiler = webpack(require("../webpack.dev"));
const app = express();

app.use(
  middleware(compiler, {
    serverSideRender: true,
    publicPath: "/"
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.use(HMR);

app.use("/dist", express.static("dist"));

app.get("/", (req, res) => {
  const html = getTemplate();
  res.send(html);
});

app.listen(port);
console.log(`Server listening in port ${port}`);
