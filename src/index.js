import addTodo from "./todo";
import './styles/main.css';

//  add listeners for todo input
let add = document.getElementById('add');
add.addEventListener('click', () => {addTodo()});
todo.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        addTodo()
    }
})






