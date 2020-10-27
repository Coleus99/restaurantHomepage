import {pageLoad,nav,tabContent} from './template';
import {loadHome} from './home';
import {loadMenu} from './menu';
import {loadContact} from './contact'

loadHome();

let navLinks = document.querySelectorAll('.nav-link');

nav.addEventListener('click', (event)=>{
    tabContent.innerHTML='';
    if(event.target.innerText === 'home'){
        loadHome();
    }
    else if(event.target.innerText === 'menu'){
        loadMenu();
    }
    else if(event.target.innerText === 'contact'){
        loadContact();
    }
    navLinks.forEach(link => {
        if(link.classList.contains('active')){
            link.classList.remove('active')
        }
    })
    console.log(event.target);
    event.target.classList.add('active');
});