//app
const express = require("express");


const app = express();

// Middleware

app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Example API route
app.get("/api/users", (req, res) => {
    res.json({
        message: "Users fetched successfully",
        users: []
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});