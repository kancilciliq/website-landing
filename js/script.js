// Toggle class active
const navbarNav = document.querySelector('.navbar-nav')

document.querySelector('#humberger').onclick = () => {
    navbarNav.classList.toggle('active')
}

//menghilangkan navbar ktk diclick di luar
const humberger = document.querySelector('#humberger')

document.addEventListener('click', function(e){
    if(!humberger.contains(e.target) && (!navbarNav.contains(e.target))) {
        navbarNav.classList.remove('active')
    }
})