// admin.js

function addNewProject() {
    var projectName = document.getElementById("projectName").value;
    var imageUrl = document.getElementById("imageUrl").value;
    var projectLink = document.getElementById("projectLink").value;
    var projectTags = document.getElementById("projectTags").value;
  
    var table = document.getElementById("projectsTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
  
    var cellIndex = 0;
    var cell1 = newRow.insertCell(cellIndex++);
    var cell2 = newRow.insertCell(cellIndex++);
    var cell3 = newRow.insertCell(cellIndex++);
    var cell4 = newRow.insertCell(cellIndex++);
    var cell5 = newRow.insertCell(cellIndex++);
    var cell6 = newRow.insertCell(cellIndex++);
  
    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = projectName;
    cell3.innerHTML = imageUrl;
    cell4.innerHTML = projectLink;
    cell5.innerHTML = projectTags;
    cell6.innerHTML =
      '<button type="button" class="btn btn-danger" onclick="deleteProject(this)">Delete</button>' +
      '<button type="button" class="btn btn-success" onclick="updateProject(this)">Update</button>';
  
    clearInputFields();
  }
  
  function deleteProject(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  function updateProject(button) {
    var row = button.parentNode.parentNode;
    var cells = row.cells;
  
    var projectName = prompt("Enter new project name:", cells[1].innerHTML);
    var imageUrl = prompt("Enter new image URL:", cells[2].innerHTML);
    var projectLink = prompt("Enter new project link:", cells[3].innerHTML);
    var projectTags = prompt("Enter new project tags:", cells[4].innerHTML);
  
    cells[1].innerHTML = projectName;
    cells[2].innerHTML = imageUrl;
    cells[3].innerHTML = projectLink;
    cells[4].innerHTML = projectTags;
  }
  
  function clearInputFields() {
    document.getElementById("projectName").value = "";
    document.getElementById("imageUrl").value = "";
    document.getElementById("projectLink").value = "";
    document.getElementById("projectTags").value = "";
  }
  