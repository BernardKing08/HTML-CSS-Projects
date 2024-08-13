//creating an array to hold todo items
const todolist = [];

//function when called adds the input value to the array
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    var name = inputElement.value;

    //adding the text from the textbox to the array
    todolist.push(name)
    console.log(todolist);

    inputElement.value = ""
}