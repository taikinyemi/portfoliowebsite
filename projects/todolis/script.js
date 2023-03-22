const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	todoList.appendChild(newTodo);
	todoInput.value = "";

	newTodo.addEventListener("click", () => {
		newTodo.classList.toggle("completed");
	});
});