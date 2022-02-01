const contents = document.querySelectorAll('.content');

contents.forEach(content => addEventListener('scroll', function () {
    let bottom = (content.getBoundingClientRect().bottom) * 4 / 5;
    let innerHeight = window.innerHeight * 4 / 5;
    if(bottom < innerHeight){
        content.classList.add('active');
    } else if(bottom > innerHeight){
        content.classList.remove('active');
    }
}));


