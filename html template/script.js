var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function() 
{
    MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function() 
{
    MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function() 
{
    MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function() 
{
    MainImg.src = smallimg[3].src;
};

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};



