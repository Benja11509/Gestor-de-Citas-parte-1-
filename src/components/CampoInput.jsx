import "./CampoInput.css";
function CampoInput({ label, type }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} className="u-full-width" />
    </>
  );
}

export default CampoInput;