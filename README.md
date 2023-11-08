## 배포

-   [FIREBASE] (https://react-project-imdoob.web.app) 로 배포하였습니다.

## 배운점

-   react hook의 개념을 배울 수 있었음.

1. 기존의 클래스 컴포넌트에서만 가능했던 여러가지 기능 (state와 생명주기(lifecycle))을 함수 컴포넌트에서 작동할 수 있게하는 기능.
2. hook에는 두 종류가 있음 기본 hook과 추가 hook으로 나뉘는데 이번 프로젝트에서는 useEffect, useState, useRef를 사용했고 공부할 수 있었음.

-   useState:
    초기 상태 값을 인자로 받고, 현재 상태와, 상태가 갱신되는지의 여부를 체크하는 값을 배열로 반환한다.
    useState를 통해 상태의 갱신 여부에 따라, 값을 변경해주는 기능을 활용할 수 있다.

-   gsap의 가로 스크롤 모드를 적용하는데 있어서 useEffect와 useRef를 사용해야 했다.
-   가로 스크롤 모드를 적용하려면 우선적으로 전체 넓이 값과, 가로 스크롤을 적용하고자 하는 요소들의 넓이 값을 알아야 하기 때문에 useRef를 통해 값을 참조하였다.
-   useEffect로는 gsap 실행문에 useRef를 통해 참조한 값을 적용하여 동작을 구현하고 실행문이 끝나면, 값을 초기화 해주는 기능을 구현했다.

<!--
- 기본 hook
-- 1. useState: 로컬 state를 함수 컴포넌트에서 사용할 수 있게 해주는 훅.
-- 2. useState: 로컬 state를 함수 컴포넌트에서 사용할 수 있게 해주는 훅입니다.
-- 3. useEffect: 생명주기 메소드를 함수 컴포넌트에서 사용할 수 있게 해주는 훅입니다.
-- 4. useContext: 리액트의 Context API를 함수 컴포넌트에서 사용할 수 있게 해주는 훅입니다.

- 추가 hook
-- 1. useReducer: 복잡한 state 로직을 관리할 수 있게 해주는 훅입니다.
-- 2. useCallback: 메모이제이션된 콜백을 반환해주는 훅입니다.
-- 3. useMemo: 메모이제이션된 값을 반환해주는 훅입니다.
-- 4. useRef: ref를 생성해주는 훅입니다.
-- 5. useImperativeHandle: 사용자 정의 인스턴스 값을 생성해주는 훅입니다.
-- 6. useLayoutEffect: DOM 변경 후 동기적으로 발생하는 훅입니다.
-- 7. useDebugValue: 개발자 도구에서 훅의 값을 표시하는데 사용하는 훅입니다. -->

## npx create-react-app

## npm i

## npm start

## git upload

-   `git config --global core.autocrlf true // 시스템 전체에 적용`
-   `git config core.autocrlf true // 해당 프로젝트에만 적용`

# 리액트를 활용한 포트폴리오 사이트 만들기

1. 리액트 설치
2. gsap 설치 'npm i gsap'
3. sass 설치 'npm i sass'
4. lenis 설치 'npm i @studio-freight/lenis'  
   [lenis 사이트] (https://github.com/studio-freight/lenis)
5. react-router-dom 설치

## GSAP

GreenSock Animation Platform은 웹 애니메이션을 만들기 위한 강력한 javascript 라이브러리입니다. html, svg, 캔버스 등 다양한 웹 요소를 애니메이션화하는데 사용합니다.
직관적인 API를 제공하여 다양한 애니메이션 효과를 만들기 용이합니다.

## LENIS

빠른 스크롤을 지원하는 오픈소스입니다. 메인쓰레드에서 스크롤을 실행하고, 접근성이 좋습니다. 다른 애니메이션 라이브러리들과도 잘 연동됩니다.
