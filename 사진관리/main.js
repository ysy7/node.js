const fs = require('fs');
const path = require('path');

// dirPath에 있는 모든 파일목록의 배열(하위 경로까지)
function getAllFiles(dirPath, arrOfFiles) {
  // dirPath에 있는 모든 파일 목록의 배열(하위 경로는 불가)
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const destPath = path.join(dirPath,file);

    if(fs.statSync(destPath).isDirectory()) {
      // 디렉토리라면 해당 폴더에 있는 모든 파일목록들을 체크
      getAllFiles(destPath, arrOfFiles);
    } else {
      // 파일이면 파일 목록에 추가
      arrOfFiles.push(destPath);
    }
  });

  return arrOfFiles;
}

function getDuplicated(baseDir){

  //해당 디렉토리가 존재하는지 유효성 검사
  if(!fs.existsSync(baseDir)) {
    console.log('폴더가 존재하지 않음');
    return;
  }
  const duplicatedDir = path.join(baseDir, 'duplicated');
  if(!fs.existsSync(duplicatedDir))
      fs.mkdirSync(duplicatedDir);

  const arrayOfFiles = getAllFiles(baseDir, []);

  const duplicatedFiles = [];

  arrayOfFiles.forEach(function(file, idx) {
    const fileName = path.basename(file);

  const duplicatedIdx = arrayOfFiles.findIndex(function(otherFile, otherIdx) {
    if(otherIdx > idx && otherFile.includes(fileName))
      return true;
    else 
      return false;
  })

  if(duplicatedIdx > -1){
    const duplicatedFile = arrayOfFiles[duplicatedIdx];
    duplicatedFiles.push(file);
    duplicatedFiles.push(duplicatedFile);
  }

});
return duplicatedFiles
}
const files = getDuplicated(path.join(dirname, 'base'));
console.log(files.join('\n'));

// const files = getAllFiles(dirname + '\base', []);
// console.log(files)


