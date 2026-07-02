const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const courses = [
  {
    id: "1",
    title: "Workplace Safety",
    lessons: [
      { id: "l1", title: "Introduction" },
      { id: "l2", title: "Hazards" }
    ]
  },
  {
    id: "2",
    title: "Customer Service",
    lessons: [
      { id: "l1", title: "Greeting Customers" },
      { id: "l2", title: "Handling Complaints" }
    ]
  }
];

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});