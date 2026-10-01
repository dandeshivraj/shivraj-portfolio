const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static("public"));

// Contact form API
app.post("/contact", (req, res) => {

const { name, email, message } = req.body;

console.log("===== New Contact Message =====");
console.log("Name:", name);
console.log("Email:", email);
console.log("Message:", message);
console.log("===============================");

res.send("Message received successfully");

});

// Start server
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});