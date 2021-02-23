// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const proxy = require("express-http-proxy");
const cors = require("cors");

const app = express();

// Parsers for POST data
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false, limit: "20mb" }));

app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist")));

// Set our api routes proxy to point to spring boot server
app.use("/server", proxy("http://localhost:8080"));

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

/**
 * Get port from environment and store in Express.
 */
const port = "4200";

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`Angular App is running on ${port}`));
