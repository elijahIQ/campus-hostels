// 🏫 Tab Switching
function switchTab(tabId, event) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.hostels').forEach(section => section.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
  document.getElementById('searchInput').value = '';
}

// 🔍 Search
function searchHostels() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const activeTab = document.querySelector('.hostels.active');
  const hostels = activeTab.querySelectorAll('.hostel-card');

  hostels.forEach(hostel => {
    const name = hostel.dataset.name.toLowerCase();
    const location = hostel.dataset.location.toLowerCase();
    hostel.style.display = (name.includes(input) || location.includes(input)) ? 'block' : 'none';
  });
}

// 📸 Carousel Functionality
document.querySelectorAll('.carousel').forEach(carousel => {
  const imagesContainer = carousel.querySelector('.carousel-images');
  const images = imagesContainer.querySelectorAll('img');
  let index = 0;
  const total = images.length;

  // Move slides
  carousel.dataset.index = 0;
  carousel.move = function (dir) {
    index = (Number(carousel.dataset.index) + dir + total) % total;
    carousel.dataset.index = index;
    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
  };

  // Swipe functionality
  let startX = 0;
  imagesContainer.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  imagesContainer.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) carousel.move(1);
    else if (endX - startX > 50) carousel.move(-1);
  });
});

// For buttons ❮ ❯
function moveSlide(btn, dir) {
  const carousel = btn.parentElement;
  carousel.move(dir);
}
