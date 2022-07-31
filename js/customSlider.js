function Slider() {

    //properties
    this.imageURL = [];
    this.prefButton = document.getElementById("slideL");
    this.nextButton = document.getElementById("slideR");
    this.currentImg = document.getElementById("currentImg");
    this.currentImgIndex = 0;

    // methods
    this.init = function(e) {
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
    };

    //pref slide
    this.showPrefImg = function(e) {
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
    };

    //next slide
    this.showNextImg = function(e) {
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
    };
};