function LessonItem({ lesson, completed, onToggle }) {
  return (
    <div className="lesson">
      <span>{lesson.title}</span>

      <button onClick={onToggle}>
        {completed ? "Completed ✓" : "Mark as Completed"}
      </button>
    </div>
  );
}

export default LessonItem;