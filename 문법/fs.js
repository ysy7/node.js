const fs = require('fs');

// __dirname : 현재 디렉토리의 절대경로(Node의 전역변수)
console.log(__dirname);

// 해당 경로에 있는 파일 목록의 배열을 반환
const files = fs.readdirSync(__dirname);

// 특정파일의 전체(절대)경로
result = __dirname + '\\' +  files[1]
console.log(result);

// 해당 파일에 대한 정보를 알 수 있음
console.log(fs.statSync(result));