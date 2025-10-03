# CSS 애니메이션

- CSS의 **Animation**, **Transform**, **Transition** 개념과 실습 예제를 정리한 자료
- 개념별 이론과 코드펜(CodePen) 실습 링크 함께 제공

## 📚 목차

1. [CSS Animation](#css-animation)  
   1.1 이론 정리  
   1.2 실습 예제
2. [CSS Transform](#css-transform)  
   2.1 이론 정리  
   2.2 실습 예제
3. [CSS Transitions](#css-transitions)  
   3.1 이론 정리  
   3.2 실습 예제
4. [과제](#css-transitions)  
   3.1 이론 정리  
   3.2 실습 예제

---

## 1. CSS Animation

### 1.1 이론 정리

- CSS `@keyframes` 규칙을 사용해 애니메이션 상태(프레임)를 정의
- `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction` 등 속성으로 제어
- 애니메이션은 시작 상태 → 중간 상태 → 종료 상태를 정의해서 자연스러운 움직임을 표현
- 타이밍 함수를 통해 속도 변화 (가속 / 감속 등) 조절

정리된 이론 노션 문서: [CSS Animation 이론](https://fringe-polyester-65b.notion.site/CSS-Animation-281d90bb9d9880c39b33fb53613050a0?source=copy_link)

### 1.2 실습 예제

CodePen 예제 실습: [CSS Animation 실습 예제](https://codepen.io/JangAyeon/pen/vELyJgW)

## 2. CSS Transform

### 2.1 이론 정리

- `transform` 속성을 통해 요소를 2D / 3D 공간에서 이동, 회전, 확대/축소, 기울이기(shear) 등을 수행
- 대표 함수들:
  - `translate()`, `translateX()`, `translateY()`
  - `rotate()`, `rotateX()`, `rotateY()`, `rotateZ()`
  - `scale()`, `scaleX()`, `scaleY()`
  - `skew()`, `skewX()`, `skewY()`
  - `matrix()` / `matrix3d()` (복합 변형)
- `transform-origin` 속성으로 변형 기준(피벗)을 설정
- 3D 변형을 위해 `perspective`, `transform-style`, `backface-visibility` 등을 조합 가능
- 하드웨어 가속과 렌더링 최적화 고려 필요

정리된 이론 노션 문서: [CSS Transform 이론](https://fringe-polyester-65b.notion.site/CSS-Transform-281d90bb9d9880b58ffafb7a311f2176?source=copy_link)

### 2.2 실습 예제

CodePen 예제 실습: [CSS Transform 실습 예제](https://codepen.io/JangAyeon/pen/zxrowVJ)

## 3. CSS Transitions

### 3.1 이론 정리

- `transition` 속성은 상태 변화 (ex. `:hover` 상태) 간의 변화를 부드럽게 이어주기 위해 사용
- 기본 속성:
  - `transition-property` (변화할 속성)
  - `transition-duration` (지속 시간)
  - `transition-timing-function` (속도 곡선)
  - `transition-delay` (시작 지연)
- 트리거 방식: 상태 변화 (예: `:hover`, `:active`, 클래스 변화 등) 발생 시 자동으로 애니메이션 효과
- 복수 속성의 전환을 동시에 제어 가능

정리된 이론 노션 문서: [CSS Transitions 이론](https://fringe-polyester-65b.notion.site/CSS-Transitions-281d90bb9d9880feb326f2cbb31fd8d1?source=copy_link)

### 3.2 실습 예제

CodePen 예제 실습: [CSS Transitions 실습 예제](https://codepen.io/JangAyeon/pen/dPGOROy)

---

## 4. 과제

### 4.1 CSS Animation

[CSS Animation 실습 과제](https://codepen.io/JangAyeon/pen/PwZbKpa)

### 4.2 CSS Transform

[CSS Transform 실습 과제](https://codepen.io/JangAyeon/pen/myVOwGW)

### 4.3 CSS Transitions

[CSS Transitions 실습 과제](https://codepen.io/JangAyeon/pen/QwyGMWJ)
