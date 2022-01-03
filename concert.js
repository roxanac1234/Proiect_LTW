
function concert() {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("name", "MARTIN GARRIX");
      localStorage.setItem("price", "300 ");
     // alert("data added in localstorage");
    } else {
     // alert("local storage not supported");
    }
  }


  function getConcertDetails()
  {
    if (typeof Storage !== "undefined") {
      var name =  localStorage.getItem("name");
      var price=localStorage.getItem("price");
     // alert("name" + name + " price" + price);
    } else {
     // alert("local storage not supported");
    }
  }