// class MyCarousel {
//     constructor(element) {
//         this.element = element;
        
//         this.images = Array.from(this.element.querySelectorAll('img'));

//         this.leftButton = this.element.querySelector('.left-button');
//         this.rightButton = this.element.querySelector('.right-button');

//         this.leftButton.addEventListener('click', () => this.slideLeft());
//         this.rightButton.addEventListener('click', () => this.slideRight());

//         // this.test = [1, 2, 3, 4]
//     }
    
//     slideRight() {
//         // let images = Array.from(this.element.querySelectorAll('img'));
//         // console.log(images);
//         // console.log(this.images);

//         this.images.forEach(item => item.style.display = 'none');

//         this.images.unshift(this.images[this.images.length -1]);
//         this.images.pop();

//         this.images[0].style.display = 'block';

//         // console.log(this.test);
//         // this.test.unshift(this.test[this.test.length -1]);
//         // this.test.pop();
//         // console.log(this.test);
//     }

//     slideLeft() {
//         console.log('click');
//         this.images.forEach(item => item.style.display = 'none');

//         this.images.push(this.images[0]);
//         this.images.shift();

//         this.images[0].style.display = 'block';

//         // console.log(this.test);
//         // this.test.push(this.test[0]);
//         // this.test.shift();
//         // console.log(this.test);
//     }
// }

// let carousell = document.querySelector('.mycarousel');
// let myCarousel = new MyCarousel(carousell);

// console.log(carousel);

class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        console.log(this.carousel);
        this.images = this.carousel.querySelectorAll('img');
        this.index = 0;
        this.current = new CarouselImage(this.images);
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.leftButton.addEventListener('click', (e) => this.displayImage(e));
        this.rightButton.addEventListener('click', (e) => this.displayImage(e));
    }
    displayImage(e) {
        if (e.target.className == 'right-button') {
            if (this.index < this.images.length - 1) {
                this.index += 1;
            }
            else {
                this.index = 0;
 
            }
        }
        if (e.target.className == 'left-button') {
            if (this.index > 0) {
                this.index -= 1;
            }
            else {
                this.index = this.images.length - 1;
            }
        }
        this.current.displayNewImage(this.index);
 
 
    }
 }
 
 class CarouselImage {
    constructor(images) {
        this.images = images;
        this.images[0].style.display = "block";
 
 
    }
    displayNewImage(index) {
        Array.from(this.images).forEach(image => image.style.display = "none");
        this.images[index].style.display = "block";
    }
 }
 
 let carousel = document.querySelector('.carousel');
 let carouselObject = new Carousel(carousel);
 
