   const input = document.getElementById("input");
    const listContainer = document.getElementById("list-container");

    function addTask() {
      const task = input.value.trim();
      if (task === "") {
        alert("You must write something!");
        return;
      }

      let li = document.createElement("li");
      li.textContent = task;

      let span = document.createElement("span");
      span.innerHTML = "\u00d7"; // × symbol
      li.appendChild(span);

      listContainer.appendChild(li);
      input.value = "";
      saveData();
    }

    listContainer.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    });

    function saveData() {
      localStorage.setItem("todoList", listContainer.innerHTML);
    }

    function showTasks() {
      listContainer.innerHTML = localStorage.getItem("todoList") || "";
    }

    showTasks(); // Load on page refresh