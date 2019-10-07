//exo1
function getFormvalue() {
    var x = document.getElementById("form1")
    for (var i = 0; i < x.length; i++) {
        if (x.elements[i].value != "Submit")
            console.log(x.elements[i].value);
    }
}
//exo2
function jsStyle() {
    var t = document.getElementById("text");
    t.style.backgroundColor = "red";
}
//exo4
function getAttributes() {
    var href = document.getElementById("w3r").href;
    console.log(href);
    var hreflang = document.getElementById("w3r").hreflang;
    console.log(hreflang);
    var target = document.getElementById("w3r").target;
    console.log(target);
    var type = document.getElementById("w3r").type;
    console.log(type);
}
//exo5

function insert_Row() {
    var x = document.getElementById('sampleTable').insertRow(2);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = "New Cell1";
    z.innerHTML = "New Cell2";
}
//exo6
function changeContent() {
    row = prompt("Input the row number", "0");
    cell = prompt("Input cell number", "0");
    content = prompt("Input cell content");
    var x = document.getElementById('myTable').rows[parseInt(row, 10)].cells;
    x[parseInt(cell, 10)].innerHTML = content;
}
//exo7
 function createTable() {
    rowsNumber = window.prompt("input the row number", 1);
    columnsNumber = window.prompt("input the columns number", 1);
     var x = document.getElementById('myTable');
     for (var i = 0; i < parseInt(rowsNumber, 10); i++) {
         var x = document.getElementById('myTable').insertRow(i);
         for (var j = 0; j < parseInt(columnsNumber, 10); j++) {
             var y = x.insertCell(j);
             y.innerHTML = "Row " + i + " column " + j;
         }
     }

}
//exo8
function RemoveColor(){
    var x=document.getElementById('colorSelect');
    // var index= x.selectedIndex;
    // if (index>-1){
    //     x.options[index]=null;
    // }
    x.remove(x.selectedIndex);

}
//exo9
function getOptions(){
    var x=document.getElementById('colorSelect');
    var text= "Number of elements: " + x.length + " ";
    for(var i=0 ;i<x.length;i++){
         text=text+x.options[i].text + " , ";
    }
    window.alert(text);
}