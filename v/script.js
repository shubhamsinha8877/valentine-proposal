const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const customMessage = document.getElementById('customMessage');
const backgroundMusic = document.getElementById('backgroundMusic');

// Background music control (you can autoplay, but consider user experience)
// backgroundMusic.play(); 

noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

yesButton.addEventListener('click', () => {
    // Custom message content - you can fill this in later
    customMessage.innerHTML = '<h2>Yay! I love you!</h2><p>mai thumhari ankhoke mai pyar banke rehna chata hu! :)</p>';
    customMessage.style.display = 'block';
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    // You can add more effects here for the 'Yes' surprise
});