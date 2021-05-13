var a=[];
window.onload=function(){
    if(JSON.parse(localStorage.getItem("list"))!=null){
        a=JSON.parse(localStorage.getItem("list"));
        disp();
    }   
}
function disp(){
    document.getElementById("myList").innerHTML="";
    for (let i=0;i<a.length;i++){
        document.getElementById("myList").innerHTML+= "<div id='box'>"+a[i]+ "<div id='btns'><span><button class='btn' onclick='done("+i+")'>Done</button></span>"+" "+"<span><button class='btn' onclick='del("+i+")'>Delete</button></span></div> </div>;    }
}
function add() {
    a.push(document.getElementById("myInput").value);
    localStorage.setItem("list", JSON.stringify(a));
    disp();
    console.log(a);
    console.log(localStorage);
}
function del(i) {
    a.splice(i,1);
    localStorage.setItem("list", JSON.stringify(a));
    disp();
}
function done(i) {
    a[i] = "<s>" + a[i] + "</s>";
    localStorage.setItem("list", JSON.stringify(a));
    disp();
}