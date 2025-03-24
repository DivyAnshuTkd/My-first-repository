const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
},
{
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];     //using object because we have to add date as well

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

todoList.forEach((todoObject, index) =>  //first parameter contain each value in the array and second parameter contains index of each values
{
    //const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { dueDate } = todoObject; //shortcut of above dueDate line
    const { name } = todoObject; //shortcut of above name line
    // we can also write this single line instead of above 2 lines const{ name , dueDate} = todoObject;
    const html = `
   <div>${name}</div>
   <div>${dueDate}</div>  
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;  //Generating the HTML
    todoListHTML = todoListHTML + html;
});

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton, index) =>{
    deleteButton.addEventListener('click', ()=>{
        console.log(index);
        todoList.splice(index, 1);
    renderTodoList();
    });
});


    }


document.querySelector('.js-add-todo-button')
.addEventListener('click', () =>{
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });

    inputElement.value = '';
    renderTodoList();
}