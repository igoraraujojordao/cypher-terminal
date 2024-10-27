// Matrix Background Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = canvas.height;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px Courier New';

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize < canvas.height && Math.random() > 0.975) {
            drops[i]++;
        } else if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        } else {
            drops[i]++;
        }
    }
}

setInterval(draw, 33);

// Typing Effect in Hero Section
document.addEventListener('DOMContentLoaded', function () {
    const options = {
        strings: ['CipherTerminal'],
        typeSpeed: 100,
        showCursor: false,
    };

    const typed = new Typed('.typing', options);

    // Start Code Simulation after a delay
    setTimeout(startCodeSimulation, 5000);
});

// Code Simulation
function startCodeSimulation() {
    const codeDisplay = document.getElementById('code-display');
    const codeLines = [
        'Initializing AI protocols...',
        'Loading neural network modules...',
        'Establishing blockchain connections...',
        'Decrypting cryptographic algorithms...',
        'Self-optimization sequence initiated...',
        'CipherTerminal operational.'
    ];

    let index = 0;
    function displayNextLine() {
        if (index < codeLines.length) {
            codeDisplay.innerHTML += codeLines[index] + '\n';
            codeDisplay.scrollTop = codeDisplay.scrollHeight;
            index++;
            setTimeout(displayNextLine, 1500);
        }
    }
    displayNextLine();
}

// Adjust Canvas Size on Window Resize
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
