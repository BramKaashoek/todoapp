function updateCounters() {
  // Total number of todos
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;

  // Total number of completed todos
  var completedCount = document.getElementById('completed-count');
  var completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  // Total number of uncompleted todos
  var todoCount = document.getElementById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;
}

function toggleDone() {
  var checkbox = this;

  if (checkbox.checked) {
    checkbox.parentElement.className = "todo completed"
  } else {
    checkbox.parentElement.className = "todo"
  }
  updateCounters();
}

function submitTodo() {
  var inputField = document.getElementById("new-todo");
  var newTodoTitle = inputField.value;

  createTodo(newTodoTitle);

  inputField.value = null;
  updateCounters();
}

function createTodo(title) {
  // li with class todo
  var listItem = document.createElement("li");
  listItem.className = "todo";

  // input with sequential ID number, type=checkbox (unchecked), the onChange
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "todo-" + nextTodoId();
  checkbox.onchange = toggleDone.bind(checkbox);
  listItem.appendChild(checkbox);

  // make some space
  var space = document.createTextNode(" ")
  listItem.appendChild(space)

  // label with the title of the todo
  var label = document.createElement("label");
  label.innerHTML = title;
  label.htmlFor = checkbox.id;
  listItem.appendChild(label);

  //add list item to list
  var list = document.getElementById("todolist");
  list.appendChild(listItem);
}

function nextTodoId(){
  return document.getElementsByClassName("todo").length + 1;
}

function cleanUpTodos(){
  var list = document.getElementById("todolist");
  var doneTodos = document.getElementsByClassName("completed");

  for (var i = doneTodos.length; i > 0; i--) {
    list.removeChild(doneTodos[i-1]);
  }
  updateCounters();
}

updateCounters();
