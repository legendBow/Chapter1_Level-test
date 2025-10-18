# CSS Grid

## 📋 개요

CSS Grid의 모든 기능을 단계별로 학습할 수 있는 실습 예제 모음입니다. 기본 개념부터 고급 기법까지 체계적으로 구성되어 있습니다.

## 🎯 학습 목표

- CSS Grid의 기본 개념과 구조 이해
- 2차원 격자 레이아웃 설계 능력 향상
- 반응형 디자인 구현 방법 습득
- 고급 Grid 기능 활용 능력 개발

## 📁 파일 구조

```
display-grid/
├── index.html                    # 메인 인덱스 페이지
├── 01-basic-grid.html           # 기본 Grid 구조 예제
├── 02-newspaper-layout.html     # 신문 레이아웃 예제
├── 03-image-gallery.html        # 반응형 이미지 갤러리
├── 04-product-cards.html        # 제품 카드 레이아웃
├── 05-template-areas.html       # Template Areas 예제
├── 06-advanced-techniques.html  # 고급 기법 예제
└── README.md                    # 프로젝트 설명서
```

## 🚀 시작하기

1. **메인 페이지 열기**: `index.html` 파일을 브라우저에서 열어 전체 예제 목록을 확인하세요.

2. **단계별 학습**: 각 예제를 순서대로 따라하며 CSS Grid의 기능을 학습하세요.

3. **실습**: 각 예제의 코드를 수정해보며 다양한 레이아웃을 실험해보세요.

## 📚 예제별 학습 내용

### 1. 기본 Grid 구조 (`01-basic-grid.html`)

- **학습 내용**: Grid Container와 Grid Items 개념
- **주요 기능**:
  - `display: grid`
  - `grid-template-columns`
  - `grid-template-rows`
  - `gap` 속성
  - `fr` 단위 사용법
  - `auto-fit` 활용

### 2. 신문 레이아웃 (`02-newspaper-layout.html`)

- **학습 내용**: Template Areas를 사용한 복잡한 레이아웃
- **주요 기능**:
  - `grid-template-areas`
  - `grid-area` 속성
  - 반응형 레이아웃 변경
  - 미디어 쿼리 활용

### 3. 반응형 이미지 갤러리 (`03-image-gallery.html`)

- **학습 내용**: 반응형 갤러리 구현
- **주요 기능**:
  - `auto-fit` vs `auto-fill` 차이점
  - `minmax()` 함수
  - Masonry 스타일 레이아웃
  - `aspect-ratio` 속성

### 4. 제품 카드 레이아웃 (`04-product-cards.html`)

- **학습 내용**: 다양한 카드 레이아웃 패턴
- **주요 기능**:
  - 비대칭 그리드 (`grid-column: span`)
  - 카드 내부 그리드 구조
  - `grid-template-areas` 활용
  - 호버 효과와 애니메이션

### 5. Template Areas (`05-template-areas.html`)

- **학습 내용**: ASCII 아트 형식 레이아웃 설계
- **주요 기능**:
  - 복잡한 레이아웃 구조
  - 웹사이트, 대시보드, 마케팅 페이지 레이아웃
  - 반응형 Template Areas 변경
  - Named Grid Lines

### 6. 고급 기법 (`06-advanced-techniques.html`)

- **학습 내용**: CSS Grid의 고급 기능들
- **주요 기능**:
  - `minmax()`, `clamp()`, `fit-content()` 함수
  - 정렬 속성 (`justify-items`, `align-items`, `place-items`)
  - 개별 아이템 정렬 (`justify-self`, `align-self`)
  - `auto-flow: dense`
  - 중첩 그리드 (Nested Grid)

## 🎨 주요 CSS Grid 속성 정리

### 컨테이너 속성

```css
.container {
  display: grid; /* Grid 활성화 */
  grid-template-columns: repeat(3, 1fr); /* 열 정의 */
  grid-template-rows: 100px 1fr 100px; /* 행 정의 */
  gap: 20px; /* 간격 설정 */
  grid-template-areas: "header header" "nav main"; /* 영역 정의 */
}
```

### 아이템 속성

```css
.item {
  grid-column: 1 / 3; /* 열 범위 */
  grid-row: 1 / 2; /* 행 범위 */
  grid-area: header; /* 영역 지정 */
  justify-self: center; /* 개별 수평 정렬 */
  align-self: center; /* 개별 수직 정렬 */
}
```

### 정렬 속성

```css
.container {
  justify-items: center; /* 모든 아이템 수평 정렬 */
  align-items: center; /* 모든 아이템 수직 정렬 */
  place-items: center; /* 수평+수직 동시 정렬 */
  justify-content: center; /* 그리드 자체 수평 정렬 */
  align-content: center; /* 그리드 자체 수직 정렬 */
}
```
