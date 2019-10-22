// document.addEventListener("DOMContentLoaded", function(){
//     const elements = document.querySelectorAll('.anim-bg');
//     // console.log(element);
//     document.addEventListener('mousemove', function(e){
//         // console.log(e);
//         const {clientX, clientY} = e;
//         const centerX = window.innerWidth / 2;
//         const centerY = window.innerHeight / 2;

//         elements.forEach(element => {
//             const ratioX = -element.getAttribute('ratioX');
//             const ratioY = -element.getAttribute('ratioY');

//             const moveX = clientX - centerX;
//             const moveY = clientY - centerY;

//             element.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`;
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const animBg = new AnimBg('.anim-bg');
    document.addEventListener('mousemove',(e)=> animBg.listenCursorMove(e));
});