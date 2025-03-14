// script.js
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    // Nếu index vượt quá số lượng ảnh, quay lại ảnh đầu tiên
    if (index >= totalSlides) {
        currentSlide = 0;
    }
    // Nếu index nhỏ hơn 0, chuyển đến ảnh cuối cùng
    else if (index < 0) {
        currentSlide = totalSlides - 1;
    }
    // Ngược lại, giữ nguyên index
    else {
        currentSlide = index;
    }
    // Tính toán vị trí chuyển đổi
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Tự động chuyển slide mỗi 5 giây
setInterval(nextSlide, 4000);
