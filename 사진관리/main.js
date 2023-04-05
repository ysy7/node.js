const fs = require('fs');
const path = require('path');

// dirPath에 있는 모든 파일목록의 배열(하위경로까지)
function getAllFiles(dirPath, arrOfFiles) {
  // dirPath에 있는 모든 파일목록의 배열(하위경로는 불가)
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const destPath = dirPath + "\\" + file;

    if(fs.statSync(destPath).isDirectory()) {
      console.log(destPath + "는 디렉토리(폴더)입니다");
    } else {
      console.log(destPath + "는 파일입니다");
    }
  });
}

const files = getAllFiles(__dirname + "\\base", []);