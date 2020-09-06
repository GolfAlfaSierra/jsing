const contentList = document.createElement('div')
contentList.setAttribute('id', 'contentList')
const ul = document.createElement('ul')

contentList.appendChild(ul)
/** @type {HTMLHeadingElement[]}*/
const whereHasId = []
document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((v) => {
v.getAttribute('id') !== null? whereHasId.push(v): null
})

whereHasId.forEach((v, k)=> {
  const li = document.createElement('li')
  const a = document.createElement('a')

  const hnum = v.tagName.charAt(1)
  // a.style.fontSize = `${hnum}0px`
  li.style.textIndent = `${hnum}0px`

  a.setAttribute('href', `#${v.getAttribute('id')}`)
  if (v.getAttribute('id') === null) {
    if (
      document.querySelector(`#${v.getAttribute('id')}`)
    ) {
      return null
    }
    a.setAttribute('href', `#${v.textContent}`)
  }
  a.innerText = v.textContent
  li.appendChild(a)
  ul.appendChild(li)
})

const maine = document.querySelector('main')

maine.insertAdjacentElement('afterbegin', contentList)
