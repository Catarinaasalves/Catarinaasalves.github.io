//Modals
function showModal(classToAdd){
    var modal = document.getElementById('modal');
    modal.classList.add(classToAdd);
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 1);
    document.querySelectorAll('video').forEach(video => {
        video.load()
    });
}
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = 'none';
            modal.className = '';
        }, 500);
    }
}

//Scroll Arrow
window.onscroll = function() {scrollArrow()};

function scrollArrow() {
    var scrollArrow = document.getElementById('scroll-arrow')
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        scrollArrow.style.transform = 'none';
    } else {
        scrollArrow.style.transform = 'translateY(100%)';
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Back Arrow
function backArrowEnter(){
    document.querySelector('.back-arrow path').setAttribute('d', 'M32.8284 1.17157C31.2663 -0.390518 28.7337 -0.390518 27.1716 1.17157L1.71572 26.6274C0.153625 28.1895 0.153625 30.7222 1.71572 32.2843C3.27782 33.8464 5.81048 33.8464 7.37258 32.2843L30 9.65686L52.6274 32.2843C54.1895 33.8464 56.7222 33.8464 58.2843 32.2843C59.8464 30.7222 59.8464 28.1895 58.2843 26.6274L32.8284 1.17157ZM34 114L34 4L26 4L26 114L34 114Z')
}
function backArrowLeave(){
    document.querySelector('.back-arrow path').setAttribute('d', 'M32.8284 1.17157C31.2663 -0.390518 28.7337 -0.390518 27.1716 1.17157L1.71572 26.6274C0.153625 28.1895 0.153625 30.7222 1.71572 32.2843C3.27782 33.8464 5.81048 33.8464 7.37258 32.2843L30 9.65686L52.6274 32.2843C54.1895 33.8464 56.7222 33.8464 58.2843 32.2843C59.8464 30.7222 59.8464 28.1895 58.2843 26.6274L32.8284 1.17157ZM34 99L34 4L26 4L26 99L34 99Z')
}