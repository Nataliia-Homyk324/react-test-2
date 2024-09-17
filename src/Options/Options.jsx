import css from "./Options.module.css";
import Button from "../Button/Button.jsx";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.container}>
      <Button onClick={() => updateFeedback("good")}>Good</Button>
      <Button onClick={() => updateFeedback("neutral")}>Neutral</Button>
      <Button onClick={() => updateFeedback("bad")}>Bad</Button>

      {totalFeedback ? <Button onClick={resetFeedback}>Reset</Button> : null}
    </div>
  );
}
