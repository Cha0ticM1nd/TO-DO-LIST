{
  const tasks = [];
  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="tasks__item">
          <button class="tasks__button tasks__button--toggleDone js-done">
            ${task.done ? "✔" : ""}
          </button>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
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

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}