var tableData = [];
var editingRowId = null; 

function handleSave() {
  var subject = document.getElementById('subject').value;
  var deadline = document.getElementById('deadline').value;
  var status = document.getElementById('status').value;

  if (subject && deadline && status) {
    if (editingRowId !== null) {
      updateTableRow(editingRowId, subject, deadline, status);

      editingRowId = null;
    } else {
      var taskList = document.getElementById('taskList');
      var newRow = taskList.insertRow(-1);
      var rowId = 'row_' + Date.now(); 
      newRow.setAttribute('id', rowId);

      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);

      cell1.innerHTML = subject;
      cell2.innerHTML = deadline;
      cell3.innerHTML = status;
      cell4.innerHTML = '<button onclick="handleEdit(\'' + rowId + '\')">Edit</button>' +
                        '<button onclick="handleDelete(\'' + rowId + '\')">Delete</button>';
    }

    document.getElementById('subject').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('status').value = 'Not Started';
  }
}

function handleEdit(rowId) {
  var row = document.getElementById(rowId);
  var subject = row.cells[0].innerHTML;
  var deadline = row.cells[1].innerHTML;
  var status = row.cells[2].innerHTML;

  document.getElementById('subject').value = subject;
  document.getElementById('deadline').value = deadline;
  document.getElementById('status').value = status;

  editingRowId = rowId;
}

function handleDelete(rowId) {
  var row = document.getElementById(rowId);
  row.parentNode.removeChild(row);
}

function updateTableRow(rowId, subject, deadline, status) {
  var row = document.getElementById(rowId);

  row.cells[0].innerHTML = subject;
  row.cells[1].innerHTML = deadline;
  row.cells[2].innerHTML = status;
}
