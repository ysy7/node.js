const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// index.ejs에 넘겨줄 data

const index = {
  name: 'KMY',
  here: '한국'
};

const server = http.createServer(function(req, res){
  console.log(req.url);

  res.setHeader('Content-type', 'text/html');
  if(req.url == '/'){
    // 스트리밍 방식으로 index의 html 코드들을 전송 (대용량 처리에 유리)
    // 파일입출력 : 파일을 한꺼번에 처리함
    // 스트림 : 파일을 부분적으로 쪼개서 실시간으로 처리함
    // renderfile(ejs대상경로, ejs에 넘겨줄 데이터, 이후에 실행할 callback)
    ejs.renderFile(path.join(__dirname, 'template', 'index.ejs')
    , {name: index.name, here: index.here}
    // 데이터를 넘겨받은 ejs코드(data)를 클라이언트에게 보낸다.
    , function(err, data){
      res.end(data);
    });
  } else if(req.url === '/food'){
    fs.createReadStream(path.join(__dirname, 'html', 'food.html')).pipe(res);
  } else{
    fs.createReadStream(path.join(__dirname, 'html', '404.html')).pipe(res);
  }

});

server.listen(3333);