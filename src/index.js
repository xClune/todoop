import addTodo from './todo';
import './styles/main.css';

//  add listeners for todo input
let add = document.getElementById('add');
let todoInput = document.getElementById('todo');

add.addEventListener('click', (e) => {addTodo(e)});

todoInput.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        addTodo(e)
    }
})







