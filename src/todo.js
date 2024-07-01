// create function for adding todo

function addTodo(e) {
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
  // create a new li element
  const li = document.createElement('li');

  li.classList.add('text-red-200');
  // create a text node and append it to the li
  li.appendChild(document.createTextNode(todo));
  li.appendChild(document.createTextNode(priority));
  li.appendChild(document.createTextNode(dueDate));
  // append the li to the ul
  document.getElementById('todos').appendChild(li);
  // clear the input
  document.getElementById('todo').value = '';
}

export default addTodo;