"use strict";
const app = require("./app");
const cors = require('cors');
const { Pool } = require('pg');
const { DATABASE_URL } = require('./config');
const path = require("path");
const { PORT } = require("./config");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Connect to the PostgreSQL database
const pool = new Pool({
  connectionString: DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

// Serve the React app for all requests not handled by API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
  const server = this;
  server.on('error', function (error) {
    console.error(`Error starting server: ${error}`);
  });
});