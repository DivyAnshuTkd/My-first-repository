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

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { dueDate } = todoObject; //shortcut of above dueDate line
        const { name } = todoObject; //shortcut of above name line
        // we can also write this single line instead of above 2 lines const{ name , dueDate} = todoObject;
        const html = `
       <div>${name}</div>
       <div>${dueDate}</div>  
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;  //Generating the HTML
        todoListHTML = todoListHTML + html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}


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