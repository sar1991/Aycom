const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',  ()=>{
    if(!menuOpen){
        document.querySelector('.header__bottom').classList.add('active')
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        document.querySelector('.header__bottom').classList.remove('active')
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});