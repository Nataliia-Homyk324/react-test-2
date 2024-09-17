import css from "./Button.module.css";

export default function Button({ children, onClick }) {
  return (
    <div className={css.mainButton} onClick={onClick}>
      {children}
    </div>
  );
}
