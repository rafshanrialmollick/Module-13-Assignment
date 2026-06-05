const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
const port = 5000;

// Get request
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

app.get("/welcome", (req, res) => {
  res.send("Welcome to Express Learning");
});

app.get("/student", (req, res) => {
  res.json({
    name: "John",
    course: "MERN Stack",
    batch: 13,
  });
});

app.get("/search", (req, res) => {
  const { name, course } = req.query;
  res.status(200).json({
    data: req.query,
  });
});

// Post request

app.post("/register", (req, res) => {
  const data = req.body;
  res.status(201).json({
    msg: "Created your API successfully",
    details: data,
  });
});

app.post("/product", (req, res) => {
  const { id } = req.query;

  res.send(`Product ID: ${id}`);
});

app.post("/login", (req, res) => {
  const { username, password } = req.headers;
  res.json({ username, password });
});

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

app.post("/uplode", upload.single("photo"), (req, res) => {
  const detailes = req.file;
  res.status(201).json({
    msg: "request succesfull",
    detailes: detailes,
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
