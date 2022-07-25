const bg = document.querySelector('.navbar-toggler');
const kolapse = document.querySelector('.collapse')

bg.addEventListener('click', function() {
    kolapse.classList.toggle('bg-light');
}
);