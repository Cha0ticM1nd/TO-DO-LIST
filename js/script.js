{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="tasks__item">
          <button class="tasks__button tasks__button--toggleDone js-done">
            ${task.done ? "✔" : ""}
          </button>
          <span class="tasks__content${task.done ? " tasks__content--done" : ""}">${task.content}</span>
          <button class="tasks__button tasks__button--remove button js-remove">🗑️</button>
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskItem = document.querySelector(".js-newTask");
    const newTaskContent = newTaskItem.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskItem.value = "";
    }

    newTaskItem.focus();
  };

  removeButtons.forEach((removeButton, index) => {
    removeButton.addEventListener("click", () => {
      removeTask(index);
    });
  })

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}