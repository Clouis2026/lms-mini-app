import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LessonItem from "../components/LessonItem";

function CourseDetail() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.error(err));
  }, [id]);

  function toggleLesson(lessonId) {
    setCompleted((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  }

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back</Link>

      <h1>{course.title}</h1>

      {course.lessons.map((lesson) => (
        <LessonItem
          key={lesson.id}
          lesson={lesson}
          completed={completed[lesson.id]}
          onToggle={() => toggleLesson(lesson.id)}
        />
      ))}
    </div>
  );
}

export default CourseDetail;