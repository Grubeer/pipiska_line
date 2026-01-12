const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const measure = document.getElementById("measure");
const rulerTrack = document.querySelector(".ruler-track");
const floaters = document.querySelector(".floaters");
const floaterEmojis = ["🍆", "💫", "✨", "💜", "🩷"];

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

const createFloaters = (count = 18) => {
  if (!floaters) return;
  floaters.innerHTML = "";

  Array.from({ length: count }).forEach((_, index) => {
    const floater = document.createElement("span");
    const emoji = floaterEmojis[index % floaterEmojis.length];
    const left = Math.random() * 100;
    const size = 18 + Math.random() * 22;
    const duration = 10 + Math.random() * 12;
    const delay = Math.random() * 6;
    const drift = (Math.random() * 80 - 40).toFixed(1);

    floater.className = "floater";
    floater.textContent = emoji;
    floater.style.left = `${left}%`;
    floater.style.fontSize = `${size}px`;
    floater.style.setProperty("--duration", `${duration}s`);
    floater.style.setProperty("--delay", `${delay}s`);
    floater.style.setProperty("--drift", `${drift}px`);
    floaters.appendChild(floater);
  });
};

createFloaters();
