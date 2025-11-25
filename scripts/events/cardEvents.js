// events/cardEvents.js
export function setupCardEvents({ card, prevBtn, nextBtn }) {
  let touchStartX = null;
  let touchEndX = null;

  function handleTouchStart(e) {
    if (e.touches && e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
    }
  }
  function handleTouchEnd(e) {
    if (touchStartX === null) return;
    touchEndX = (e.changedTouches && e.changedTouches[0].clientX) || null;
    if (touchEndX === null) return;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevBtn.click();
      } else {
        nextBtn.click();
      }
    }
    touchStartX = null;
    touchEndX = null;
  }
  card.addEventListener('touchstart', handleTouchStart);
  card.addEventListener('touchend', handleTouchEnd);
}

export function animateCardTransition(card, direction) {
  card.style.transition = 'transform 0.25s cubic-bezier(.4,0,.2,1), opacity 0.18s';
  card.style.opacity = '0.7';
  card.style.transform = `translateX(${direction === 'left' ? '-' : ''}40px)`;
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateX(0)';
  }, 250);
}
