function removeTodo(event) {
    event.target.parentNode.remove();
}

function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("li");
    item.innerText = document.querySelector("#item").value;
    
    let button = document.createElement("button");
    button.innerText = "click me"
    button.addEventListener("click", removeTodo);
    item.append(button);


    const list = document.querySelector("ul");
    list.appendChild(item);
  }
  document.querySelector("form").addEventListener("submit", addTodo);
