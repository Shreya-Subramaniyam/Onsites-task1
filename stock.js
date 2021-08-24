var flag = false;
var position;
function read() {
  var data = document.getElementById("name").value;
  return data;
}

function insert(data) {
    var table = document.getElementById("List").getElementsByTagName("tbody")[0];
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
  // console.log("1");
  flag = true;
  var currRow = obj.parentElement.parentElement;
  document.getElementById("name").value = currRow.cells[0].innerHTML;
  position = currRow;
}

function update(obj) {
  position.cells[0].innerHTML = obj;
}

function deleteObj(obj) {
  var currRow = obj.parentElement.parentElement;
  document.getElementById("List").deleteRow(currRow.rowIndex);
  reset();
}
// function mouseHoverfn(obj) {
//   obj.style.cursor = pointer;
// }
