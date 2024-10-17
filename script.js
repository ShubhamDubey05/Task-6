// Get elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.close');

// Open lightbox when image is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImage.src = this.src;
    });
});

// Close lightbox when close button is clicked
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImage) {
        lightbox.style.display = 'none';
    }
});
