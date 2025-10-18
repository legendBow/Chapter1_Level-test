/* ==========================================
   실습 관련 함수들
   ========================================== */

// 실습 2: Relative 토글
function toggleRelative() {
  const box = document.getElementById("relativeBox");
  box.classList.toggle("moved");
}

// 실습 3: Absolute 토글
function toggleAbsolute() {
  const boxes = [
    "childBox1",
    "childBox2",
    "childBox3",
    "childBox4",
    "childBox5",
  ];
  boxes.forEach((id) => {
    document.getElementById(id).classList.toggle("positioned");
  });
}

// 실습 4: Fixed 토글
let fixedActive = false;
function toggleFixed() {
  fixedActive = !fixedActive;
  document.getElementById("fixedHeader").classList.toggle("show");
  document.getElementById("fixedButton").classList.toggle("show");
}

// 실습 5: Sticky 토글
function toggleSticky() {
  document.getElementById("stickySidebar").classList.toggle("activated");
}

// 실습 6: 배지 위치 토글
let badgePosition = 0;
function toggleBadge() {
  const badge = document.getElementById("cardBadge");
  badge.classList.toggle("positioned");

  if (badge.classList.contains("positioned")) {
    badgePosition = (badgePosition + 1) % 3;
    switch (badgePosition) {
      case 0: // 우상단
        badge.style.top = "15px";
        badge.style.right = "15px";
        badge.style.left = "auto";
        badge.style.bottom = "auto";
        badge.style.transform = "none";
        break;
      case 1: // 좌상단
        badge.style.top = "15px";
        badge.style.left = "15px";
        badge.style.right = "auto";
        badge.style.bottom = "auto";
        badge.style.transform = "none";
        break;
      case 2: // 중앙
        badge.style.top = "50%";
        badge.style.left = "50%";
        badge.style.right = "auto";
        badge.style.bottom = "auto";
        badge.style.transform = "translate(-50%, -50%)";
        break;
    }
  }
}

// 실습 7: z-index 토글
function toggleZIndex() {
  document.getElementById("layer1").classList.toggle("with-z");
  document.getElementById("layer2").classList.toggle("with-z");
  document.getElementById("layer3").classList.toggle("with-z");

  const success = document.getElementById("zIndexSuccess");
  if (document.getElementById("layer1").classList.contains("with-z")) {
    success.classList.add("show");
  } else {
    success.classList.remove("show");
  }
}

// 맨 위로 스크롤
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
