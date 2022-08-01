const $slide = document.querySelectorAll('.slide');
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const $dots = document.querySelector('.dots');
const $dot = document.querySelectorAll('.dot');

let slideIndex = 0;

window.onload = function(){
    showImg(slideIndex);

    let sec = 7000;

    setInterval(function(){
        slideIndex++;
        showImg(slideIndex);
    }, sec);
}

function moveSlides(n){
    slideIndex = slideIndex + n;
    showImg(slideIndex);
}

$prev.addEventListener('click', () => moveSlides(-1));
$next.addEventListener('click', () => moveSlides(1));

function dotMove(e){
    const val = e.target.dataset.val;
    if(val !== undefined){
        slideIndex = +val;
        showImg(slideIndex);
    }
}

$dots.addEventListener('click', dotMove);

function showImg(n){
    let size = $slide.length;
    if( (n+1) > size){
        slideIndex =0;
        n=0;
    } else if( n< 0){
        slideIndex = (size-1);
        n = (size-1);
    }

    for(let i=0; i<size; i++){
        $slide[i].style.display = 'none';
    }

    for(let i=0; i<$dot.length; i++){
        $dot[i].className = $dot[i].className.replace('active', '');
    }

    $slide[n].style.display = "block";;

    $dot[n].classList.toggle('active');
}