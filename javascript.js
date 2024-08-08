/* var siteName="Demo Site";

document.writeln(siteName);
document.writeln(siteName.toUpperCase());
document.writeln(Math.random());

var myName=prompt("Input YourName");
document.writeln("Hello! "+myName);

var myAge=prompt("InputYour Age");
myAge=parseInt(myAge);
document.write(myAge*myAge); 

var score=[90,89,77,69];
document.writeln(score[0]); document.writeln(score); 

var person ={
    name:"white",
    age:23,
    is_male:true,
    print_name:function() {
        document.write(this.name);
    }
};

document.write(person.name);
person.print_name(); 

movie = {
    title:"top gun",
    producer:"paramount",
    actors:[
            {
                name:"tom cruse",
                is_male:true
            },
            {
                name:"kelly",
                is_male:false
            }    
        ]
    
}

document.write(movie.title);
document.write(movie.producer);
document.write(movie.actors[0].name);
document.write(movie.actors[1].is_male); */

// var i=1;

// while (i<=5) {
//     document.write(i);
//     document.write("<br/>");
//     i++;
// }

// do {
//     document.write(i);
//     document.write("<br/>");
//     i--;
// } while (i>=0)

// nameList=["tim","mary","lisa","peter"];
// for (var i=0;i<nameList.length;i++) {
//     document.write(nameList[i]);
//     document.write("<br/");
// }

// class NameList{
//     constructor (name,birthyear,is_male) {
//         this.name=name;
//         this.birthyear=birthyear;
//         this.is_male=is_male;
//     }
//     age() {
//         //document.write("hello");
//         return 2024-this.birthyear;
//     }
// }

// // namelist1=new NameList("Peter",2012,true);
// // document.write(namelist1.is_male);
// // document.write("<br/>");
// // document.write(namelist1.age());
// // document.write("<br/>");

// function printnl(a){
//     document.write(a);
//     document.write("<br/>");
// }

// namelist1= new NameList("Peter",2000,true);
// printnl(namelist1.name);

var title=document.getElementById("title");
var content=document.getElementById("content");
var btn=document.getElementById("btn");
var list=document.getElementById("list");

btn.addEventListener("click",function() {
    // list.innerHTML=list.innerHTML+`
    // <div class="article">
    //     <h2>${title.value}</h2>
    //     <p>${content.value}</p>
    // </div>
    // `;
    var height=document.querySelector("input").value;
    height=Number(height);
    //
    height= (height/100)*(height/100);
    console.log(height);
    var weight=Number(document.querySelector("textarea").value);
    console.log(document.querySelector("textarea").value);
    var bmi=Math.floor((weight/height)*100)/100;
    console.log(bmi);

    document.querySelector("#bmi").innerHTML="BMI is "+bmi;
})
//localStorage.setItem("buffer",100);
//document.write(localStorage.getItem("buffer"));

//console.log(document.querySelector("#content").innerHTML);

