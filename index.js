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