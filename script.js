const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const measure = document.getElementById("measure");
const rulerTrack = document.querySelector(".ruler-track");

const updateMeasure = () => {
  const max = Number(lengthInput.max);
  const value = Number(lengthInput.value);
  const trackWidth = rulerTrack.clientWidth;
  const pxPerCm = trackWidth / max;

  measure.style.width = `${value * pxPerCm}px`;
  lengthValue.textContent = `${value.toFixed(1)} см`;
};

lengthInput.addEventListener("input", updateMeasure);
window.addEventListener("resize", updateMeasure);
updateMeasure();
