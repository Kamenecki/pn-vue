/*


function cartStorage() {
  if(typeof(Storage) !== "undefined") {

    if (localStorage.cart) {
      localStorage.cart = Number(localStorage.cart)+1;
    } else {
      localStorage.cart = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.cart + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

*/

///----------------------------------------------------------------------------------------------------------

function cartStorageAdd(item){
  var cart= [];
  if(localStorage.getItem("cart")!=null){
    cart=JSON.parse(localStorage.getItem("cart"));
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
  }
  else{
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
}
}

function cartStorageDel(item){
  var cart= [];
  if(localStorage.getItem("cart")!=null){
    cart=JSON.parse(localStorage.getItem("cart"));
    console.log(cart.length);
    for(var x=0; x<cart.length; x++){
      if(cart[x]==item){
        cart.splice(x,1);
        x--;
        cartSelection();
      }
    }
    localStorage.setItem("cart",JSON.stringify(cart));
  }
  location.reload();
}
function cartStorageKeepOneEach(){
  cartStorageKeepOne("igra1");
  cartStorageKeepOne("igra2");
  cartStorageKeepOne("igra3");
  cartStorageKeepOne("igra4");
  cartStorageKeepOne("igra5");
  cartStorageKeepOne("igra6");
}
function cartStorageKeepOne(item){
  var cart= [];
  var count= 0;
  if(localStorage.getItem("cart")!=null){
    cart=JSON.parse(localStorage.getItem("cart"));
    for(var x=0; x<cart.length; x++){
      if(cart[x]==item){
          count++;
      }
    }
    //console.log("COUNT: "+count);
    for(var x=0; x<cart.length; x++){
      if(cart[x]==item && count>1){
        cart.splice(x,1);
        x--;
        count--;
      }
      else if(count==1) break;
    }

    localStorage.setItem("cart",JSON.stringify(cart));
  }
}



    function AddCart(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }

    function RemoveCart(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }

  function cartSelection() {
    cartStorageKeepOneEach();
    var cart= []
    var x, i, kateri=[];
    x = document.getElementsByClassName("cartDiv");
    if(localStorage.getItem("cart")!=null){
      cart=JSON.parse(localStorage.getItem("cart"));
    for (i = 0; i < cart.length; i++) {
      if(cart[i]=="igra1"){
        kateri.push("igra1");
    }
    else if (cart[i]=="igra2") {
        kateri.push("igra2");
    }
    else if (cart[i]=="igra3") {
        kateri.push("igra3");
    }
    else if (cart[i]=="igra4") {
        kateri.push("igra4");
    }
    else if (cart[i]=="igra5") {
        kateri.push("igra5");
    }
    else if (cart[i]=="igra6") {
        kateri.push("igra6");
    }
    //  if (x[i].className.indexOf(c) > -1) AddCart(x[i], "show");
    }
    for (i = 0; i < kateri.length; i++){
        for(var j=0; j<x.length; j++){
          if(x[j].classList.contains(kateri[i])){
              var a = x[j];
              a.classList.remove("cartDiv");
              a.classList.add("show");
          }
        }
    }
  }
}

function myFunction() {
  var cart= [];
  cart=JSON.parse(localStorage.getItem("cart"));
  console.log(cart.length);
  if(cart[0] == "igra1" || cart == "igra2" || cart == "igra3" || cart == "igra4" || cart == "igra5" || cart == "igra6") {
    alert("Naročilo uspešno oddano");
  }

  else{
    alert("Naročilo ni oddano, košarica je prazna!");
  }
}
