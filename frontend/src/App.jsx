import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseDetail from "./pages/CourseDetail";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>LMS Mini App</h1>

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            border: "1px solid #ccc",
            margin: 10,
            padding: 10,
            borderRadius: 8,
          }}
        >
          <h3>{course.title}</h3>

          <Link to={`/course/${course.id}`}>View Course</Link>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  );
}
