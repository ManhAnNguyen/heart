const form = document.querySelector("#form");
const input = document.querySelector("#input");
const todoLists = document.querySelector(".todo-lists");
const clearAll = document.querySelector("#clear");

//chạy mỗi khi reload hoặc mới vào trang
window.onload = function () {
  showTodos();
};

//them todo
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  //JSON.parse(localStorage.getItem('keys'))
  const localStore = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const newTodos = {
    name: value,
    isCompleted: false,
    id: localStore.length,
  };

  //thêm todos
  //localStorage.setItem('keys',JSON.stringtify('value'))

  localStorage.setItem("todos", JSON.stringify([...localStore, newTodos]));

  showTodos();
  //clear ô input
  input.value = "";
});

//tạo ra 1 hàm, hàm này có nhiệm vụ render các todos

const showTodos = () => {
  //lấy dữ liệu từ localStorage ra :

  //JSON.parse(localStorage.getItem('keys'))
  const localStore = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  //reset UI sau mỗi lần tạo todo
  todoLists.innerHTML = "";

  localStore.forEach((item) => {
    const divTodo = document.createElement("div");
    divTodo.innerHTML = `
     <p class = 'todo'>${item.name}</p>
     <p class = 'completed'>${
       item.isCompleted ? "Completed" : "Not Completed"
     }</p>
     <p class = 'not-completed' onClick = 'handleCompleted(${
       item.id
     })'>Make Completed</p>
     <p class = 'delete' onClick = 'handleDelete(${item.id})'>Delete</p>
    `;

    divTodo.classList.add("todo-item");

    todoLists.appendChild(divTodo);
  });
};

//xóa todo

const handleDelete = (id) => {
  //lấy dữ liệu từ localStorage ra :
  //JSON.parse(localStorage.getItem('keys'))
  const localStore = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const newLocalStore = localStore.filter((t) => t.id !== id);

  //lưu vào localStorage

  localStorage.setItem("todos", JSON.stringify(newLocalStore));
  showTodos();
};

//make completed

const handleCompleted = (id) => {
  //lấy dữ liệu từ localStorage ra :
  //JSON.parse(localStorage.getItem('keys'))
  const localStore = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const newLocalStore = localStore.map((el) =>
    el.id === id ? { ...el, isCompleted: true } : el
  );

  //lưu vào localStorage

  localStorage.setItem("todos", JSON.stringify(newLocalStore));

  showTodos();
};

//xóa tất cả

clearAll.addEventListener("click", () => {
  localStorage.removeItem("todos");

  showTodos();
});
