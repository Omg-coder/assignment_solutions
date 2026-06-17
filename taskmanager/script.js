let input = document.querySelector(".input-field");
let submit = document.querySelector(".submit");
let todoList = document.querySelector(".task-list");

submit.addEventListener("click", () => {
  if(input.value.trim() === "" )return
 
todoList.innerHTML += `<div class="task">
  <h3 class="taskText">${input.value}</h3>
  <div>

  <button class="complete">Complete</button>
  <button class="del">Delete</button>
  <button class="edit">Edit</button>

  </div>
  </div>
  `;

  input.value = ""


})

let del = document.querySelector(".del")
let edit = document.querySelector(".edit")
let tasklist = document.querySelector(".taskText")

//delete operation

todoList.addEventListener("click" , (e) => {
  if(e.target.classList.contains("del")){
    e.target.closest('.task').remove()    
  }
})


//read operation 

todoList.addEventListener("click" , (e) => {
 if(e.target.classList.contains('edit')){
  let task = e.target.closest('.task').querySelector('.taskText')
  let newTask = prompt('Edit task : ', task.innerText)
  if(newTask && newTask.trim() !== ""){
    task.innerText = newTask 
  }
 }
})

/// completed

todoList.addEventListener("click" , (e) => {
  if(e.target.classList.contains("complete")){
    let task = e.target.closest(".task").querySelector('.taskText')
    task.classList.toggle("completed")
  }
})





























// let del = document.querySelector(".del");
// let edit = document.querySelector(".edit");
// let taskText = document.querySelector(".task-text");


// // delete 
// todoList.addEventListener("click" ,(e) => {
//     // e.target.querySelector('taskText').remove()
//   if(e.target.classList.contains("del")){
//     e.target.closest('.task').remove();
//   }
// })

// todoList.addEventListener("click" ,(e) => {
//   if(e.target.classList.contains("edit")){
//     const task = e.target.closest(".task").querySelector('.taskText')
//     const newTask = prompt("Edit task : ", task.innerText)
//     if(newTask && newTask.trim() !== ""){
//       task.innerText = newTask;
//     }
//   }
// })


