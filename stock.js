// var btn = document.getElementById("btn");

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
    cell2.innerHTML = "<a>Edit</a>";
}

function submitForm() {
  console.log("1");
  var data1 = read();
  insert(data1);
}

// btn.addEventListener("click", submit());
