//creating an array to hold todo items
const todolist = ['make dinner', 'wash coths'];

renderTodoList();

function renderTodoList(){
        
    let todolistHTML = ''

    for(let i = 0; i < todolist.length; i++){
        const todo = todolist[i]
        const html =  `<p>${todo}</p>`
        todolistHTML += html;
    }

    console.log(todolistHTML)

    document.querySelector('.js-todo-list').innerHTML = todolistHTML
}

//function when called adds the input value to the array
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    var name = inputElement.value;

    //adding the text from the textbox to the array
    todolist.push(name)
    console.log(todolist);

    inputElement.value = ""

    renderTodoList()
}
