import { tabContent } from "./template";

const loadContact = (() => {
    let title = document.createElement('h1');
    title.textContent = "Contact Chez Chris";
    tabContent.appendChild(title);

    let intro = document.createElement('p');
    intro.textContent = "We'd love to hear from you! Complete the form below."
    tabContent.appendChild(intro);

    let form = document.createElement('div');
    form.innerHTML=`
    <form>
    <div class="form-group">
        <label for="formGroupExampleInput">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput">Message</label>
        <input type="text" class="form-control" id="name" placeholder="How can we help you?">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    `;
    tabContent.appendChild(form);
});

export{loadContact}