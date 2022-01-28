var tbody = document.getElementsByTagName("tbody")[0];
var DATA;
var x = false;

$.ajax({
  url: "data.json",
  success: function (data) {
    DATA = data;
    console.log(data);
    fill(data);
  },
});

function fill(dt) {
  for (var i = 0; i < dt.length; i++) {
    tbody.innerHTML += `
                    <tr> 
                    <td>${dt[i].Id}</td>
                    <td>${dt[i].name}</td>
                    <td>${dt[i].Price}</td>
                    <td>${dt[i].Catégorie}</td>
                    <td>${dt[i].Disponibilité}</td>
                    <td>${dt[i].Fournisseur}</td>
                    </tr>`
      ;
  }
}

$("#input").on("keyup", function () {
  var list = [];
  DATA.forEach((element) => {
    if (element["name"].includes(input.value)) {
      list.push(element);
    }
  });
  $("tbody").html("");
  fill(list);
});

$("th").click(function () {
  var table = $(this).parents("table").eq(0);
  var rows = table
    .find("tr:gt(0)")
    .toArray()
    .sort(comparer($(this).index()));
  this.asc = !this.asc;
  if (!this.asc) {
    rows = rows.reverse();
  }
  for (var i = 0; i < rows.length; i++) {
    table.append(rows[i]);
  }
});
function comparer(index) {
  return function (a, b) {
    var valA = getCellValue(a, index),
      valB = getCellValue(b, index);
    return $.isNumeric(valA) && $.isNumeric(valB)
      ? valA - valB
      : valA.toString().localeCompare(valB);
  };
}
function getCellValue(row, index) {
  return $(row).children("td").eq(index).text();
}

// -------------------------------------------
// -------------------------------------------

$("#th-1").click(function () {
  
 
     $("#th-2").html(
       'name  <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
     );
  $("#th-3").html(
    'price <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-4").html(
    'category <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-5").html(
    ' availablity<i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-6").html(
    'forniso <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  

  if (x === false) {
    $("#th-1").html('<i class="bi can bi-caret-down"></i>');
    return (x = true);
  }
  if (x === true) {
    $("#th-1").html(' <i class="bi can bi-caret-up"></i>');
    return (x = false);
  }
});

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

$("#th-2").click(function () {
 
  $("#th-1").html(
    'ID <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
 
  $("#th-3").html(
    'price <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-4").html(
    'category <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-5").html(
    ' availablity<i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-6").html(
    'forniso <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  

  if (x === false) {
    $("#th-2").html('<i class="bi can bi-caret-down"></i>');
    return (x = true);
  }
  if (x === true) {
    $("#th-2").html(' <i class="bi can bi-caret-up"></i>');
    return (x = false);
  }
});

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

$("#th-3").click(function () {
 
  $("#th-1").html(
    'ID <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
     $("#th-2").html(
       'name  <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
     );

  $("#th-4").html(
    'category <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-5").html(
    ' availablity<i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-6").html(
    'forniso <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  

  if (x === false) {
    $("#th-3").html('<i class="bi can bi-caret-down"></i>');
    return (x = true);
  }
  if (x === true) {
    $("#th-3").html(' <i class="bi can bi-caret-up"></i>');
    return (x = false);
  }
});

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

$("#th-4").click(function () {
 
  $("#th-1").html(
    'ID <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
     $("#th-2").html(
       'name  <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
     );
  $("#th-3").html(
    'price <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
 
  $("#th-5").html(
    ' availablity<i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-6").html(
    'forniso <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  

  if (x === false) {
    $("#th-4").html('<i class="bi can bi-caret-down"></i>');
    return (x = true);
  }
  if (x === true) {
    $("#th-4").html(' <i class="bi can bi-caret-up"></i>');
    return (x = false);
  }
});

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

$("#th-5").click(function () {
 
  $("#th-1").html(
    'ID <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
     $("#th-2").html(
       'name  <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
     );
  $("#th-3").html(
    'price <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-4").html(
    'category <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );

  $("#th-6").html(
    'forniso <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  

  if (x === false) {
    $("#th-5").html('<i class="bi can bi-caret-down"></i>');
    return (x = true);
  }
  if (x === true) {
    $("#th-5").html(' <i class="bi can bi-caret-up"></i>');
    return (x = false);
  }
});

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

$("#th-6").click(function () {
 
  $("#th-1").html(
    'ID <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
     $("#th-2").html(
       'name  <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
     );
  $("#th-3").html(
    'price <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-4").html(
    'category <i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );
  $("#th-5").html(
    ' availablity<i  class="bi bi-caret-down"></i><i  class="bi bi-caret-up"></i>'
  );

  

  if (x === false) {
    $("#th-6").html('<i class="bi can bi-caret-down"></i>');
    return (x = true);
  }
  if (x === true) {
    $("#th-6").html(' <i class="bi can bi-caret-up"></i>');
    return (x = false);
  }
});

// -------------------------------------------
// -------------------------------------------

