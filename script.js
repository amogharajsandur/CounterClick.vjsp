let counterValue = 0
const decreaseButton = document.getElementById("decrease-value");
const increaseButton = document.getElementById("increase-value");
const resetButton = document.getElementById("reset-value");

decreaseButton.addEventListener("click", decreaseValue);
increaseButton.addEventListener("click", increaseValue);
resetButton.addEventListener("click", resetValue);

function decreaseValue() {
    counterValue -= 1;
    updateCounterValue();
};

function increaseValue() {
    counterValue += 1;
    updateCounterValue();
};

function resetValue() {
    counterValue = 0;
    updateCounterValue();
}

function updateCounterValue() {
    document.getElementById("value").innerHTML = counterValue;
};
updateCounterValue();