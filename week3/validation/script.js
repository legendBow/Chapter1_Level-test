// DOM 요소들
const form = document.getElementById("signupForm");
const successMessage = document.getElementById("success-message");

// 유효성 검사 규칙들
const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 20,
    pattern: /^[가-힣a-zA-Z\s]+$/,
    message: "이름은 2-20자의 한글 또는 영문만 입력 가능합니다.",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "올바른 이메일 형식을 입력해주세요.",
  },
  password: {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: "비밀번호는 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다.",
  },
  confirmPassword: {
    required: true,
    message: "비밀번호가 일치하지 않습니다.",
  },
  phone: {
    required: true,
    pattern: /^010-\d{4}-\d{4}$/,
    message: "010-0000-0000 형식으로 입력해주세요.",
  },
  birthdate: {
    required: true,
    message: "생년월일을 선택해주세요.",
  },
  gender: {
    required: true,
    message: "성별을 선택해주세요.",
  },
  terms: {
    required: true,
    message: "약관에 동의해주세요.",
  },
};

// 유효성 검사 함수들
function validateName(value) {
  const rule = validationRules.name;
  if (!value.trim()) return "이름을 입력해주세요.";
  if (value.length < rule.minLength || value.length > rule.maxLength) {
    return `이름은 ${rule.minLength}-${rule.maxLength}자로 입력해주세요.`;
  }
  if (!rule.pattern.test(value)) return rule.message;
  return "";
}

function validateEmail(value) {
  const rule = validationRules.email;
  if (!value.trim()) return "이메일을 입력해주세요.";
  if (!rule.pattern.test(value)) return rule.message;
  return "";
}

function validatePassword(value) {
  const rule = validationRules.password;
  if (!value) return "비밀번호를 입력해주세요.";
  if (value.length < rule.minLength) {
    return `비밀번호는 ${rule.minLength}자 이상이어야 합니다.`;
  }
  if (!rule.pattern.test(value)) return rule.message;
  return "";
}

function validateConfirmPassword(value, password) {
  const rule = validationRules.confirmPassword;
  if (!value) return "비밀번호 확인을 입력해주세요.";
  if (value !== password) return rule.message;
  return "";
}

function validatePhone(value) {
  const rule = validationRules.phone;
  if (!value.trim()) return "전화번호를 입력해주세요.";
  if (!rule.pattern.test(value)) return rule.message;
  return "";
}

function validateBirthdate(value) {
  const rule = validationRules.birthdate;
  if (!value) return rule.message;

  const birthDate = new Date(value);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  if (age < 14) return "14세 이상만 가입 가능합니다.";
  if (age > 100) return "올바른 생년월일을 입력해주세요.";

  return "";
}

function validateGender() {
  const rule = validationRules.gender;
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const isChecked = Array.from(genderInputs).some((input) => input.checked);
  if (!isChecked) return rule.message;
  return "";
}

function validateTerms() {
  const rule = validationRules.terms;
  const termsCheckbox = document.getElementById("terms");
  if (!termsCheckbox.checked) return rule.message;
  return "";
}

// 비밀번호 강도 검사
function checkPasswordStrength(password) {
  let score = 0;
  const strengthBar = document.querySelector(".strength-bar");
  const strengthText = document.querySelector(".strength-text");

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[@$!%*?&]/.test(password)) score++;

  // 기존 클래스 제거
  strengthBar.className = "strength-bar";

  if (password.length === 0) {
    strengthText.textContent = "비밀번호 강도를 확인하세요";
    return;
  }

  if (score <= 2) {
    strengthBar.classList.add("weak");
    strengthText.textContent = "약함";
    strengthText.style.color = "#e74c3c";
  } else if (score === 3) {
    strengthBar.classList.add("fair");
    strengthText.textContent = "보통";
    strengthText.style.color = "#f39c12";
  } else if (score === 4) {
    strengthBar.classList.add("good");
    strengthText.textContent = "좋음";
    strengthText.style.color = "#3498db";
  } else {
    strengthBar.classList.add("strong");
    strengthText.textContent = "강함";
    strengthText.style.color = "#27ae60";
  }
}

// 에러 메시지 표시
function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorElement = document.getElementById(`${inputId}-error`);

  input.classList.remove("success");
  input.classList.add("error");

  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add("show");
  }
}

// 성공 상태 표시
function showSuccess(inputId) {
  const input = document.getElementById(inputId);
  const errorElement = document.getElementById(`${inputId}-error`);

  input.classList.remove("error");
  input.classList.add("success");

  if (errorElement) {
    errorElement.textContent = "";
    errorElement.classList.remove("show");
  }
}

