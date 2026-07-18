if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
document.body.classList.add('lock-active');
const memories = document.querySelectorAll('.memory-left, .memory-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
})
memories.forEach((memory) => {
  observer.observe(memory);
});
const endingBtn = document.querySelector(".end-btn")
const message = document.querySelector(".message")
endingBtn.addEventListener("click", () => {
  const isNowVisible = message.classList.toggle('visible');
  endingBtn.textContent = isNowVisible ? "I Love youu"
    : "Joj nv nis mor";

  // spawn a few hearts
  if (isNowVisible) {
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const heart = document.createElement('span');
        heart.textContent = '♥';
        heart.className = 'heart';
        heart.style.left = (20 + Math.random() * 60) + '%';
        heart.style.setProperty('--rise', (40 + Math.random() * 60) + 'vh');
        heart.style.fontSize = (14 + Math.random() * 14) + 'px';
        const duration = 1.8 + Math.random() * 1.4;
        heart.style.animationDuration = duration + 's';
        heart.style.setProperty('--sway', (Math.random() * 60 - 30) + 'px');
        if (Math.random() < 0.35) {
          heart.style.color = 'var(--kraft)';
        }

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), duration * 1000 + 100);
      }, i * 50);
    }
  }

});
const lockScreen = document.querySelector('#lock-screen');
const dateInput = document.querySelector('#date-input');
const unlockBtn = document.querySelector('#unlock-btn');
const lockError = document.querySelector('#lock-error');

const correctDate = '25.07'

function normalizeDate(raw) {
  return raw.trim().replace(/[\/\-.\s]+/g, '.');
}

function tryUnlock() {

  if (normalizeDate(dateInput.value) === correctDate) {
    lockScreen.classList.add('unlocked');
    document.body.classList.remove('lock-active');
  } else {
    lockError.textContent = 'Kom yy muy nh';
    dateInput.classList.remove('shake');
    void dateInput.offsetWidth;
    dateInput.classList.add('shake');
  }
}

unlockBtn.addEventListener('click', tryUnlock);

dateInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    tryUnlock();
  }
});





