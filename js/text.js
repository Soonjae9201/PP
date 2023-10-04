// 타이핑 효과
(function(){
    const spanEl = document.querySelector('main .text-wrap h2 span')
    const txtArr = ['Web Publish','Kwon Soon Jae','Movie Creator']
    // console.log(txtArr)
    index = 0;
    let currentTxt = txtArr[index].split("");
    // 화면에 표시할 문장 배열에서 요소를 하나 가져온뒤 배열로 만들기 => 단어를 하나하나 추출함

    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        // 배열요소를 앞에서부터 하나씩 출력 shift : 배열 맨앞 요소를 가져와서 원본배열에서 삭제
        // = 대입의 의미 !== 같이 않다는 표현
        // a += 1     ->>>   a = a+1

        if(currentTxt.length !== 0){
            // currentTxt의 길이가 0이 아니라면 == 출력해야할 단어가 남았따
            setTimeout(writeTxt, Math.floor(Math.random()*100))
        }else{
            // currentTxt 길이가 0이다 == 배열안에 있는 모든 텍스트를 전부 출력하였다
            currentTxt = spanEl.textContent.split('');
            // 텍스트를 지우기 위해서 화면에 표시된 텍스트를 가져와 단어단어를 분리
            setTimeout(deleteTxt,3000);
            // 3초후에 텍스트 지우기

        }
    }
    function deleteTxt(){
        currentTxt.pop()
        // 배열에 있는 요소를 끝에서부터 하나씩 삭제
        spanEl.textContent = currentTxt.join("") // 현재 배열에 있는 요소를 하나의 문자열로 합쳐서 삭제한것처럼 보임
        if(currentTxt.length !==0){
            setTimeout(deleteTxt, Math.floor(Math.random()*100))
            // 만약에 값이 남아있으면 deleTxt()함수를 호출하고 호출시간은 0~100 랜덤으로 돌림
        }else{
            //모든배열이 pop에 의해서 삭제되면 실행
            index = (index+1) % txtArr.length;
            // & 남은 모든거(?)
            currentTxt = txtArr[index].split("")
            writeTxt();
        }
    }
    writeTxt()
})();