const express = require("express");
const app = express();

app.use(express.json());

// MAIN WORKFLOW ENDPOINT
app.post("/api/process", (req, res) => {
    const { prompt, note_id, timestamp } = req.body;

    console.log("Received data from SpeakSpace:");
    console.log("Prompt:", prompt);
    console.log("Note ID:", note_id);
    console.log("Timestamp:", timestamp);

    // SIMPLE WORKFLOW EXAMPLE:
    // Convert the text into a simple HTML blog post
    const blogPost = `
        <h1>Your Blog Post</h1>
        <p>${prompt}</p>
    `;

    return res.json({
        status: "success",
        message: "Workflow executed",
        output: blogPost
    });
});

// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
