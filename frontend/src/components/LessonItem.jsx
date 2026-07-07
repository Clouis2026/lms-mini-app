function LessonItem({ lesson, completed, onToggle }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{lesson.title}</span>

      <button onClick={onToggle}>
        {completed ? "Completed ✓" : "Mark as Completed"}
      </button>
    </div>
  );
}

export default LessonItem;