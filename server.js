const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the static HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  console.log("\n============================");
  console.log(" Form Data Received:");
  console.table({ Name: name, Email: email, Message: message });
  console.log("============================\n");

  res.send(`
    <h1>Form Submitted Successfully!</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <a href="/">Go back</a>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
