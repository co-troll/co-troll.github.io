const headerTabs = [mainHeader, profileHeader, skillHeader, projectHeader];
const tabs = [main, profile, skill, project];

headerTabs.forEach((El, index) => {
    El.addEventListener("click", () => {
        console.log(header.clientHeight);
        scrollTo({ top: tabs[index].offsetTop - header.clientHeight });
    })
})


const skillTabs = [skillAll, skillFE, skillBE, skillLa];

const skillList = [
    [Shtml, Scss, Sjs, Sts, Snode, Sreact, Smysql],
    [Shtml, Scss, Sjs, Sreact],
    [Snode, Smysql],
    [Sjs, Sts]
]


skillTabs.forEach((El, index) => {
    El.addEventListener("click", () => {
        skillList[0].forEach((skill) => {
            skill.style.display = "none";
        })
        skillTabs.forEach((tab) => {
            tab.style = "";
        })
        El.style.borderBottomColor = "#354649";
        El.style.color = "#354649";
        skillList[index].forEach((skill) => {
            skill.style.display = "flex";
        })
    })
})

const modalTabs = [Mtitle, Mimg, MdesT, MdesD, MdateT, MdateD, MdevT, MdevD, MfeaT, MfeaD, MresT, MresD, MskillD];

const projectList = [
    [
        "디스코드 일정관리 봇 프로젝트", "", 
        "소개", "Discordjs 라이브러리와 로스트아크 API를 활요한 게임 일정관리 봇",
        "프로젝트 기간", "2024.10 ~",
        "개발 형식", "개인 프로젝트",
        "주요 기능", "캐릭터 등록/재등록/삭제 명령어 입력 시 로스트아크 api에서 캐릭터의 이름으로 데이터를 받아와 등록 및 재등록 시 일주일에 플레이할 보스 3가지를 선택할 수 있는 메뉴를 보여주고 선택 후 데이터베이스에 데이터를 저장,<br>레이드 명령어 입력시 등록할 캐릭터와 선택한 3가지 보스가 쓰여진 버튼으로 된 리스트를 채팅창에 출력<br>보스가 쓰여진 버튼 클릭시 완료 상태로 변경되는 방식으로 일정을 관리",
        "개발 목적", "api 사용 연습<br>친구들과의 일정을 공유 및 관리를 하기 위해서",
        "TypeScript • Discord.js • Axios"
    ],
    [
        "3D 책 일정관리 앱 프로젝트 (Daily Chapter)", "", 
        "소개", "three.js 라이브러리를 활용해 일정을 3d 책의 형태로 시각화한 일정관리 앱",
        "프로젝트 기간", "2024.09.24 ~ 2024.10.24",
        "개발 형식", "팀프로젝트 (4인)",
        "본인 기능", "Threejs를 리엑트의 컴포넌트 방식으로 사용할 수 있게 만들어 주는 React Three Fiber(R3F)를 활용해 일정을 3d 책의 형태로 렌더링하는 기능을 구현<br>R3F와 Rapier.js를 결합한 React Three Rapier 라이브러리를 활용해 3d 책의 물리엔진을 추가하여 움직이는 애니메이션 기능 구현<br>Docker를 사용해 프로젝트 이미지화",
        "회고", "three.js를 처음 사용하여 프로젝트를 진행하다 보니 어려움이 있었다는 문제 -> 공식 문서와 여러 매체를 통해서 제공되는 정보를 통해 빠르게 알아갈수 있었고 이 경험을 통해 새로운 기술을 빠르게 배우고 사용하는 능력을 키우게 됨",
        "Nextjs • TypeScript • Axios • Notion • Github • Notion • AWS • Docker • Nestjs • Sequelize • MySQL • SolAPI"
    ],
    [
        "유튜브 쇼츠폼 형식 게시판 프로젝트", "", 
        "소개", "유튜브 쇼츠폼의 UI/UX를 참고해서 구현한 게시판 프로젝트",
        "프로젝트 기간", "2024.07.18 ~ 2024.08.05",
        "개발 형식", "팀프로젝트 (3인)",
        "본인 기능", "원페이지 기법을 활용해 게시판 디자인<br>내비게이션 기법을 활용해 스크롤 기능을 구현했으며 마지막 게시글 로딩 시 게시글 추가 렌더링 구현<br>Axios를 활용해 서버에서 게시글를 요청하고 이를 자바스크립트 클래스를 활용해 데이터를 객체 형태로 구조화해서 CRUD 기능을 메소드화함",
        "회고", "axios 인스턴스 기능을 활용하지 않고 매번 api 요청을 할때마다 동일한 설정을 작성해 유지보수에 어려움이 있었다 -> 프로젝트 초기부터 axios 인스턴스 기능을 활용해 api 요청 설정을 쉽게 관리할 것임을 다짐함<br>다른 도메인끼리 토큰이 주고받지 못하는 문제 발생 -> 같은 도메인을 이용",
        "JavaScript • TypeScript • HTML • CSS • Axios • Express • Nestjs • MySQL"
    ],
    [
        "테트리스 프로젝트", "", 
        "소개", "웹소켓을 활용해 실시간으로 순위가 뒤바뀌는 테트리스 사이트",
        "프로젝트 기간", "2024.05.29 ~ 2024.06.05",
        "개발 형식", "개인 프로젝트",
        "주요 기능", "DOM의 canvas 요소를 활용해 테트리스를 그려냄<br>테트리스의 기본적인 로직<br>웹소켓을 활용해 실시간으로 점수 기록 시 점수판이 바뀌는 기능 구현",
        "개발 목적", "타입스트립트 연습<br>웹소켓 사용 연습",
        "WebSocket • Express • TypeScript"
    ],
    [
        "디스코드 카테고리 형식 게시판 프로젝트 ", "", 
        "소개", "디스코드의 카테고리 설정을 참고해 구현한 게시판 프로젝트",
        "프로젝트 기간", "2024.05.14 ~ 2024.05.28",
        "개발 형식", "팀프로젝트 (4인)",
        "본인 기능", "DOM 조작을 활용해 카테고리 및 게시판을 동적으로 추가/삭제 기능 구현<br>이벤트 처리 기법을 활용해 카테고리 및 게시판의 순서 변경과 게시판 상세 페이지 이동 기능 구현<br>로컬 스토리지를 활용해 카테고리 및 게시판 정보를 저장",
        "회고", "첫 팀 프로젝트이였어서 Github를 통한 파일 관리 문제가 빈번히 일어났던 문제 -> 처음에 공통적인 부분을 회의를 통해 틀을 작성한 후 브랜치를 나누어서 각자의 부분을 작업<br>이벤트 처리 기법을 잘못 사용했던 문제 -> 다른 처리 기법을 사용해 문제 해결",
        "JavaScript • HTML • CSS"
    ],
]

const githubList = [
    "https://github.com/co-troll/discordBot_Project",
    "https://github.com/co-troll/DevOps_Project_3-Daily-Chapter-",
    "https://github.com/co-troll/Devops_Project_02",
    "https://github.com/co-troll/TetrisPractice",
    "https://github.com/co-troll/DevOps_Project_01"
]

projectTabs = [botProject, bookProject, shortProject, tetrisProject, discordProject];

projectTabs.forEach((El, index) => {
    El.querySelector(".detailBtn").addEventListener("click", (e) => {
        console.log(e.target);
        modal.style.display = "flex";
        modalTabs.forEach((id, modalI) => {
            id.innerHTML = projectList[index][modalI];
        })
        Mimg.src = El.querySelector("img").src;
    })
    El.querySelector(".githubBtn").addEventListener("click", () => {
        open(githubList[index]);
    })
})


document.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }   
})
