var flag = false;
var position;
var names = [];
var table;
initialnames();
function read() {
  var data = document.getElementById("name").value;
  return data;
}

function insert(data) {
  names.push(data);
  localStorage.setItem("stockName", JSON.stringify(names));
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = data;
    cell2.innerHTML = `<a onclick = "edit(this)">Edit</a>
                      <a onclick = "deleteObj(this)">Delete</a>`;
}

function submitForm() {
  if(flag == false) {
    var data1 = read();
    if(data1 != "") {
      insert(data1);
      reset();
    }
  }
  else if(flag == true) {
    var data1 = read();
    update(data1);
    reset();
    flag = false;
  }
}

function reset() {
  document.getElementById("name").value = "";
}

function edit(obj) {
  flag = true;
  var currRow = obj.parentElement.parentElement;
  document.getElementById("name").value = currRow.cells[0].innerHTML;
  position = currRow.rowIndex;
}

function update(obj) {
  names[position-1] = obj;
  localStorage.setItem("stockName", JSON.stringify(names));
  table.rows[position-1].cells[0].innerHTML = obj;
}

function deleteObj(obj) {
  var currRow = obj.parentElement.parentElement;
  position = currRow.rowIndex;
  names.splice(position-1, 1);
  localStorage.setItem("stockName", JSON.stringify(names));
  reRender();
}

function initialnames() {
  if(localStorage.getItem("stockName") == null) {
    localStorage.setItem("stockName", JSON.stringify([]));
  }
  names = JSON.parse(localStorage.getItem("stockName"));
  table = document.getElementById("List").getElementsByTagName("tbody")[0];

  for (var i =0; i < names.length; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = names[i];
    cell2.innerHTML = `<a onclick = "edit(this)">Edit</a>
                      <a onclick = "deleteObj(this)">Delete</a>`;
  }
}

function reRender() {
  table = document.getElementById("List").getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  for (var i =0; i < names.length; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = names[i];
    cell2.innerHTML = `<a onclick = "edit(this)">Edit</a>
                      <a onclick = "deleteObj(this)">Delete</a>`;
  }
}
