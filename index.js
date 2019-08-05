const express = require("express");
const path = require("path");
const projects = require("./Projects");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.get("/api/projects", (req, res) => {
    res.json(projects);
});

app.get("/projects/:title", (req, res) => {
    res.json(projects.filter(project => project.title === req.params.title));
});

app.use(
    express.static(path.join(__dirname, "public"), {
        extensions: ["html", "htm"]
    })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started"));
