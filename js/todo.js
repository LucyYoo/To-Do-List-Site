const $todoForm = document.querySelector('#todoForm');
const $todoInput = document.querySelector('#todoForm input');
const $todoList = document.querySelector('#todoList');
const $resetBtn = document.querySelector('#resetBtn');

const TODOS_KEY = "todos";

let toDos = [];

function savedToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    savedToDos();
}

function paintToDo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerHTML = newTodo.text;
    const button = document.createElement('button');
    button.innerHTML = '✔';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    $todoList.appendChild(li);
}


function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = $todoInput.value;
    $todoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savedToDos();
}

const saveToDos = localStorage.getItem(TODOS_KEY);

$todoForm.addEventListener('submit', handleToDoSubmit);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function resetToDo(){
    localStorage.removeItem(TODOS_KEY);
    toDos = [];
    location.reload();
}

$resetBtn.addEventListener("click", resetToDo);