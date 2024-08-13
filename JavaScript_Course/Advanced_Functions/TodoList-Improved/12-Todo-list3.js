//creating an array to hold todo items
const todoList = [{name: 'make dinner',
                dueDate: '2022-12-22'},
                {name : 'wash coths',
                dueDate: '2022-12-11'}];

renderTodoList();

function renderTodoList(){
        
    let todolistHTML = ''

    todoList.forEach(function(todoObject, index){
        const { name, dueDate } = todoObject;

        const html =  `
            <div>${name}</div>
            <div>${dueDate} </div>
                <button onclick="
                    todoList.splice(${index}, 1);
                    renderTodoList();" class="delete-todo-button">
                    Delete
                </button>
            `;
        todolistHTML += html;
    })


    document.querySelector('.js-todo-list').innerHTML = todolistHTML
}

//function when called adds the input value to the array
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    var name = inputElement.value;

    const dateInputElement = document.querySelector('.js-dueDate-input');
    var dueDate = dateInputElement.value;

    //adding the text from the textbox to the array
    todoList.push(
        {
        //name: name,
        //dueDate: dueDate
        //using shorthand property syntax
        name, 
        dueDate
        }
    )


    inputElement.value = ""

    renderTodoList()
}
