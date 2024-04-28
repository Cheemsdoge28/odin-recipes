class GalleryView {
    constructor(divId) {
        this.galleryDiv = document.getElementById(divId);
        this.getImages();
        this.numImages = this.images.length;
        this.currentIndex = 0;
        this.showCurrentImage(); // Show the first image when initialized
        this.createNavigationButtons();
    }

    getImages() {
        if (this.galleryDiv !== null) {
            this.images = this.galleryDiv.querySelectorAll('img');
        }
    }

    createNavigationButtons() {
        const nextButton = document.createElement('div'); // Change button elements to div elements
        nextButton.textContent = 'Next';
        nextButton.classList.add('button');
        nextButton.addEventListener('click', () => {
            this.nextImage();
            this.galleryDiv.focus();
        });
    
        const prevButton = document.createElement('div'); // Change button elements to div elements
        prevButton.textContent = 'Previous';
        prevButton.classList.add('button');
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
        for (let i = 0; i < this.numImages; i++) {
            this.images[i].style.display = 'none';
        }
        this.images[this.currentIndex].style.display = 'block';
    }
}

// Create an instance of GalleryView and pass the div ID
const myGallery = new GalleryView('gallery1');
