import { tabContent } from "./template";

const loadHome = (() => {
    let title = document.createElement('h1');
    title.textContent = "Restaurant Chez Chris";
    tabContent.appendChild(title);

    let intro = document.createElement('p');
    intro.textContent = "You're ALWAYS welcome at my place. Come rain or shine, you'll be greeted by a smile and some fantastic plates of classic british cuisine."
    tabContent.appendChild(intro);

    let image =document.createElement('img');
    image.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/4/4b/Aesthetic_cafe.jpg');
    tabContent.appendChild(image);
});

export{loadHome}