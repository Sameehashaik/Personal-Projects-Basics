// Declare an empty array
var arr=[];
var arr1=new Array();

//Declare and Init an array with 3 number values
var numarr=[1,2,3];
var numarr1=new Array(1,2,3);

//A. Print array left to right: output==> 1 2 3
for(var i=0; i<numarr.length; i++){
    process.stdout.write(numarr[i]+" ");
}

// B. Print array right to left: output==> 3 2 1
for(var i=numarr.length-1; i>=0; i--){
    process.stdout.write(numarr[i]+" ");
}

var arr=[];

//adding an element
arr.push(1);
arr.push(2);
console.log(arr);


//removing an element
arr.pop(2);
console.log(arr);

//adding element in begening
arr.unshift(13);
console.log(arr);

//removing value from begining
arr.shift(13);
console.log(arr);

//sorting
