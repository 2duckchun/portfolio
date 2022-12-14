import itsmeRender from "./itsme.js";
import aboutmeRender from "./aboutme.js";

const activateItsme = document.querySelector('.go-itsme')
const activateAboutme = document.querySelector('.go-aboutme')
const activatePhoto = document.querySelector('.go-photo')
const mainContainer = document.querySelector('.cont-main')

itsmeRender()

activateItsme.addEventListener('click', () => {
    mainContainer.replaceChildren()
    itsmeRender()
})

activateAboutme.addEventListener('click', () => {
    mainContainer.replaceChildren()
    aboutmeRender()
})

activatePhoto.addEventListener('click', () => {
    alert('아직 미구현입니다!')
    alert('json파일과 캐러셀을 이용하여 PHOTO를 구성할 예정입니다!')
    alert('구현 예정시기는 멋사 리액트 진도 끝나고 입니다!')
})