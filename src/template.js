const pageLoad = (() => {
    // let body = document.querySelector('body');
    let content = document.querySelector('#content');
    let nav = document.createElement('ul');
    nav.classList.add('nav','nav-tabs','mt-5');
    let pages = ['home','menu','contact'];
    pages.forEach(page => {
        let tab = document.createElement('li');
        tab.classList.add('nav-item');
        let link = document.createElement('a');
        link.classList.add('nav-link');
        link.setAttribute('href','#');
        link.textContent = page;
        tab.appendChild(link);
        nav.appendChild(tab);
    })
    nav.firstChild.firstChild.classList.add('active');
    content.appendChild(nav);

    let tabContent = document.createElement('div');
    tabContent.classList.add('tabContent')
    content.appendChild(tabContent);

    return {
        nav,
        tabContent
    }
})();

const nav = pageLoad.nav;
const tabContent = pageLoad.tabContent;

export{
    pageLoad,
    nav,
    tabContent
}