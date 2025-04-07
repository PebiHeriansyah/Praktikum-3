let currentEditText = null;
let currentEditDate = null;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");

  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === '') return;

  const li = document.createElement("li");

  const topDiv = document.createElement("div");
  topDiv.className = "task-top";

  const spanText = document.createElement("span");
  spanText.textContent = taskText;
  spanText.className = "task-text";

  const spanDate = document.createElement("span");
  spanDate.className = "task-date";
  spanDate.textContent = taskDate ? `📅 ${taskDate}` : '📅 Tidak ada tanggal';

  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnEdit.className = "edit-btn";
  btnEdit.onclick = () => {
    document.getElementById("editTaskName").value = spanText.textContent;
    const currentDate = spanDate.textContent.replace("📅 ", "").trim();
    document.getElementById("editTaskDate").value = currentDate === "Tidak ada tanggal" ? "" : currentDate;

    currentEditText = spanText;
    currentEditDate = spanDate;

    document.getElementById("editModal").style.display = "flex";
  };

  const btnComplete = document.createElement("button");
  btnComplete.textContent = "✅ Selesai";
  btnComplete.className = "complete-btn";
  btnComplete.onclick = () => {
    const isCompleted = spanText.classList.toggle("completed");
    btnComplete.textContent = isCompleted ? "↩️ Batal" : "✅ Selesai";
  };

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Hapus";
  btnDelete.className = "delete-btn";
  btnDelete.onclick = () => {
    li.remove();
  };

  const buttonGroup = document.createElement("div");
  buttonGroup.appendChild(btnEdit);
  buttonGroup.appendChild(btnComplete);
  buttonGroup.appendChild(btnDelete);

  topDiv.appendChild(spanText);
  topDiv.appendChild(buttonGroup);

  li.appendChild(topDiv);
  li.appendChild(spanDate);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = '';
  dateInput.value = '';
}

function saveEdit() {
  const newText = document.getElementById("editTaskName").value.trim();
  const newDate = document.getElementById("editTaskDate").value;

  if (newText !== "") {
    currentEditText.textContent = newText;
    currentEditDate.textContent = newDate ? `📅 ${newDate}` : '📅 Tidak ada tanggal';
  }

  closeModal();
}

function closeModal() {
  document.getElementById("editModal").style.display = "none";
  currentEditText = null;
  currentEditDate = null;
}