# NodeJS 와 React 프로젝트

## NodeJS 설치

- NodeJS Back-end Server 와 React Front-End 개발을 위한 도구
- Vanila JS 코드를 실행하고 테스트 할 수 있는 도구

## 개발도구 설치

`nodejs.org` 사이트에서 NodeJS LTS 버전 다운로드 후 설치

- windows 에서는 관리자 권한으로 cmd 창 열고 도구 설치

1. `npm -g install npm` : nodeJS Package Manager 프로그램으로 NodeJS 와 React 프로젝트에서 사용하는 여러가지 부수적도구를 설치하는 도구
2. `npm -g install nodemon` : Node Server Demon, 아주 작은 Server 실행도구, NodeJS 프로젝트 소스를 변경 후 저장하면 NodeJS 서버를 자동으로 재실행 해주는 도구

## React 폴더에서 vsCode 열기

- `node --version` : 설치된 nodeJS 버전 확인

## NodeJS 서버 만들기

- React 폴더에 프로젝트폴더(Nood-000-Hello)를 생성하기
- 생성된 폴더에서 터미널 창을 열고 `npm init` 명령 실행,
  package.json 파일이 생성된다. 이 파일에 NodeJS 프로젝트 설정 항목이 들어있다.

```
{
  "name": "000-hello",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node ./server.js"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```

## NodeJS + Express Server 만들기

1. NodeJS 를 이용한 Back-End Project 에서 가장 많이 사용하는 Framework인 Express 를 사용하여 서버 만들기
2. express-generator 를 이용한 express server 만들기 : `npx express-generator [project]`
3. express-21c 를 이용한 ES6 Express Server 만들기 : `npx express-21c [project]`

## React Project 만들기

1. react 폴더에서 새로운 폴더 생성 `mkdir react-000-hello`
2. 프로젝트 시작 : `npm init`
3. package.json 에 다음 설정

```
{
  "name": "react-000-hello",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": "last 1 chrome version"
  },
  "author": "",
  "license": "ISC"
}

```

4. dependency 설정

```bash
npm install react
npm install react-dom
npm install react-scripts

```

5. project 구성
1. `public 폴더 생성`, `index.html` 파일 생성 하고 `div#root` tag 생성

```html
<body>
  <div id="root"></div>
</body>
```

2. `src` 폴더 생성. `App.js` 파일 생성하고

```js
const App = () => {
  return (
    <div>
      <button>클릭하세요.</button>
    </div>
  );
};
export default App;
```

3. `src/index.js` 파일 생성하고

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

"@babel/plugin-proposal-private-property-in-object"

파일 복제시
모듈 삭제후
npm install 실행
