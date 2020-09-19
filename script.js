

var textEntry = document.querySelector("#text-entry1");
var saveBtn = document.querySelector("save");
  

  function checkTime(){
    console.log("Inside checkTime() function");
    var currentTime = moment().format('MMMM Do YYYY, h');
    document.getElementById("add_date").textContent = currentTime;
    loadSchedule(); 
    changeColor();
  }
  

function saveText(textObj){
  var text = textObj.value;
  console.log(textObj);
  console.log(text);
  localStorage.setItem(textObj.id,textObj.value);
}
function loadSchedule(){
  
  
  var localKeys = Object.keys(localStorage);
  console.log(localKeys);
  for(var i =0;i<localKeys.length;i++){
    if(document.getElementById(localKeys[i])!=null){
    document.getElementById(localKeys[i]).textContent = localStorage.getItem(localKeys[i]);
    }
  }
  
}

function changeColor(){
  console.log("Indide changeColor()");
  var currentTime = moment().format('H');
  
  for(var i=1;i<=10;i++){
    var index = i.toString();
    
    var div = document.getElementById('time'.concat(index));
    var div2 = document.getElementById('text-entry'.concat(index));
    
    if(Number.parseInt(div.getAttribute('value'))<Number.parseInt(currentTime)){
      div2.style.backgroundColor = "gray";
    } else if(Number.parseInt(div.getAttribute('value'))>Number.parseInt(currentTime)){
      div2.style.backgroundColor = "red";
    }else {
      div2.style.backgroundColor = "green";
    }
  }
}
  




