const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const measure = document.getElementById("measure");

const updateMeasure = () => {
  const max = Number(lengthInput.max);
  const value = Number(lengthInput.value);
  const percent = (value / max) * 100;

  measure.style.width = `${percent}%`;
  lengthValue.textContent = `${value.toFixed(1)} см`;
};

lengthInput.addEventListener("input", updateMeasure);
updateMeasure();
