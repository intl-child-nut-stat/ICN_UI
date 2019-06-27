class TabLink {
  constructor(link) {
      // this.link = link
      const tabNumber = link.dataset.tab
      console.log('TabLink', tabNumber, '.content[data-tab="' + tabNumber + '"]')
      this.contentElement = document.querySelector(`.content[data-tab="${tabNumber}"]`)
      this.tabContent = new Content(this.contentElement)
      link.addEventListener('click', () => this.linkClick())
  }
  
  linkClick() {
      // console.log(this.tabContent)
      this.tabContent.toggle()
  }
  }

  class Content {
  constructor(content) {
      this.content = content
      console.log('Content', this)
      this.content.classList.add('js-enabled')
  }
  
  toggle() {
      // DONE: remove any current tab-active, then add to current content .tab-active
      const active = document.querySelector('.tab-active')
      if (active) active.classList.remove('tab-active')
      this.content.classList.add('tab-active')
  }
  }

  const links = document.querySelectorAll('.link[data-tab]')
  const tabContent = document.querySelector('.tab-content')
  const defaultTab = tabContent.dataset.defaultTab
  console.log('default-tab', defaultTab)

  links.forEach((link, index) => {
  const tabLink = new TabLink(link)
  console.log('tabLink', index, tabLink)
  
  if (index == defaultTab - 1) tabLink.linkClick()
  })
  console.log(links)



//   class Carousel {
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
//         console.log('test');

//         // console.log(this.test);
//         // this.test.unshift(this.test[this.test.length -1]);
//         // this.test.pop();
//         // console.log(this.test);
//     }

//     slideLeft() {

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

// let carousel = document.querySelector('.carousel');
// let myCarousel = new Carousel(carousel);