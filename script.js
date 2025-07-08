// const body = document.querySelector("body")
const decreaseButton = document.getElementById("decrease-value");
const increaseButton = document.getElementById("increase-value");
const resetButton = document.getElementById("reset-value");
// const saveButton = document.getElementById("save-value");
// const changeThemeButton = document.getElementById("change-theme");
// let themeText = document.getElementById("theme-text");

let counterValue = 0;
// let savedValues = [];

decreaseButton.addEventListener("click", decreaseValue);
increaseButton.addEventListener("click", increaseValue);
resetButton.addEventListener("click", resetValue);
// saveButton.addEventListener("click", saveValue);
// changeThemeButton.addEventListener("click", changeTheme);

function decreaseValue() {
    counterValue -= 1;
    updateCounterValue();
};

function increaseValue() {
    counterValue += 1;
    updateCounterValue();
};

function resetValue() {
    if (counterValue === 0) {
        updateCounterValue();
    } else {
        alert("This will reset the counter's value to 0! By clicking \"OK\", you confirm the reset.");
        counterValue = 0;
    }
    updateCounterValue();
};

/*
function saveValue(value) {
    savedValues.push(value);
    displaySavedValues(savedValues);
    console.log(savedValues);
};

function displaySavedValues(list) {
    let savedValuesDisplay = document.getElementById("saved-values");
    savedValuesDisplay.innerHTML = ``;
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        savedValuesDisplay.innerHTML += `${list[i]}, `;
    }
}
*/

function updateCounterValue() {
    document.getElementById("value").innerHTML = counterValue;
};
updateCounterValue();

/*
function changeTheme() {
    if (themeText === "Light") {
        body.classList.cssText = "background-color: #000000;";
        themeText.innerText = "Dark";
        console.log(1);
    } else {
        body.classList.cssText = "background-color: #EFEFEF;";
        themeText.innerText = "Dark";
        console.log(2);
    }
}
*/