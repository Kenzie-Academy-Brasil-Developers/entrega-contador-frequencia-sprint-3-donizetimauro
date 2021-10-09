let typedText = document.getElementById("textInput").value;
typedText = typedText.toLowerCase();
typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
const letterCounts = {};
const wordCounts = {};
const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    const letterCounts = {};
    words = typedText.split(/\s/);
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        }else{ 
            letterCounts[currentLetter]++; 
        }
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }
    const wordCounts ={}
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1; 
        }else{ 
            wordCounts[currentWord]++; 
        }
    }
    for (let word in wordCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${word}": ${wordCounts[word]}, `;
        span.innerText = textContent; 
        const words2 = document.getElementById("wordsDiv");
        words2.appendChild(span); 
    }
});

