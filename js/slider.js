const slider1 = {
    //properties
    imageURL: [],
    prefButton: document.getElementById("slideL"),
    nextButton: document.getElementById("slideR"),
    currentImg: document.getElementById("currentImg"),
    currentImgIndex: 0,

    // methods
    start: function(e) {
        const that = this;

        this.prefButton.addEventListener("click", e => {
            that.showPrefImg(e);
        });
        this.nextButton.addEventListener("click", e => {
            that.showNextImg(e);
        });

        this.imageURL.push("../img/1.jpg");
        this.imageURL.push("../img/2.jpg");
        this.imageURL.push("../img/3.jpg");
        this.imageURL.push("../img/4.jpg");
        this.imageURL.push("../img/5.jpg");
        this.currentImg.src = this.imageURL[this.currentImgIndex];
    },

    //pref slide
    showPrefImg: function(e) {
        this.nextButton.disabled = false;
        this.currentImgIndex--;
        console.log(this.currentImgIndex);
        if (this.currentImgIndex !== 0) {
            this.currentImg.src = this.imageURL[this.currentImgIndex];
        }
        if (this.currentImgIndex === 0) {
            this.prefButton.disabled = true;
            this.currentImg.src = this.imageURL[this.currentImgIndex];
        }
    },

    //next slide
    showNextImg: function(e) {
        this.prefButton.disabled = false;
        this.currentImgIndex++;
        console.log(this.currentImgIndex);
        if (this.currentImgIndex !== this.imageURL.length - 1) {
            this.currentImg.src = this.imageURL[this.currentImgIndex];
        }
        if (this.currentImgIndex === this.imageURL.length - 1) {
            this.nextButton.disabled = true;
            this.currentImg.src = this.imageURL[this.currentImgIndex];
        }
    },
};