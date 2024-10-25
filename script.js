// Typing effect for the opening phrase
var typed = new Typed("#welcome-text", {
    strings: ["Unlocking the Future of Crypto AI Launches"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: false,
    showCursor: false,
    onComplete: function() {
        startCodingSequence();
    }
});

// Simulated coding sequence effect
function startCodingSequence() {
    var codeLines = [
        "Initializing Cypher Terminal AI Bot...",
        "Connecting to blockchain...",
        "Launching superintelligent protocol...",
        "Cypher Terminal is live!"
    ];

    var codingElement = document.getElementById("coding-sequence");
    var index = 0;

    function addLine() {
        if (index < codeLines.length) {
            codingElement.innerHTML += codeLines[index] + "<br>";
            index++;
            setTimeout(addLine, 1000); // 1 second delay for each line
        }
    }

    addLine();
}
