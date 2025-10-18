# CSS Position Tutorial - 프로젝트 구조

```
css-position-tutorial/
│
├── index.html                 # 메인 HTML 파일
│
├── css/
│   ├── reset.css             # CSS 리셋 및 전역 스타일
│   ├── layout.css            # 레이아웃 관련 스타일 (헤더, 컨테이너 등)
│   ├── component.css        # 재사용 가능한 컴포넌트 (버튼, 박스 등)
│   ├── exercise.css         # 실습별 스타일 (position 관련)
│   └── responsive.css        # 반응형 스타일
│
├── js/
│   ├── main.js               # 메인 JavaScript (초기화)
│   ├── exercises.js          # 실습 관련 함수들
│   └── modal.js              # 모달 관련 함수들
│
└── README.md                 # 프로젝트 설명 문서
```

## 📁 파일 설명

### HTML (1개 파일)

- **index.html**: 모든 HTML 구조와 콘텐츠
  - 8가지 실습 섹션 포함
  - CSS와 JS 파일 연결

### CSS (5개 파일로 분리)

1. **reset.css**:

   - 기본 리셋 스타일
   - CSS 변수 정의 (색상, 크기 등)
   - 전역 타이포그래피

2. **layout.css**:

   - 페이지 레이아웃 구조
   - 컨테이너, 헤더, 실습 카드
   - 그리드 시스템

3. **component.css**:

   - 버튼, 카드, 박스 등 재사용 컴포넌트
   - 힌트 박스, 코드 프리뷰
   - 레이어, 사이드바

4. **exercise.css**:

   - Static, Relative, Absolute 등 실습별 스타일
   - Position 속성 관련 모든 스타일
   - 모달 스타일

5. **responsive.css**:
   - 모바일, 태블릿, 데스크탑 미디어 쿼리
   - 반응형 레이아웃 조정

### JavaScript (3개 파일로 분리)

1. **main.js**:

   - 앱 초기화
   - 이벤트 리스너 등록
   - 스크롤 관련 기능

2. **exercises.js**:

   - toggleRelative()
   - toggleAbsolute()
   - toggleFixed()
   - toggleSticky()
   - toggleBadge()
   - toggleZIndex()

3. **modal.js**:
   - openModal()
   - openModalSlide()
   - closeModal()
   - ESC 키 처리
   - 배경 클릭 처리

## 💡 실무 팁

### CSS 파일 로드 순서

```html
<!-- 순서가 중요합니다! -->
<link rel="stylesheet" href="css/reset.css" />
<!-- 1. 리셋 먼저 -->
<link rel="stylesheet" href="css/layout.css" />
<!-- 2. 레이아웃 -->
<link rel="stylesheet" href="css/components.css" />
<!-- 3. 컴포넌트 -->
<link rel="stylesheet" href="css/exercises.css" />
<!-- 4. 페이지별 -->
<link rel="stylesheet" href="css/responsive.css" />
<!-- 5. 반응형 마지막 -->
```

### JavaScript 파일 로드 순서

```html
<!-- 의존성 순서 고려 -->
<script src="js/exercises.js"></script>
<!-- 1. 유틸리티 함수들 -->
<script src="js/modal.js"></script>
<!-- 2. 모달 함수들 -->
<script src="js/main.js"></script>
<!-- 3. 초기화 마지막 -->
```

## 🎯 장점

### 1. **유지보수성**

- 각 파일의 역할이 명확
- 수정 시 해당 파일만 찾으면 됨
- 버그 추적이 쉬움

### 2. **재사용성**

- `components.css`의 버튼, 카드 등을 다른 프로젝트에서도 사용 가능
- CSS 변수로 색상/크기 통일 관리

### 3. **협업 용이성**

- 팀원들이 동시에 다른 파일 작업 가능
- Git 충돌 최소화
- 코드 리뷰가 쉬움

### 4. **성능 최적화**

- 필요한 CSS/JS만 선택적으로 로드 가능
- 캐싱 효율 증가
- 번들러(Webpack, Vite) 사용 시 최적화 용이

### 5. **확장성**

- 새로운 실습 추가 시 `exercise.css`만 수정
- 새로운 컴포넌트는 `component.css`에 추가
- 구조 변경 없이 기능 확장 가능

## 📚 학습 순서 추천

1. **기본 구조 이해**: `index.html` 먼저 읽기
2. **스타일 흐름**: `reset.css` → `layout.css` → `components.css`
3. **기능 구현**: `exercises.js` → `modal.js` → `main.js`
4. **반응형**: `responsive.css` 마지막

## ✅ 체크리스트

프로젝트 완료 시 확인사항:

- [ ] 모든 파일이 올바른 폴더에 위치
- [ ] CSS 파일 로드 순서 확인
- [ ] JS 파일 로드 순서 확인
- [ ] 브라우저 개발자 도구에서 에러 없음
- [ ] 모든 버튼 동작 확인
- [ ] 모달 열기/닫기 동작
- [ ] 반응형 동작 확인 (모바일, 태블릿)
- [ ] 코드에 주석 충분히 작성
