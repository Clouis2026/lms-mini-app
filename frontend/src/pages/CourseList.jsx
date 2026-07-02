import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

function CourseList() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div className="container">

      <h1>Courses</h1>

      {courses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}

    </div>
  );
}

export default CourseList;