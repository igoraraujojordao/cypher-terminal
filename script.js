// Typing Effect for Initial Interface
document.addEventListener('DOMContentLoaded', function () {
    const options = {
        strings: ['Unlocking the Future of Crypto AI'],
        typeSpeed: 50,
        showCursor: false,
        onComplete: function () {
            document.getElementById('enter-btn').style.opacity = 1;
        }
    };

    const typed = new Typed('.typing', options);

    // Enter Button Click Event
    document.getElementById('enter-btn').addEventListener('click', function () {
        // Hide Initial Interface
        $('#initial-interface').fadeOut(1000, function () {
            // Show Main Content
            $('#main-content').fadeIn(1000, function () {
                // Start Code Background Animation
                startCodeBackground();
                // Initialize AOS Animations
                AOS.init({
                    duration: 1000,
                    once: true,
                });
                // Start Code Simulation
                startCodeSimulation();
            });
        });
    });
});

// Code Background Animation
function startCodeBackground() {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');

    c.width = window.innerWidth;
    c.height = window.innerHeight;
    document.getElementById('code-background').appendChild(c);

    const codeCharacters = '01';
    const fontSize = 14;
    const columns = c.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * c.height;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px Courier New';

        for (let i = 0; i < drops.length; i++) {
            const text = codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);

    // Adjust Canvas Size on Window Resize
    window.addEventListener('resize', function () {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    });
}

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
