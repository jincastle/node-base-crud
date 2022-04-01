# node-base-crud

# express 설치 및 서버 실행

**npm 초기화**

- npm 의존성 관리를 위해 실행
- 밑에 명령어를 실행하면 package.json 생성 됨
  - package.json에 프로젝트에 관련된 [메타데이터](https://www.notion.so/e1c0b0eb87244a1ea1ac362b184e4b72)가 담김
  - package.json에 dependencies에 설치된 모듈이 추가 됨
  - scripts에서 기본 명령어를 설정(`start : node app.js`)

```jsx
npm init
```

**express 설치**

- `—save` 를 안해도 package.json에 저장된다

```jsx
npm install express --save
```

**app.js 파일 생성( or server.js)**

- app.js는 node module을 로딩하고 초기 initialize해야 하는 변수나 Object를 선언하고 Router에 유입이 이루어 지는 그 유입점의 역할
- 즉 쉽게 말하면 module을 선언하고 초기화 하거나 모듈을 변수나 객체로 선언해서 router쪽으로 전달하는 역할이라고 생각하고 있음

```jsx
//모듈에서 express를 가져온다.
const express = require("express");

//app은 express 객체로 의미를 준다
const app = express();

//포트 설정
const PORT = process.env.PORT || 3000;

//웹서버 시작점 app.listen(3000) 이렇게만 적어도 된다.
app.listen(3000, function () {
  console.log("start! express server on port 3000");
});
```

**서버 실행 명령어**

```jsx
node app.js
```

**아니면 package.json 에 start 추가하고 `npm run start`**

```jsx
"scripts": {
    "start": "node app.js",
  },
```

**발생할 수 있는 에러**

- 포트가 사용 중이라 뜨는 에러
- 즉 한 서버에 같은 포트를 사용해 발생한 에러

```jsx
node:events:505
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000

Emitted 'error' event on Server instance at:
```
