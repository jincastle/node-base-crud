//모듈에서 express를 가져온다.
const express = require("express");

//app은 express 객체로 의미를 준다
const app = express();

//포트 설정

//웹서버 시작점 app.listen(3000) 이렇게만 적어도 된다.
app.listen(3000, function () {
  console.log("start! express server on port 3000");
});
