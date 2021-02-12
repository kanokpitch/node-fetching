var fetch = require("node-fetch");

thisIsSyncFunction().then((response) => {
    const number1 = response.data;
    const calculation = number1 * 10;
    console.log(calculation);
});

async function thisIsSyncFunction() {
    try {
        let res = await fetch('https://codequiz.azurewebsites.net/data');
        return res.json();
    } catch (error) {
        console.log(error);
        return { data: 0 };
    }
}