const navSlide = ()=> {
    const toggle_bars = document.querySelector('.bars');
    const navigation = document.querySelector('.items');

    toggle_bars.addEventListener('click' , ()=>{
        navigation.classList.toggle('nav_show');
    });
}
navSlide();


$(document).ready(function(){
    setTimeout(function(){
        $('#popUpMain').css('display' , 'block');
    }, 3000);
});

$('.close_pop').click(function(){
    $('#popUpMain').css('display' , 'none');
});

AOS.init();




