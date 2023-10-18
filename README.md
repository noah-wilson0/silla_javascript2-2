# silla_javascript2-2
#신라대학교 JavaScript 수업 내용

[1.블록 스코프](#1블록-소크프) <br>
[2.함수에서 다른 함수 반환하기](#2함수에서-다른-함수-반환하기) <br>
[3.리스너-on이벤트](#3on-이벤트) <br>

### 1\.블록 소크프
[블록 스코프 소스 코드](https://github.com/noah-wilson0/silla_javascript2-2/blob/main/4%EC%9E%A5/js/scope-4.js)<br>
[코드 오류 이유](https://velog.io/@noah-wilson0/%EB%B8%94%EB%A1%9D-%EC%86%8C%EC%BD%94%ED%94%84) <br>

### 2\.함수에서 다른 함수 반환하기
[링크](https://velog.io/@noah-wilson0/%ED%95%A8%EC%88%98%EC%97%90%EC%84%9C-%EB%8B%A4%EB%A5%B8-%ED%95%A8%EC%88%98-%EB%B0%98%ED%99%98%ED%95%98%EA%B8%B0)
<br>

### 3\.on 이벤트
코드:
[html](https://github.com/noah-wilson0/silla_javascript2-2/blob/main/6%EC%9E%A5/event-1.html)
[js](https://github.com/noah-wilson0/silla_javascript2-2/blob/main/6%EC%9E%A5/js/event.js)
<br>
1. js파일 16번쨰 줄 코드를 보면 `botton2.onclick=ChangeBackground;`로 되어 있다.
ChangeBackground()로 할당하면 페이지가 로드될 때 바로 함수가 실행되고, ChangeBackground로 할당하면 버튼을 클릭했을 때만 함수가 실행되기 떄문이다.
<br>
2.js파일 26~28번째 줄과 html 파일의 아래를 보면 아래와 같다.<br>

```javascript
button3.onclick=function(){
  document.body.style.backgroundColor="orange";
}
```

```html
 <button id="btn3" onclick="alert('두 가지 이벤트 처리')">Click-두 가지 이벤트 처리</button>
```
이 코드를 실행하면 `document.body.style.backgroundColor="orange";`부분만 실행이 되는데 
그 이유는 on이벤트 프로퍼티는 하나만 사용이 가능하기 때문이다. <br>
 =>addEventListener 사용하면 여러 함수 적용 가능하다.<br>

3.이벤트 리스너 적용 해제하는법 <br>
[코드](https://github.com/noah-wilson0/silla_javascript2-2/blob/main/6%EC%9E%A5/js/modal.js) <br>
```javascript
open.addEventListener("click",()=>{
    modalbox.classList.toggle("active");
});
```
위 코드와 같이  토글로 `.active`클래스를 추가하였다. <br>
처음에는 `modalbox.classList.toggle("close");`를 하여 따로 `.close`스타일을 추가로 적용하면<br>
1번 코드가 작동하고 그다음부터는 열고 닫기가 연속성으로 안된다.<br>
`modalbox.classList.remove("active"); `를 사용하여 적용한 `.active`스타일을 remove하여 해제하면 정상 작동한다.<br>

7장remove-2.html내용<br>
이유 화살표 함수에서 this는 window객체를 가리킨다.<br>








