const reverseAlphabet = (str) => {
    const letters = str.replace(/[^a-zA-Z]/g, "");
    const numbers = str.replace(/[a-zA-Z]/g, "");

    const reversedLetters = letters.split("").reverse().join("");

    return reversedLetters + numbers;
};

const result = reverseAlphabet("NEGIE1");
console.log(result); // EIGEN1
