// create function for adding todo

export function addTodo(e) {
  e.preventDefault();
  
  console.log('add todo')
  // get the value of the input
  const todo = document.getElementById('todo').value;
  const priority = document.getElementById('priority').value;
  const dueDate = document.getElementById('due-date').value;
  // check if the input is empty
  if (todo === '') {
    alert('Please enter a todo');
    return;
  }
  // retrieve list from local storage or create new empty list
  let list = JSON.parse(localStorage.getItem('todoList')) || [];

  // create a new todo object
  const newTodo = {
    todo: todo,
    priority: priority,
    dueDate: dueDate
  };

  console.log(newTodo)
  console.log(list)

  // add the new todo object to the list
  list.push(newTodo);

  // update local storage with the updated list
  localStorage.setItem('todoList', JSON.stringify(list));

  // clear the input
  document.getElementById('todo').value = '';
  document.getElementById('priority').value = 'low';
  document.getElementById('due-date').value = '';
}
  
export function displayTodos() {
  // retrieve list from local storage or create new empty list
  let list = JSON.parse(localStorage.getItem('todoList')) || [];

  // clear the ul
  document.getElementById('todos').innerHTML = '';

  // map the list items to the page
  list.forEach(item => {
    // create a new li element
    const li = document.createElement('li');
    li.classList.add('text-blue-800', 'border', 'border-blue-400', 'rounded');
    // create a text node and append it to the li
    li.appendChild(document.createTextNode(item.todo));
    li.appendChild(document.createTextNode(item.priority));
    li.appendChild(document.createTextNode(item.dueDate));
    // append the li to the ul
    document.getElementById('todos').appendChild(li);
  });
}