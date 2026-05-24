let inputBuffer = "";
const secret = "2505"; 

function add(val) {
    if (inputBuffer.length < 4) {
        inputBuffer += val;
        render();
    }
    if (inputBuffer.length === 4) {
        setTimeout(verify, 300);
    }
}

function render() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i < inputBuffer.length) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function del() {
    inputBuffer = "";
    render();
}

function verify() {
    if (inputBuffer === secret) {
        document.getElementById('passcode-screen').classList.add('hidden');
        document.getElementById('surprise-screen').classList.remove('hidden');
        
        const music = document.getElementById('bg-music');
        music.play().catch(() => {
            document.addEventListener('click', () => music.play(), { once: true });
        });
    } else {
        if (navigator.vibrate) navigator.vibrate(200);
        alert("Wrong code! ❤️");
        del();
    }
}
