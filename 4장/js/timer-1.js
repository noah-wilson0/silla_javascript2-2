


//함수 선언. - 이 함수를 콜백 함수로 사용.
function greeting(){
    console.log("안녕하세요.");
}


setInterval(greeting, 2000); //콜백 함수 greeting에는 괄호를 사용하지 않습니다.

// 직접 함수를 선언하여 실행

setInterval(()=>{
    console.log("최원진입니다.");


},3000);

