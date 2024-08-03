const answers = {
    "result1": ["mohsin"],
    "result2": ["paris"],
    "result3": ["mars"],
    "result4": ["h2o"],
    "result5": ["harperlee"],
    "result6": ["pacific"],
    "result7": ["japan"],
    "result8": ["davinci"],
    "result9": ["vatican"],
    "result10": ["calcium"],
    "result11": ["diamond"],
    "result12": ["einstein"],
    "result13": ["australia"],
    "result14": ["jupiter"],
    "result15": ["canberra"],
    "result16": ["oxygen"],
    "result17": ["nile"],
    "result18": ["lion"],
    "result19": ["cell"],
    "result20": ["elephant"]
};
let correctAttempts = 0;
let incorrectAttempts = 0;

function answer(selectedAnswer, resultId) {
    const resultElement = document.getElementById(resultId);

    if (answers[resultId] && answers[resultId].includes(selectedAnswer)) {
        resultElement.innerHTML = `<span style="color: green;">${selectedAnswer.toUpperCase()} is correct!</span>`;
        correctAttempts++;
    } else {
        resultElement.innerHTML = `<span style="color: red;">${selectedAnswer.toUpperCase()} is incorrect!</span>`;
        incorrectAttempts++;
    }


    document.getElementById('correct-attempts').textContent = correctAttempts;
    document.getElementById('failed-attempts').textContent = incorrectAttempts;
}