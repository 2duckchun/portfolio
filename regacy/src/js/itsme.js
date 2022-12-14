const itsmeRender = () => {
    itsmeCatchphrase()
    itsmeIntro()
    itsmeMydaily()
    itsmeProject()
}

const mainContainer = document.querySelector('.cont-main')

const itsmeCatchphrase = () => {
    const catchSection = document.createElement('section')
    catchSection.classList.add('sect-catch-itsme')
    catchSection.innerHTML = `
    <p>지금 가장 값싼 개발자</p>
    <p><strong>2DC</strong> 입니다.</p>
    `
    mainContainer.appendChild(catchSection)
}

const itsmeIntro = () => {
    const introSection = document.createElement('section')
    introSection.classList.add('sect-intro-itsme')
    introSection.innerHTML = `
    <ul>
        <li>22년 5월경, 본격적으로 프로그래밍을 시작했습니다.</li>
        <li>탄탄한 JS 기초를 바탕으로, 폭발적인 성장을 이뤄내고자 합니다.</li>
        <li>이를 위해 '매일' 노력하고 있습니다.</li>
    </ul>
    <div class="hr-double"></div>
    `
    mainContainer.appendChild(introSection) 
}

const itsmeMydaily = () => {
    const mydailySection = document.createElement('section')
    mydailySection.classList.add('sect-mydaily-itsme')
    mydailySection.innerHTML = `
    <img src="https://ghchart.rshah.org/2DUCKCHUN" />
    <div class="cont-mydaily-explain-itsme">
        <ul>
            <li>성장궤적을 남기기위해 1일 1커밋과&nbsp<a href="https://2duckchun.tistory.com/" target="_blank">블로그</a>&nbsp활동을 합니다.</li>
            <li>현재 관심사는 알고리즘 이론 및 바닐라 JS 구현입니다.</li>
            <li>기본을 바탕으로 빠르게 지식을 흡수하는 주니어 개발자가 되겠습니다.</li>
        </ul>
    </div>
    `
    mainContainer.appendChild(mydailySection) 
}

const itsmeProject = () => {
    const projectSection = document.createElement('section')
    projectSection.classList.add('sect-project-itsme')
    projectSection.innerHTML = `
    <div class="hr-double"></div>
    <h2>PROJECT</h2>
    <ul class="ul-project">
        <li><h3 class="vm-project">마개조 밴딩머신 - 페어 프로그래밍</h3></li>
        <li><h3 class="tp-project">미래에 있을 팀 프로젝트</h3></li>
        <li><h3 class="oldjs-project">올드스쿨 자바스크립트 (기획 중) - 5년 내 착수 예정</h3></li>
        <li><h3 class="oldalgo-project">올드스쿨 알고리즘 (기획 중) - 5년 내 착수 예정</h3></li>
    </ul>
    `
    mainContainer.appendChild(projectSection)
    const projectUl = document.querySelector('.ul-project')
    projectUl.addEventListener('click', (e) => {
        if (e.target.classList.contains('vm-project')) {
            modalVm()
        }
        if (e.target.classList.contains('tp-project')) {
            modalTeamProject()
        }
        if (e.target.classList.contains('oldjs-project')) {
            modalOldJsProject()
        }
        if (e.target.classList.contains('oldalgo-project')) {
            modalOldAlgoProject()
        }
    })
}

const modalContainer = document.querySelector('.cont-modal')
const modalTitle = modalContainer.querySelector('.tit-modal')
const modalMain = modalContainer.querySelector('.main-modal')
const modalCloseBtn = modalContainer.querySelector('.btn-close-modal')

const modalVm = () => {
    modalTitle.textContent = '마개조 VM 머신'
    modalMain.innerHTML = `
    <p>★프로젝트 목적★</p>
    <ul>
        <li>페어 프로그래밍 경험 쌓기</li>
        <li>기획부터 요구사항 도출(설계) 해보기</li>
        <li>다양한 기능 구현해보기</li>
    </ul>
    `
    modalRender()
}

const modalTeamProject = () => {
    modalTitle.textContent = '팀 프로젝트'
    modalMain.innerHTML = `
    <p>★프로젝트 목적★</p>
    <ul>
        <li>팀 단위 프로젝트 경험 쌓기</li>
        <li>기획부터 요구사항 도출(설계) 해보기</li>
        <li>다양한 기능 구현해보기</li>
    </ul>
    `
    modalRender()
}

const modalOldJsProject = () => {
    modalTitle.textContent = '숙원사업 / 올드스쿨 자바스크립트'
    modalMain.innerHTML = `
    <p>★프로젝트 목적★</p>
    <ul>
        <li>치열하게 공부해야 내것이 된다!! 라는 개인적 신념 아래</li>
        <li>효율적인 공부방법을 연구하여 전파하고자 함</li>
    </ul>
    <hr>
    <h3>기획 중</h3>
    <ul>
        <li>1. 다양한 퀴즈</li>
        <li>2. 로그인 기능 추가하여 진척도를 저장할 수 있게함</li>
        <li>2-1. 이를 통해 인적자원 데이터베이스 확보 가능</li>
        <li>3. 질문하고 답변할 수 있는 창구를 만듦</li>
    </ul>
    `
    modalRender()
}

const modalOldAlgoProject = () => {
    modalTitle.textContent = '숙원사업 / 올드스쿨 알고리즘'
    modalMain.innerHTML = `
    <p>★프로젝트 목적★</p>
    <ul>
        <li>치열하게 공부해야 내것이 된다!! 라는 개인적 신념 아래</li>
        <li>효율적인 공부방법을 연구하여 전파하고자 함</li>
    </ul>
    <hr>
    <h3>기획 중</h3>
    <ul>
        <li>1. 적당히 깊은 이론적 이해</li>
        <li>2. 실제 적용사례 및 알고리즘을 이용한 메서드 구현</li>
        <li>3. 아직 본인의 알고리즘 공부가 부족하여 추가적 기획 필요</li>
    </ul>
    `
    modalRender()
}

const modalRender = () => {
    modalContainer.style.display = 'flex'
}

modalCloseBtn.addEventListener('click', e => {
    modalContainer.style.display = 'none'
})

modalContainer.addEventListener('click', (e) => {
    const eventTarget = e.target
    if (eventTarget.classList.contains('overlay-modal')) {
        modalContainer.style.display = 'none'
    }
})

window.addEventListener('keyup', e => {
    if (modalContainer.style.display === 'flex' && e.key === 'Escape') {
        modalContainer.style.display = 'none'
    }
})

/*
모달창 만들기는 분리함.
각 h3에 class를 닮 -> 클래스에 모달을 할당해줌.
클래스를 단 상태에서 itsme가 모달창 만드는 녀석을 불러올 것임.
원래 기본 창에 모달창을 따로 만들어서 보관함.


*/
export default itsmeRender