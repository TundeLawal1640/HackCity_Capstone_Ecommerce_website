const bar = document.querySelector('#bar')
const nav = document.querySelector('#nav-bar')

// if(bar){
//     bar.addEventListener('click', ()=>{
//         nav.forEach(pickNav => pickNav.classList.add('visible'))
//     })
// }


bar.addEventListener('click', ()=>{
    nav.classList.add('active')
});