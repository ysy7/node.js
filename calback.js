function somefunc(callback){
  console.log("somefunc 실행");
  callback();
}
  
  
  
  function cb(){
  console.log("콜백함수 실행");
}



somefunc(function (){
  console.log("콜백함수 실행");
});