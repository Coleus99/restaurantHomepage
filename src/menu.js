import { tabContent } from "./template";

const loadMenu = (() => {
    let title = document.createElement('h1');
    title.textContent = "Menu Chez Chris";
    tabContent.appendChild(title);

    let intro = document.createElement('p');
    intro.textContent = "We serve breakfast, lunch and dinner."
    tabContent.appendChild(intro);

    let menu = document.createElement('div');
    menu.innerHTML=`
    <h2>Breakfast</h2>
    <ul>
        <li>Eggs</li>
        <li>Pancakes</li>
    </ul>
    <h2>Lunch</h2>
    <ul>
        <li>Soup</li>
        <li>Salad</li>
    </ul>
    <h2>Dinner</h2>
    <ul>
        <li>Pizza</li>
        <li>Pasta</li>
    </ul>
    `;
    tabContent.appendChild(menu);
});

export{loadMenu}