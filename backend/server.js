const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Hardcoded course data
const courses = [
  {
    id: "1",
    title: "Workplace Safety",
    lessons: [
      { id: "l1", title: "Introduction" },
      { id: "l2", title: "Hazards" }
    ]
  }
];

// GET all courses
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

// GET single course by id
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});