const aboutmeRender = () => {
    videoRender()
    introRender()
    completeProjectRender()
    contactRender()
}

const mainContainer = document.querySelector('.cont-main')

const videoRender = () => {
    const videoSection = document.createElement('section')
    videoSection.classList.add('sect-video-aboutme')
    videoSection.innerHTML = `<video class="tag-video-aboutme" src="https://songz.c0d3.com/js4/exercises/pubDomainRemix.mp4" preload="none" controls></video>
    <div class="div-video-caption">Lazy loading이라 ▶를 누르셔야 나옵니다!</div>

    `
    mainContainer.appendChild(videoSection)
    const videoElement = document.querySelector('.tag-video-aboutme')
    const videoCaption = document.querySelector('.div-video-caption')

    videoElement.addEventListener('timeupdate', () => {
    const curMS = videoElement.currentTime * 1000
    const captionsAfterCurrent = captions.filter((e) => {
        return e.start <= curMS
    })
    const validCaptions = captionsAfterCurrent.filter((e) => {
        return e.end > curMS
    })

    let captionText = ''
    if (validCaptions.length) {
        captionText = validCaptions[0].txt
    }

    videoCaption.innerText = captionText
})
}

const introRender = () => {
    const introSection = document.createElement('section')
    introSection.classList.add('sect-intro-aboutme')
    introSection.innerHTML = `
    <div class="hr-double"></div>
    <div class="div-intro-aboutme">
    <div class="pic-intro-formal"></div>
    <div class="txt-intro">
        <h2>김태수</h2>
            <ul>
                <li>00대학교 동물생명공학과 졸업(12.3 ~ 16.2)</li>
                <li>대한민국 학군 장교 (16.3 ~ 18.6)</li>
                <li>한국OO협회 (19.12 ~ 22.4)</li>
            </ul>
        </div>
    </div>
    <div class="div-intro-aboutme">
    <div class="pic-intro-informal"></div>
    <div class="txt-intro">
        <h2></h2>
            <ul>
                <li>정보처리기사 취득 (22.7)</li>
                <li>제주알고리즘베이스캠프 연사자 참여 - 위니브 (22.10)</li>
                <li>멋쟁이사자처럼 FE 스쿨 3기 수료 중 (22.8 ~ 23.1)</li>
            </ul>
        </div>
    </div>
    `
    mainContainer.appendChild(introSection)
}

const completeProjectRender = () => {
    const completeProjectSection = document.createElement('section')
    completeProjectSection.classList.add('sect-done-project')
    completeProjectSection.innerHTML = `
    <div class="hr-double"></div>
    <h2>Completed Project </h2>
        <ul>
            <li>아직 완성된 프로젝트는 없지만 계속 늘려나갈 예정입니다.</li>
            <li>의미있는 프로젝트를 하고 싶습니다.</li>
        </ul>
    `
    mainContainer.appendChild(completeProjectSection)
}

const contactRender = () => {
    const contactSection = document.createElement('section')
    contactSection.classList.add('sect-contact')
    contactSection.innerHTML = `
    <div class="hr-double"></div>
    <h2>Contact</h2>
    <nav>
        <ul>
            <li><a href="mailto:kkts9308@gmail.com" target="_blank"><img src="./src/img/gmail.svg" alt="gmail"></a></li>
            <li><a href="https://github.com/2duckchun" target="_blank"><img src="./src/img/github.svg" alt="github"></a></li>
            <li><a href="https://2duckchun.tistory.com/" target="_blank"><img src="./src/img/tistory.svg" alt="tistory"></a></li>
        </ul>
    </nav>
    `
    mainContainer.appendChild(contactSection)
}



let captions = [{
    txt: "안녕하세요 김태수입니다.",
    start: 0,
    end: 4000
}, {
    txt: "나중에 위의 영상은 자기소개하는 모습으로 대체하고",
    start: 4000,
    end: 10000
}, {
    txt: "이렇게 JS를 이용하여 자막을 쏴보려 합니다.",
    start: 10000,
    end: 15000
}, {
    txt: "근데 이게 의미가 있을지는 잘 모르겠네요.",
    start: 15000,
    end: 20000
}, {
    txt: "대단한 기술은 아니지만",
    start: 20000,
    end: 24000
}, {
    txt: "주니어 개발자로써 써보는 것에 의의를 두고 싶습니다.",
    start: 24000,
    end: 30000
}, {
    txt: "자막은 이쯤하고...",
    start: 30000,
    end: 35000
}, {
    txt: "나중에 진짜 제 모습으로 찾아뵙지요...!",
    start: 35000,
    end: 40000
}, {
    txt: "감사합니다!!!",
    start: 40000,
    end: 45000
}
]

export default aboutmeRender