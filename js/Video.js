const navSlide = ()=> {
    const toggle_bars = document.querySelector('.bars');
    const navigation = document.querySelector('.items');

    toggle_bars.addEventListener('click' , ()=>{
        navigation.classList.toggle('nav_show');
    });
}
navSlide();



AOS.init();
