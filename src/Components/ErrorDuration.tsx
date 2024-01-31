import "../index.css";

export default function ErrorDuration({ onShowError }) {
  return (
    <div className="alert">
      <span className="closebtn" onClick={onShowError}>
        &times;
      </span>
      <strong>Opps!</strong> The duration should not be less than -1;
    </div>
  );
}
