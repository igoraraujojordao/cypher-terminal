// Page 1 Typing Effect and Transition to Page 2
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".welcome-text", {
        strings: ["Unlocking the Future of Crypto AI"],
        typeSpeed: 50,
        showCursor: false,
        onComplete: function() {
            document.getElementById("enter-btn").style.opacity = 1;
        }
    });

    document.getElementById("enter-btn").addEventListener("click", function() {
        showPage("page2");
        initializeSequence();
    });
});

// Page 2 Initialization Sequence
function initializeSequence() {
    const initText = document.getElementById("init-text");
    const progressBar = document.querySelector(".progress");
    const messages = [
        "Initializing CipherTerminal AI Core...",
        "Connecting to the Crypto Network...",
        "Deploying Superintelligent Protocols...",
        "Initialization complete. Welcome to the Cypher Terminal."
    ];

    let index = 0;
    function showMessage() {
        if (index < messages.length) {
            initText.innerText = messages[index];
            index++;
            setTimeout(showMessage, 1000);
        } else {
            progressBar.style.width = "100%";
            setTimeout(() => showPage("page3"), 500);
        }
    }

    progressBar.style.width = "100%";
    setTimeout(showMessage, 1000);
}

// Page 3 Coding Simulation
function startCodingSimulation() {
    const codeLines = [
        "Loading AI subsystems...",
        "Initiating blockchain protocols...",
        "Enhancing intelligence matrix...",
        "CipherTerminal operational."
    ];

    const codingContainer = document.getElementById("coding-sequence");
    let lineIndex = 0;

    function addCodeLine() {
        if (lineIndex < codeLines.length) {
            codingContainer.innerHTML += codeLines[lineIndex] + "<br>";
            lineIndex++;
            setTimeout(addCodeLine, 1000);
        }
    }
    addCodeLine();
}

// Utility function to show pages
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
        page.classList.add("hidden");
    });
    const activePage = document.getElementById(pageId);
    activePage.classList.remove("hidden");
    activePage.classList.add("active");

    // Start coding simulation on page 3
    if (pageId === "page3") startCodingSimulation();
}
