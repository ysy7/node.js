const arr = ['apple', 'banana', 'cherry', 'apple'];

// data: 데이터, index: 데이터에 해당하는 index()
arr.forEach((data, index) => {
    // console.log(` ${index} : ${data}`);
});

//return 값이 true에 해당하는 index를 반환.
const cherryIndex = arr.findIndex(data => data === 'cherry');
// console.log(cherryIndex);

// 3번 index부터 'cherry'에 해당하는 index를 찾음, 없으면 -1 리턴 
const a = arr.indexOf('cherry', 3);
console.log(a);

// 배열 끝 부분에 data 추가
arr.push('orange');
console.log(arr);

const x = arr.pop();
// arr.push();
// console.log(arr);