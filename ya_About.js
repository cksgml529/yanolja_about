const bodys = document.querySelector("body");
const menu = document.querySelector(".container");
const gnb = document.querySelector("#gnb");
const lis = document.querySelectorAll("#gnb li");
const mission = document.querySelector("#brandMission");
const btnTop = document.querySelector(".buttonTop");
const clientHt = document.documentElement.clientHeight;

/* menu */

addEventListener("scroll", scrolled);

let prevscroll = scrollY;
function scrolled() {
  const menuHt = menu.offsetHeight;
  // mission항목은 글자 색이 바뀌는 구간 클래스로 변경해서 사용해야함
  const missionCt = mission.clientHeight;
  let nowscroll = scrollY;
  let scrollLc = clientHt / 3 + missionCt;
  // 스크롤 이벤트
  if (prevscroll < nowscroll) {
    menu.style.top = `-${menuHt}px`;
  } else if (prevscroll >= nowscroll) {
    menu.style.top = 0;
  }
  prevscroll = nowscroll;

  // 메뉴 글자 색 변경

  if (scrollY > scrollLc) {
    gnb.style.color = "#000";
    menu.style.backgroundColor = "#fff";
    btnTop.classList.add("scrollUp");
  } else if (scrollY <= scrollLc) {
    gnb.style.color = "#fff";
    menu.style.backgroundColor = "transparent";
    btnTop.classList.remove("scrollUp");
  }
  scrollLc = scrollLc - 900;
  if (scrollY > scrollLc) {
    btnTop.classList.add("scrollUp");
  } else if (scrollY <= scrollLc) {
    btnTop.classList.remove("scrollUp");
  }
}
// 메뉴 hover
menu.addEventListener("mouseenter", (e) => {
  menu.classList.add("showMenu");
  gnb.style.overflow = "visible";
  menu.style.backgroundColor = "#fff";
  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("showMenu");
    gnb.style.overflow = "hidden";
    menu.style.backgroundColor = "transparent";

    // hover 후에도 bgcolor 유지
    scrollY <= mission.clientHeight
      ? (menu.style.backgroundColor = "transparent")
      : (menu.style.backgroundColor = "#fff");
  });
});
/* btn Top */
const buttonTop = document.querySelector("#circleBottom");
buttonTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/* banner */
const pageLoad = () => {
  const clipImg = document.querySelector(".clipImg");
  const bgMask = document.querySelector(".bgMask");
  // menu랑 bgBox(메뉴에서 mission역할)는 메인메뉴에서도  어차피 써야되니까 전역으로 선언하세요.그냥 참고하라고 함수 안에 넣어둔 것

  const bgEnd = () => (bgMask.style.clipPath = "inset(0% 0% 0% 0% round 0)");
  const bgScaleUp = () => (clipImg.style.transform = "scale(1)");
  const bgLoad = () => (mission.style.clipPath = "inset(0% 0% 0% 0%)");
  const bgOut = () => (bgMask.style.display = "none");
  const menuDown = () => (menu.style.top = 0);

  menu.style.top = `-${menu.offsetHeight}px`;

  // bgEnd: bgMask 커지는 함수
  setTimeout(bgEnd, 500);
  // bgScaleUp: clipImg 살짝 커지는 함수
  setTimeout(bgScaleUp, 500);
  // bgLoad: 원래 이미지 커지는 함수. 생략 가능
  setTimeout(bgLoad, 1430);
  // bgMask 애니메이션 끝나고 사라지는 함수.
  setTimeout(bgOut, 3000);
  // 모든 애니메이션 후 메인메뉴 나타나는 함수.
  setTimeout(menuDown, 1280);
};

addEventListener("DOMContentLoaded", pageLoad);

/* mission+vision bgTxt */
const Brandvision = document.querySelector("#brandVision");

function textScroll() {
  const bgTxt1 = document.querySelector("#bgTxt1");
  const bgTxt2 = document.querySelector("#bgTxt2");
  const brandTxt = document.querySelectorAll(".brandTxt");
  let visionTp = Brandvision.offsetTop - 300;
  bgTxt1.style.transform = `translateX(-${scrollY - 500}px)`;
  let bg2scroll = scrollY - visionTp;
  if (visionTp - 100 < scrollY) {
    bgTxt2.style.transform = `translateX(-${bg2scroll}px)`;
  }

  //misionTxt Ani

  if (scrollY > mission.offsetTop - 300) {
    brandTxt.forEach((txt) => {
      txt.classList.add("active");
    });
  }
}
addEventListener("scroll", textScroll);

/* sectionList move*/

function sectionL() {
  const sectionCon = document.querySelectorAll(".sectionCon");
  sectionCon.forEach((list) => {
    let sectionST = list.clientHeight;
    let scrollList = (scrollY - sectionST) / 8;
    list.style.transform = `translateY(-${scrollList}px)`;
  });
}
addEventListener("scroll", sectionL);

//sectionTxt Ani

function sectionAni() {
  const sectionTxt1 = document.querySelector(".sectionTitleTxt1");
  const sectionTxt2 = document.querySelector(".sectionTitleTxt2");
  const sectionTxt3 = document.querySelector(".sectionTitleTxt3");
  // h2 event
  const sectionTech = document.querySelector(".tech");
  const sectionInfo = document.querySelector(".infomation");
  const sectionSpace = document.querySelector(".space");
  //section img event

  if (scrollY > sectionTech.offsetTop - 500) {
    sectionTxt1.classList.add("active");
  }
  if (scrollY > sectionInfo.offsetTop - 600) {
    sectionTxt2.classList.add("active");
  }
  console.log("sectionInfo.offsetTop - 800", sectionSpace.offsetTop - 1300);
  console.log("sectionInfo.offsetTop", sectionSpace.offsetTop);
  console.log("scorllY", scrollY);
  if (scrollY > sectionSpace.offsetTop - 1400) {
    sectionTxt3.classList.add("active");
  }

  // sectionList event
  const sectionList = document.querySelectorAll(".sectionList");

  if (scrollY / 1.5 > sectionList[0].offsetHeight) {
    sectionList[0].classList.add("active");
  }
  if (scrollY / 2.5 > sectionList[1].offsetHeight) {
    sectionList[1].classList.add("active");
  }
  if (scrollY / 3.5 > sectionList[2].offsetHeight) {
    sectionList[2].classList.add("active");
  }
}
addEventListener("scroll", sectionAni);

/* vision event*/

const titleEvent = () => {
  const brandCover = document.querySelectorAll(".visionTxtCover");
  const visionGood = document.querySelectorAll(".visionGood");
  const vision = document.querySelectorAll(".vision");
  if (scrollY > brandVision.offsetTop - 200) {
    brandCover.forEach((txt) => {
      txt.classList.add("active");
    });
  }

  // visionGoodTxt event
  if (scrollY > brandVision.offsetTop + 200) {
    visionGood[0].classList.add("active");
    visionGood[1].classList.add("active");
  }
  if (scrollY > brandVision.offsetTop + 900) {
    visionGood[2].classList.add("active");
    visionGood[3].classList.add("active");
  }
  // visionimg event
  if (scrollY > brandVision.offsetTop + 200) {
    vision[0].classList.add("active");
    vision[1].classList.add("active");
  }
  if (scrollY > brandVision.offsetTop + 900) {
    vision[2].classList.add("active");
    vision[3].classList.add("active");
  }
};

addEventListener("scroll", titleEvent);

/* history */
const historyList = document.querySelectorAll(".historyList");

historyList.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("listOpen");
  });
});
