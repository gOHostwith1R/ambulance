const express = require("express");
const path = require("path");

const app = express();

app.use('/assets', express.static('assets'));

app.use("/static", express.static(path.resolve(__dirname, "src/views", "static")));

app.get("/*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "src/views", "index.html"));
});

app.listen(process.env.PORT || 4000, () => console.log('server start'));