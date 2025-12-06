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

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("SpeakSpace API is running on Railway 🚀");
});

// START SERVER
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
