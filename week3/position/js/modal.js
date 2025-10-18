/* ==========================================
   모달 관련 함수들
   ========================================== */

// 모달 열기 (중앙)
function openModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("slide-right");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// 모달 열기 (우측 슬라이드)
function openModalSlide() {
  const modal = document.getElementById("modal");
  modal.classList.add("slide-right");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// 모달 닫기
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";

  // 애니메이션 후 슬라이드 클래스 제거
  setTimeout(() => {
    modal.classList.remove("slide-right");
  }, 300);
}

// 모달 배경 클릭 시 닫기
function initModalBackgroundClick() {
  const modal = document.getElementById("modal");
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });
}

// ESC 키로 모달 닫기
function initModalEscapeKey() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const modal = document.getElementById("modal");
      if (modal.classList.contains("active")) {
        closeModal();
      }
    }
  });
}
