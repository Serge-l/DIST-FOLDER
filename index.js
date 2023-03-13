import { Post } from "./Post"
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'


const post = new Post('Webpack Post Title')

console.log('Post to String:', post.toString())

//variables
const heroBlock = document.querySelector('.hero-block__hero')
const navBar = document.querySelector('.hero-block__navbar')

let x = window.matchMedia("(min-width:992px)")
// function sideMenu (x) {
//     if (x.matches) {
//         navBar.classList.add('navbar--on')
//         heroBlock.classList.add('hero--on')
//     }
// }
// sideMenu(x);

function heroOn () {
    heroBlock.classList.add('hero--on')

}

heroOn()
//==============BURGER MENU===============//

const wrapper = document.querySelector('.wrapper');
const menuBtn = document.querySelector('.menu-btn');


wrapper.addEventListener('click',(e) => {
       
    if(e.target.classList.contains('menu-btn')) {
        menuBtn.classList.toggle('active');
        navBar.classList.toggle('navbar--on')
    } else {
        navBar.classList.remove('nav-bar--on')
    }
})