// 개별 필드 유효성 검사
function validateField(fieldName, value) {
  let errorMessage = "";

  switch (fieldName) {
    case "name":
      errorMessage = validateName(value);
      break;
    case "email":
      errorMessage = validateEmail(value);
      break;
    case "password":
      errorMessage = validatePassword(value);
      checkPasswordStrength(value);
      break;
    case "confirmPassword":
      const password = document.getElementById("password").value;
      errorMessage = validateConfirmPassword(value, password);
      break;
    case "phone":
      errorMessage = validatePhone(value);
      break;
    case "birthdate":
      errorMessage = validateBirthdate(value);
      break;
    case "gender":
      errorMessage = validateGender();
      break;
    case "terms":
      errorMessage = validateTerms();
      break;
  }

  if (errorMessage) {
    showError(fieldName, errorMessage);
    return false;
  } else {
    showSuccess(fieldName);
    return true;
  }
}

// 전화번호 자동 포맷팅
function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, "");

  if (value.length >= 11) {
    value = value.substring(0, 11);
    value = value.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  } else if (value.length >= 7) {
    value = value.replace(/(\d{3})(\d{4})/, "$1-$2");
  } else if (value.length >= 3) {
    value = value.replace(/(\d{3})/, "$1-");
  }

  input.value = value;
}

// 전체 폼 유효성 검사
function validateForm() {
  let isValid = true;

  // 각 필드 검사
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value;
  const birthdate = document.getElementById("birthdate").value;

  if (!validateField("name", name)) isValid = false;
  if (!validateField("email", email)) isValid = false;
  if (!validateField("password", password)) isValid = false;
  if (!validateField("confirmPassword", confirmPassword)) isValid = false;
  if (!validateField("phone", phone)) isValid = false;
  if (!validateField("birthdate", birthdate)) isValid = false;
  if (!validateField("gender")) isValid = false;
  if (!validateField("terms")) isValid = false;

  return isValid;
}

// 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", function () {
  // 실시간 유효성 검사
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    // 입력 중 실시간 검사
    input.addEventListener("input", function () {
      const fieldName = this.name;
      const value = this.value;

      // 전화번호 자동 포맷팅
      if (fieldName === "phone") {
        formatPhoneNumber(this);
      }

      // 비밀번호 확인은 비밀번호가 변경될 때도 검사
      if (fieldName === "password") {
        const confirmPassword =
          document.getElementById("confirmPassword").value;
        if (confirmPassword) {
          validateField("confirmPassword", confirmPassword);
        }
      }

      // 약간의 지연 후 검사 (타이핑 중 너무 자주 검사하지 않도록)
      clearTimeout(this.validationTimeout);
      this.validationTimeout = setTimeout(() => {
        validateField(fieldName, value);
      }, 300);
    });

    // 포커스 아웃 시 검사
    input.addEventListener("blur", function () {
      const fieldName = this.name;
      const value = this.value;
      validateField(fieldName, value);
    });
  });

  // 라디오 버튼과 체크박스 이벤트
  const radioInputs = document.querySelectorAll('input[name="gender"]');
  radioInputs.forEach((input) => {
    input.addEventListener("change", function () {
      validateField("gender");
    });
  });

  const termsCheckbox = document.getElementById("terms");
  termsCheckbox.addEventListener("change", function () {
    validateField("terms");
  });

  // 폼 제출 처리
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 제출 버튼 로딩 상태
    const submitBtn = document.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "처리 중...";
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");

    // 유효성 검사
    setTimeout(() => {
      if (validateForm()) {
        // 성공 시
        form.style.display = "none";
        successMessage.style.display = "block";

        // 폼 데이터 출력 (실제로는 서버로 전송)
        const formData = new FormData(form);
        console.log("폼 데이터:", Object.fromEntries(formData));
      } else {
        // 실패 시
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");

        // 첫 번째 에러 필드로 스크롤
        const firstError = document.querySelector(".error");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
          firstError.focus();
        }
      }
    }, 1000); // 1초 지연 (실제 서버 통신 시뮬레이션)
  });

  // 초기 비밀번호 강도 표시
  const passwordInput = document.getElementById("password");
  passwordInput.addEventListener("input", function () {
    checkPasswordStrength(this.value);
  });
});

// 추가 유틸리티 함수들
function resetForm() {
  form.reset();
  form.style.display = "block";
  successMessage.style.display = "none";

  // 모든 에러 상태 제거
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("error", "success");
  });

  const errorMessages = form.querySelectorAll(".error-message");
  errorMessages.forEach((error) => {
    error.textContent = "";
    error.classList.remove("show");
  });

  // 비밀번호 강도 초기화
  const strengthBar = document.querySelector(".strength-bar");
  const strengthText = document.querySelector(".strength-text");
  strengthBar.className = "strength-bar";
  strengthText.textContent = "비밀번호 강도를 확인하세요";
  strengthText.style.color = "#666";
}

// 성공 메시지에 다시 가입하기 버튼 추가 (선택사항)
function addResetButton() {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "다시 가입하기";
  resetBtn.className = "submit-btn";
  resetBtn.style.marginTop = "20px";
  resetBtn.onclick = resetForm;

  successMessage.appendChild(resetBtn);
}

// 페이지 로드 시 리셋 버튼 추가
document.addEventListener("DOMContentLoaded", function () {
  addResetButton();
});

