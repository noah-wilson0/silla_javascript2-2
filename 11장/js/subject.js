//배열 선언
const member1=["HTML","CSS"];
const member2=["CSS","자바스크립트","리액트"];
const member3=["자바스크립트","타입스크립트"];

//전개 구문을 사용해 배열 3개 복사하기
const subjects=[...member1,...member2,...member3];
// console.log(subjects);
//Set 객체 생성
const resultList=new Set();
//subjects 배열의 요소를 resultList에 하나씩 추가
subjects.forEach(subject=>{
    resultList.add(subject);
});
// console.log(resultList);
//요소 가져오기
const result=document.querySelector("#result");

result.innerHTML=`
<ul>
    ${[...resultList]
    .map(subject=>`<li>${subject}</li>`).join("")}
</ul>
`;
 console.log([...subjects1].map((sub)=>`<li>${sub}</li>`));
// (5) ['<li>HTML</li>', '<li>CSS</li>', '<li>자바스크립트</li>', '<li>리액트</li>', '<li>타입스크립트</li>']
// 0: "<li>HTML</li>"
// 1: "<li>CSS</li>"
// 2: "<li>자바스크립트</li>"
// 3: "<li>리액트</li>"
// 4: "<li>타입스크립트</li>"

