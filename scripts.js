function imp(){
  wri(document.getElementById('imp1').value);
}
function exp(){
  document.getElementById('exp1').value=read()
}
function read(){
  var everyChild = document.querySelectorAll("#container div"), testArray;
    for (var i = 0; i<everyChild.length; i++) {
      testArray += everyChild[i].classList.item(1)+":";
    }
    return testArray.substr(9);
}
function wri(impStr){
  if(impStr==""){
    alert("Error: Write function empty input.");
    return;
  }
  var arr = impStr.split(":");
  arr.splice(-1,1);
  var impChildren = document.querySelectorAll("#container div");
    for(var z=0;z<arr.length;z++){
      impChildren[z].classList.remove(impChildren[z].classList.item(1));
      impChildren[z].classList.add(arr[z]);
    }
}
function selAll(){
  var readStr = read().split(":");
  readStr.splice(-1,1);
  for(var k = 0;k<readStr.length;k++){
    switch(readStr[k]){
        case "u":
          break;
        case "o":
          readStr[k]="oh";
          break;
        case "s":
          readStr[k]="sh";
          break;
        case "g":
          readStr[k]="gh";
          break;
        default:
          break;
    }
  }
  var fstring = readStr.join(":")+":";
  wri(fstring);
}
function desAll(){
  var readStr = read().split(":");
  readStr.splice(-1,1);
  for(var k = 0;k<readStr.length;k++){
    switch(readStr[k]){
        case "u":
          break;
        case "oh":
          readStr[k]="o";
          break;
        case "sh":
          readStr[k]="s";
          break;
        case "gh":
          readStr[k]="g";
          break;
        default:
          break;
    }
  }
  var fstring = readStr.join(":")+":";
  wri(fstring);
}
var b = "";
function selList(){
  var x = document.getElementById('saves');
  for(var t = 1;t<x.options.length;t++){
    b += x.options[t].value + ";";
  }
  Cookies.set("_selList",b);
  b="";
}
function save(){
  var savBox = document.getElementById('sav').value;
  Cookies.set(savBox,read());
  var x = document.getElementById('saves');
  var option = document.createElement('option');
  option.text = savBox;
  x.add(option);
  selList();
}
function load(){
  var e = document.getElementById("saves");
  var strUser = e.options[e.selectedIndex].value;
  wri(Cookies.get(strUser));
}
function clCook()
{
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {
        var spcook =  cookies[i].split("=");
        deleteCookie(spcook[0]);
    }
    function deleteCookie(cookiename)
    {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        var expires = ";expires="+d;
        var name=cookiename;
        //alert(name);
        var value="";
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    window.location = ""; // TO REFRESH THE PAGE
}
function selLoad() {
  if(typeof Cookies.get("_selList") == "undefined"){
    return;
  }
  var a = Cookies.get("_selList").toString();
  a = a.split(";");
  for(var g = 0;g<a.length-1;g++){
    var x = document.getElementById('saves');
    var option = document.createElement('option');
    option.text = a[g];
    x.add(option);
  }
}
