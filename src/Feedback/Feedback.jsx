import css from "./Feedback.module.css";
export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
}) {
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);
  return (
    <div className={css.container}>
      {totalFeedback ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total:{totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </div>
      ) : (
        <p>No feedback yet!</p>
      )}
    </div>
  );
}
