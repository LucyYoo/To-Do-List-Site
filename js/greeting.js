const $loginForm = document.querySelector('#login');
const $loginInput = document.querySelector('#login input');
const $greeting = document.querySelector('#greeting');
const $main = document.querySelector('.main');
const $quotes = document.querySelector('#quote');
const $clock =document.querySelector('#clock');

const USERNAME_KEY = 'USERNAME';
const CLASS_HIDDEN = 'hidden';

function onLoginSubmit(e){
    e.preventDefault();
    const userName = $loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    printUser();
}

function printUser(){
    $loginForm.style.display = "none";
    const SaveUser = localStorage.getItem(USERNAME_KEY);
    $greeting.innerHTML = `Hello ${SaveUser}`;
    $greeting.classList.remove(CLASS_HIDDEN);

    if(SaveUser !== null){
        $clock.classList.remove(CLASS_HIDDEN);
        $main.classList.remove(CLASS_HIDDEN);
        $quotes.classList.remove(CLASS_HIDDEN);
    }

}

const savedData = localStorage.getItem(USERNAME_KEY);

if(savedData === null){
    $loginForm.classList.remove(CLASS_HIDDEN);
    $loginForm.addEventListener('submit', onLoginSubmit);
} else{
    printUser(savedData);
}

//자바스크립트가 html 보다 먼저 불러져서 이벤트리스너가 실행안되는 오류 발생.
//자바스크립트를 불러오는 순서를 달리함, 제일 먼저 보여지는 파트이므로 제일 위로 올림.

//login에 display: flex가 우선적용되어 숨겨지지 않는 오류 발생. 
//class 추가 방법으로 해결하고 싶으나 일단 style.display 수정하여 해결

