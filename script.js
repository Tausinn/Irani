 
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * window.innerWidth + 'px';
      star.style.top = '-20px';
      star.style.animationDuration = 2 + Math.random() * 3 + 's';
      star.style.opacity = 1;
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 5000);
    }
    setInterval(createStar, 100);

   
    const emojis = ['❤️', '💫', '✨', '💕', '🌙'];

    function createEmoji() {
      const emoji = document.createElement('div');
      emoji.classList.add('emoji');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.bottom = '0px';
      emoji.style.fontSize = 20 + Math.random() * 20 + 'px';
      emoji.style.animationDuration = 3 + Math.random() * 3 + 's';
      document.body.appendChild(emoji);
      setTimeout(() => emoji.remove(), 7000);
    }
    setInterval(createEmoji, 500);

     // filepath: /Users/tausinurrahman/Documents/vs code/sweetpea/index.html
  document.addEventListener('DOMContentLoaded', function() {
    // Yes buttons
    const cuteBtns = document.querySelectorAll('.ask-buttons .cute-btn');
    cuteBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        alert("I can't blv u said yes tho there wasn't any other choice hahaha, I am the happiest man alive now :))");
      });
    });

    // Moving No button
    const noBtn = document.getElementById('noBtn');
    let container = noBtn.parentElement;
    let section = document.querySelector('.just-kidding-section');
    let width = section.offsetWidth - noBtn.offsetWidth;
    let height = section.offsetHeight - noBtn.offsetHeight;

    function moveNoBtn() {
      width = section.offsetWidth - noBtn.offsetWidth;
      height = section.offsetHeight - noBtn.offsetHeight;
      const randX = Math.random() * width;
      const randY = Math.random() * height;
      noBtn.style.left = randX + 'px';
      noBtn.style.top = randY + 'px';
    }

    noBtn.addEventListener('mouseenter', moveNoBtn);
    noBtn.addEventListener('touchstart', function(e) {
      moveNoBtn();
      e.preventDefault();
    });
  });