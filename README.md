<br/>
<br/>

# 스토리북 ✏

- 리액트와 타입스크립트를 통해 아토믹 디자인 구현
- 스토리북을 통한 시각화 작업

# Jest 🛠
- All-in-one 테스팅 lib

# cypress 🛠
- E2E Test

<br/>

## Development 🛠

- react 실행
```bash
# react port 3000
yarn start
```

- storybook 실행 
``` bash
# storybook port 6006
yarn storybook
```

- jest 실행
``` bash
yarn test:coverage
```

- cypress 실행
``` bash
yarn cypress:open
```

<br/>

## Project 

|폴더명|내용|
|:-|:-|
|api|api 관련 모음|
|assets|리소스 아이템 모음|
|components|페이지에 종속되지 않는 하위 컴포넌트|
|features|페이지 조각들의 모음<br/> 각 도메인(페이지) 단위 모음|
|layout|레이아웃 컴포넌트 위치|
|pages|문서 최상단 구조 페이지 모음|
|routes|라우터 설정 페이지 모음|
|store|recoil에 사용되는 Atom, Selector 모음 <br/>상태 초기값, 공용 값 정리|
|utils|필요한 공통 유틸|


<br/>

## Libraries📦

- storybook 6.3.8
- project
  - React 17.0.2
  - ESLint
  - Prettier 
  - Typescript 4.1.2
  - Emotion
  - craco
  - cypress
  
#### stoybook
- Storybook은 비즈니스 로직과 컨텍스트로부터 UI 컴포넌트를 독립적으로 분리하여 만들수 있도록 도와줌 <br/>
https://storybook.js.org/

#### recoil
- Recoil는 React를 위한 상태 관리 라이브러리 <br/>
https://recoiljs.org/ko/docs/introduction/getting-started/

#### emotion/Styled
- CSS-in-JS의 종류 중 하나로 JavaScript 안에서 스타일을 작성할 수 있게 만든 라이브러리 <br/>
- 필요한 스타일은 해당 컴포넌트에 styled-component를 사용하여 생성<br/>
https://emotion.sh/docs/styled

#### craco
- Craco(Create React App Configuration Override)는 create-react-app(CRA)을 쉽게 설정 하기 위한 라이브러리 <br/>
- CRA로 만든 프로젝트는 eject을 통해 숨겨진 webpack 설정을 바꾸어야 하지만 craco를 사용하여 편리하게 수정 <br/>
https://www.npmjs.com/package/@craco/craco
https://github.com/risenforces/craco-alias#readme

#### cypress
- 차세대 프론트엔드 테스트도구 <br/>
- e2e테스트, 통합 테스트, 단위 테스트를 진행할 수 있습니다.
https://www.cypress.io/

##### jest
- All-in-one 테스트도구 <br/>
- 단위 테스트 진행

https://jestjs.io/

<br/>
<br/>
<br/>
<br/>
<br/>
