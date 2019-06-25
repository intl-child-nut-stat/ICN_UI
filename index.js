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

