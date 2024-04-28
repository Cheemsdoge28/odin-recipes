class GalleryView {
    constructor(divId) {
        this.galleryDiv = document.getElementById(divId);
        this.getImages();
        this.currentIndex = 0;
        this.showCurrentImage(); // Show the first image when initialized
        this.createNavigationButtons();
    }

    getImages() {
        if (this.galleryDiv !== null) {
            this.images = Array.from(this.galleryDiv.querySelectorAll('img')); // Convert NodeList to array
            console.log("Number of images found:", this.images.length); // Log the number of images found
            this.numImages = this.images.length;
        }
    }

    createNavigationButtons() {
        const nextButton = document.createElement('div'); // Change button elements to div elements
        nextButton.textContent = 'Next';
        nextButton.classList.add('nav-button');
        nextButton.addEventListener('click', () => {
            this.nextImage();
            this.galleryDiv.focus();
        });

        const prevButton = document.createElement('div'); // Change button elements to div elements
        prevButton.textContent = 'Previous';
        prevButton.classList.add('nav-button');
        prevButton.addEventListener('click', () => {
            this.prevImage();
            this.galleryDiv.focus();
        });

        this.galleryDiv.appendChild(prevButton);
        this.galleryDiv.appendChild(nextButton);
    }

    nextImage() {
        this.currentIndex++;
        if (this.currentIndex >= this.numImages) {
            this.currentIndex = 0;
        }
        this.showCurrentImage();
    }

    prevImage() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.numImages - 1;
        }
        this.showCurrentImage();
    }

    showCurrentImage() {
        const galleryWidth = this.galleryDiv.offsetWidth;
        const offset = -this.currentIndex * galleryWidth;

        for (let i = 0; i < this.numImages; i++) {
            if (i === this.currentIndex) {
                this.images[i].style.display = 'block'; // Show the current image
                this.images[i].style.transition = 'transform 0.5s ease'; // Add transition property
            } else {
                this.images[i].style.display = 'none'; // Hide all other images
            }

            const newPosition = i * galleryWidth + offset;
            this.images[i].style.transform = `translateX(${newPosition}px)`; // Apply transform
        }
    }
}

// Create an instance of GalleryView and pass the div ID
const myGallery = new GalleryView('gallery1');
