import React from "react";
import server from "http";
import express from "express";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import AppComponent from "./src/App";
import template from "./src/template";

const app = express();

const port = process.env.PORT || 5000;
app.use("/dist", express.static("dist"));

app.get("/", (req, res) => {
  const sheet = new ServerStyleSheet();

  const html = renderToString(sheet.collectStyles(<AppComponent />));

  const styles = sheet.getStyleTags();

  res.send(
    template({
      body: html,
      styles
    })
  );
});

app.listen(port);
console.log(`Server listening in port ${port}`);
