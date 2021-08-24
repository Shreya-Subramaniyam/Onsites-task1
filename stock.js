// var btn = document.getElementById("btn");

function read() {
  var data = document.getElementById("name").value;
  return data;
}

function insert(data) {
    var table = document.getElementById("List").getElementByTagName("tbody");
    var row = table.insertRow(table.length);
    var naMe = row.insertCell(0);
    naMe.innerHTML = data;
    var operations = row.insertCell(1);
    operations.innerHTML = "<a>Edit</a><a>Delete</a>";
}

function submitForm() {
  console.log("1");
  var data1 = read();
  insert(data1);
}

// btn.addEventListener("click", submit());
