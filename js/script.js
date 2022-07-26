const bg = document.querySelector('.navbar-toggler');
const kolapse = document.querySelector('.collapse')

bg.addEventListener('click', function() {
    kolapse.classList.toggle('bg-light');
}
);

const penunjuk = document.querySelector('.penunjuk');
const target = document.querySelector('.about-me');

penunjuk.addEventListener('click', function(){
    target.scrollIntoView();
} );