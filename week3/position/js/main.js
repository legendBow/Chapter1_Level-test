/* ==========================================
   메인 JavaScript - 앱 초기화
   ========================================== */

// DOM 로드 완료 후 실행
document.addEventListener("DOMContentLoaded", function () {
  console.log("CSS Position Tutorial 초기화 완료!");

  // 모달 이벤트 초기화
  initModalBackgroundClick();
  initModalEscapeKey();

  // Fixed 버튼 스크롤 이벤트
  initFixedButtonScroll();

  // 부드러운 스크롤 초기화
  initSmoothScroll();
});

// Fixed 버튼 투명도 조절 (스크롤 위치에 따라)
function initFixedButtonScroll() {
  window.addEventListener("scroll", function () {
    if (fixedActive && window.scrollY > 300) {
      document.getElementById("fixedButton").style.opacity = "1";
    } else if (fixedActive) {
      document.getElementById("fixedButton").style.opacity = "0.5";
    }
  });
}

// 내부 링크 부드러운 스크롤
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// 페이지 로드 시 환영 메시지 (선택사항)
window.addEventListener("load", function () {
  console.log(`
    ╔══════════════════════════════════════════╗
    ║   CSS Position Tutorial                  ║
    ║   실무 프로젝트 구조로 구성되었습니다.   ║
    ╚══════════════════════════════════════════╝
    `);
});
