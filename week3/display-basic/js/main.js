/**
 * 메인 자바스크립트 파일
 *
 * 역할:
 * - 동적 콘텐츠 로딩
 * - 이벤트 리스너 등록
 * - 페이지 초기화
 */

// ========== 페이지 로드 완료 후 실행 ==========
document.addEventListener("DOMContentLoaded", function () {
  console.log("페이지 로드 완료");

  // 여기에 초기화 코드 추가
  initializeComponents();
});

/**
 * 컴포넌트 초기화 함수
 * 향후 필요한 기능들을 여기에 추가
 */
function initializeComponents() {
  // 예: 폼 검증, 이벤트 바인딩 등
  console.log("컴포넌트 초기화 중...");

  // 폼 제출 이벤트
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }

  // 버튼 클릭 이벤트
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
}

/**
 * 폼 제출 핸들러
 * @param {Event} event - 제출 이벤트
 */
function handleFormSubmit(event) {
  // event.preventDefault(); // 필요시 폼 제출 방지
  console.log("폼 제출됨");

  // 여기에 폼 검증 로직 추가
}

/**
 * 버튼 클릭 핸들러
 * @param {Event} event - 클릭 이벤트
 */
function handleButtonClick(event) {
  const button = event.target;
  console.log("버튼 클릭:", button.textContent);

  // 여기에 버튼별 로직 추가
}
