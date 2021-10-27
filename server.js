const express = require("express");
const path = require("path");

const app = express();

app.use('/assets', express.static('assets'));

app.use('/src', express.static('src'))

app.get("/*", (req, res) => {
   res.sendFile(path.resolve( "index.html"));
});

app.listen(process.env.PORT || 4000, () => console.log('server start'));