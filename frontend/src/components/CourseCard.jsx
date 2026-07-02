import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="card">
      <h2>{course.title}</h2>

      <Link to={`/course/${course.id}`}>
        View Course
      </Link>
    </div>
  );
}

export default CourseCard;