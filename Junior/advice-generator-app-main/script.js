const dice = document.querySelector('.card-dice_bg');
const adviceNumber = document.querySelector('.card-advice_number');
const adviceText = document.querySelector('.card-advice_text'); // ✅ Renamed

window.onload = async function () {
    const adv = await getAdvice(); // ✅ Renamed function
    console.log("Advice on load:", adv);
    adviceNumber.innerHTML = `ADVICE #${adv.id}`;
    adviceText.innerHTML = `"${adv.advice}"`; // ✅ Uses the renamed DOM element
};

dice.addEventListener('click', async () => {
    const adv = await getAdvice();
    console.log(adv);
    adviceNumber.innerHTML = `ADVICE #${adv.id}`;
    adviceText.innerHTML = `"${adv.advice}"`;
});

async function getAdvice() { // ✅ Renamed function
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${random()}`);
        const data = await response.json();
        const adviceText = data.slip;
        return adviceText;
    } catch (error) {
        console.error("Error fetching advice:", error);
        return "No advice found.";
    }
}

function random() {
    const min = 1;
    const max = 224;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
