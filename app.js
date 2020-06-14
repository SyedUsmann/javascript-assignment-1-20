                                             //chap 1 Alert//
/*                                           

//task 1
 alert("hello visitors","alert title");

 //task 2
 alert("error! please enter a valid password")

 //task 3
 alert("welcome to JS land...\n Happy coding!")

 //task 4
 alert("Welcome to JS land")

 alert("happy coding!\n ")

 //task 5
 */



 
                                      //chap 2 strings and variables //
/*
                                          
 //task 1
 var username="";
 //task 2
 var myname="nimra akram";
 //task 3
 var messege="hello world";
 alert(messege)
 //task 4
 var myname="nimra";
 var myage="21 years old";
 var studentof="i'm a computer science student";
 alert(myname)
 alert(myage)
 alert(studentof)
 //tast 5
 var word="pizza";




 //task 6
 var email="nimraakram321@gmail.com";
 alert("my email address is "+ email)
 //task 7
 var book="A smarter way to learn javascript"
 alert("i'm trying to learn from the book"+ book)
 //task 8
 document.write("yah! i can write HTML content through javascript")
 //task 9
 var stype="ஜ"
 var clock="۩"
 var watch="۞"
 var line="▬"
 alert(line+line+line+line+line+line+line+line+line+stype+clock+watch+clock+stype+line+line+line+line+line+line+line+line+line)
 */
    

                                         //chap 3 variables and numbers //

 /*
 //task 1
 var age="15";
 alert("i'm " +age+ " years old" )
 //task 2


 //task 3
 var birthyear=Number("1999");
 document.write("my birth year is "+birthyear+" \n Data type of my declared variable is number \n")
 //task 4
 var Vname=prompt("enter your name")
 var Ptitle=prompt("you product name")
 var quntity=prompt("enter your product quntity")
 document.write( "\n"+Vname+" ordered "+quntity +Ptitle+ " on XYZ clothing store")
 */
                                        //chap 4 variable name: legal & illegal
/*
 //task 1
 var a, b, c;

 var $ ="$";
 var _ ="_";
 var numbers ="numbers";
 var letter="letter";
 var $boy;

 //var 223222;
 //var 6sas;
 //var %sgsg_;
 //var dsdsh#;
 //var !geee;
 var str="Rules for naming JSvariables"

 document.write(str.bold())
 document.write("<br>")
 document.write("<br>")
 document.write("<br>")

 document.write("Variable names can only contain "+letter+","+numbers+","+$+"and "+_+".For example $my_1stVariable")
 document.write("<br>")
 document.write("Variables must begin with a"+letter+" ,"+$+" or"+_+". For example $name, _name or name")
 document.write("<br>")
 document.write(" Variable names are case sensitive")
 document.write("<br>")
 document.write("Variable names should not be JS keywords")
 
 
 */
                                             //chap 5 maths expressions

 //task 1
 /*
 var num1=prompt("enter 1st your number") 
 var num2=prompt("enter 2nd your number")
 var n1=Number(num1)
 var n2=Number(num2)
 var sum=n1+n2;
 var sub=n1-n2;
 var mul=n1*n2;
 var div=n1/n2;

 document.write("sum of "+num1+"and "+num2+" is "+sum)
 document.write("<br>")
 //task 2
 document.write("subtraction of "+num1+"and "+num2+" is "+sub)
 document.write("<br>")
 document.write("multiplication of "+num1+"and "+num2+" is "+mul)
 document.write("<br>")
 document.write("division of "+num1+"and "+num2+" is "+div)
 
*/
//task 3
/*
var b;
document.write("value after varible declaration is "+ b)
document.write("<br>")
b=3;
document.write("initialize value is "+b)
document.write("<br>")
var b=++b;
document.write("value after increment is "+b)
document.write("<br>")
b=b+7;
document.write("value after additions is "+b)
document.write("<br>")
b=--b;
document.write("value afer decrement is "+b)
document.write("<br>")
b=b%3;
document.write("the remainder is " +b)
*/
//task 4
/*
var ticket_price=600 ;
var ticket=Number(prompt("how many tickets do you want"))
var total_cost=ticket*ticket_price;
document.write("Total cost to buy 5 tikcets to a movie is "+total_cost+"PKR")
*/
// task 5
/*
var a;
a=Number(prompt("enter your table number"))
document.write("table of "+a)
document.write("<br>")
for(var i=1;i<=10;i++){
    document.write(a+" X "+i+" = "+a*i )
    document.write("<br>")
}
*/
//task 6
/*
var C=prompt("enter the value for celcius")
var F=prompt("enter the value for Ferenheit")
var f=(C*9/5)+32;
var c=(F-32)*5/9;
document.write(C+"C is "+f+"F")
document.write("<br>")
document.write(F+"F is "+c+"C")

*/
//task 7
/*
var price_item1=Number(prompt("enter the price of item"))
var Q1=Number(prompt("enter the quntity of item"))
var price_item2=Number(prompt("enter the price of next item "))
var Q2=Number(prompt("enter the quntity of item"))
var ship_charges=Number(100)
var total=(price_item1*Q1)+(price_item2*Q2)+ship_charges;
document.write("price of itme 1 is "+price_item1)
document.write("<br>")
document.write("Quantity of itme 1 is "+Q1)
document.write("<br>")
document.write("price of itme 2 is "+price_item2)
document.write("<br>")
document.write("Quantity of itme 2 is "+Q2)
document.write("<br>")
document.write("Shipping Charges"+ship_charges)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("Total cost of your order is "+total)
*/
//task 8
/*
var t_marks=Number(prompt("enter your total marks"))
var O_marks=Number(prompt("enter your obtained marks"))
var persentage=(O_marks/t_marks)*100;
document.write("Total marks: "+t_marks)
document.write("<br>")
document.write("Obtained marks: "+O_marks)
document.write("<br>")
document.write("persentage: "+persentage+"%")
*/
//task 9
/*
var UK=Number(104.80)
var S_R=Number(28)
var uk=Number(prompt("number of Us dollors"))
var s_r=Number(prompt("number of saudi riyal"))
var convert_doller=uk*UK;
var convert_riyal=s_r*S_R;
var PKR=convert_doller+convert_riyal;
document.write("Total currency in PKR:"+PKR)
*/
//task 10
/*
var number=Number(5);
number=((number+5)*10)/2;
document.write("the number is " +number)
*/
//task 11
/*
var C_year=prompt("enter the current year")
var B_year=prompt("enter the birth year")
var your_age=C_year-B_year;
var your_age2=(C_year-B_year)-1;
document.write("Current Year: "+C_year)
document.write("<br>")
document.write("Birth Year: "+B_year)
document.write("<br>")
document.write("your age is "+your_age)
document.write("Or "+your_age2)
*/
//task 12
/*
var Radius=Number(prompt("enter radius"))
var pie=3.142;
var circumference=2*(pie*Radius);
var Area_of_circle=pie*Radius*Radius;
document.write("Radius of a circle: "+Radius)
document.write("<br>")
document.write("The circumference is "+circumference)
document.write("<br>")
document.write("The area is: "+Area_of_circle)
*/
//task 13
/*
var fav_snack=prompt("enter your favourite snacks")
var C_age=Number(prompt("enter your current age"))
var max_age=Number(prompt("enter your etimate age"))
var snacks_per_day=Number(prompt("enter your number of snacks per day"))
var cal=(max_age-C_age)*snacks_per_day;
document.write("Favourite snacks: "+fav_snack)
document.write("<br>")
document.write("Current age: "+C_age)
document.write("<br>")
document.write("Estimated Maximum age: "+max_age)
document.write("<br>")
document.write("Amount of snacks per day: "+snacks_per_day)
document.write("<br>")
document.write("you will need "+cal+" "+fav_snack +" to last you until the ripe old age of "+max_age)
*/

                                      //chap 6-9 maths expression//
//task 1
/*
var a=10;
document.write("Result:<br>")
document.write("The value of a is:"+a+"<br>")
document.write("-------------------------")
document.write("<br>")
document.write("The value of ++a is :"+(++a) +"<br>")
document.write("Now the value of a is :"+a +"<br>")
document.write("<br>")
document.write("The value of a++ is :"+(a++)+"<br>")
document.write("Now the value of a is:"+a+"<br>")
document.write("<br>")
document.write("The value of ++a is :"+(--a) +"<br>")
document.write("Now the value of a is :"+a +"<br>")
document.write("<br>")
document.write("The value of a++ is :"+(a--)+"<br>")
document.write("Now the value of a is:"+a+"<br>")
*/
//task 2
/*
var a = 2, b = 1;
document.write("a: "+a+"<br>")
document.write("b: "+b+"<br>")
var result = --a - --b + ++b + b--;
document.write("--a: "+1+", --b: "+0+", ++b: "+1+", b--: "+1)
document.write("<br> Result:"+result)
*/
//task 3
/*
var name=prompt("plese enter your name ")
document.write("Good day "+name)
*/
//task 5
/*
var num=Number(prompt("enter your number for the table"))
if(num!==0){
    for(var i=1;i<=10;i++){
        document.write(num+" x "+i+" = "+num*i)
        document.write("<br>")
    }
    
}else{
    for(var i=1;i<=10;i++){
    document.write(5+" x "+i+" = "+5*i)
        document.write("<br>")
    }
}
*/
//task 6
/*....................................
var sub1=prompt("enter your first subject name")
var sub2=prompt("enter your second subject name")
var sub3=prompt("enter your third subject name")
var total_marks=100;
var O_sub1=prompt("enter your marks for first subject")
var O_sub2=prompt("enter your marks for second subject")
var O_sub3=prompt("enter your marks for third subject")
var persentage_sub1=(O_sub1/total_marks)*100;
var persentage_sub2=(O_sub2/total_marks)*100;
var persentage_sub3=(O_sub3/total_marks)*100;
var t_t_marks=total_marks+total_marks+total_marks;
var t_o_marks=O_sub1+O_sub2+O_sub3
var t_percenage=(t_t_marks/t_o_marks)*100
document.write("subject"+"    "+"T-marks"+"    "+"O-marks"+"    "+"%age")
document.write("<br>")
document.write("<br>")
document.write(sub1+"      "+total_marks+"     "+O_sub1+"     "+persentage_sub1)
document.write("<br>")
document.write(sub2+"    "+total_marks+"   "+O_sub2+"  "+persentage_sub2)
document.write("<br>")
document.write(sub3+"    "+total_marks+"   "+O_sub3+"  "+persentage_sub3)
document.write("<br>")
document.write("         "+t_t_marks+"   "+t_o_marks+"   "+t_percenage)
...............................................
*/

                                  //chap 9-11 user input & conditional statements
//task 1
/*
var city=prompt("enter the city name")

if (city==='karachi'){
    alert("welcome to the city of lights")
}
else{
    alert("welcom to "+city)
}

*/
//task 2
/*
var gender=prompt("please type ypur gender")
if(gender==="female")
{
    document.write("Good morning Ma'am")

}
else{
    document.write("Good morning Sir")
}
*/
//task 3
/*
var traffic_light=prompt("enter the color of traffic light")
if(traffic_light==='red'){
    alert("Must stop")
}
else if(traffic_light==="yellow"){
    alert("Ready to move")
}
else{
    alert("Move now")
}
*/
//task 4
/*
var fuel=Number(prompt("enter the fuel in your car in liters"))
if(fuel<0.25){
    alert("please refil the fuel in your car")
}
else{
    alert("refill your car fuel if needed")
}
*/
//task 5
/*
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

if("car" < "cat"){
    alert("car is smaller than cat");
    }
 */
 //task 6
 /*
 var Obtained_marks=Number(prompt("enter your obtained marks in 3 subjects"))
 var Total_marks=Number(prompt("enter your totals marks of 3 subjects "))
 var persentage=(Obtained_marks/Total_marks)*100
 document.write("Marks sheet")
 document.write("<br>")
 document.write("<br>")
 document.write("Total marks: "+Total_marks)
 document.write("<br>")
 document.write("Obtained marks: "+Obtained_marks)
 document.write("<br>")
 document.write("Percentage: "+persentage+"%")
 document.write("<br>")
 if(persentage>80 || persentage===80){
     document.write("Grade: A-one")
     document.write("<br>")
     document.write("remarks: Excellent")
 }
 else if(persentage>70|| persentage===70){
    document.write("Grade: A")
    document.write("<br>")
    document.write("remarks: Good")
 }
 else if(persentage>60|| persentage===60){
    document.write("Grade: B")
    document.write("<br>")
    document.write("remarks: You need to improve")
 }
 else{
    document.write("Grade: Fail")
    document.write("<br>")
    document.write("remarks: Sorry")
 }
 */
 //task 7
 /*
 var secret_num=9;
 var number=Number(prompt("enter your number in the range of 1-10"))
 if(secret_num===number){
     alert("BINGO! correct answer")
 }
 else{
     alert("your close enough to the correct answer")
 }
 */
 //task 8
 /*
 var num=Number(prompt("enter the number"))
 if(num%3===0){
     alert(" the number is divisible by 3")
 }
 else {
     alert("it is not divisible by 3")
 }
 */
 //task 9
 /*
 var num=Number(prompt("enter the number"))
 if (num%2==0){
     alert("it is an even number")
 }
 else{
     alert("it is an odd number")
 }
 */
 //task 10
 /*
 var temperature=Number(prompt("enter the temperature of today"))
 if(temperature>40){
     alert("It is too hot outside")
 }
 else if(temperature>30){
     alert("The weather today ids normal")
 }
 else if(temperature>20){
     alert("Today's weather is cool")
 }
 else if(temperature>10){
     alert("OMG! Today's weather is so cool ")
 }
 */
 //task 11
 /*
 var num1=Number(prompt("enter your first number"))
 var num2=Number(prompt("enter your senconf number"))
 var operator=prompt("enter your operator")
 var result;
 if(operator==="+"){
     result=num1+num2;
 }
 else if(operator==="-"){
     result=num2-num1;
 }
 else if(operator==="/"){
     result=num1/num2;
 }
 else if(operator==="*"){
     result=num1*num2;
 }
 else if(operator==="%"){
     result=num2%num1;
 }
 alert("the result is "+result)
 */

                            //chap 12-13 IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS//
 //task 1
 /*
 
 var character = prompt("Enter a Character To Check Whether The given input is a Number , Uppercase Letter or lowercase Letter : ")
var charASCII = character.charCodeAt();

if (charASCII >= 48 && charASCII <= 57){
    document.write("It's a Number !");
}
else if (charASCII >= 65 && charASCII <= 90){
    document.write("It's an Uppercase Letter !");
}
else if (charASCII >= 97 && charASCII <= 122){
    document.write("It's a Lowercase Letter !");
}
else{
    document.write("You entered irrelavent information !!!  <br>");
}
 
 */
 //task 2
 /*
 var num1=Number(prompt("enter you number"))
 var num2=Number(prompt("enter you second number"))
 if(num1>num2){
     alert(num1+" is greater")
 }
 else if(num2>num1){
     alert(num2+" is greater")
 }
 else{
     alert("Both integers are equal")
 }
 */
 //task 3
 /*
 var number=Number(prompt("enter the nunber"))
 if (number>0){
     alert("your number is positive")
 }
 else if(number<0){
     alert("your number is negative")
 }
 else {
     alert("your number is zero")
 }
 */
 //task 4
 /*
 var alpha=prompt("enter your alphabet")
 if(alpha==='a'){
     alert("true")
 }
 else if(alpha==='e'){
     alert("true")
 }
 else if(alpha==="i"){
     alert("true")
 }
 else if(alpha==="o"){
     alert("true")
 }
 else if(alpha==="u"){
     alert("ture")
 }
 else{
     alert("false")
 }
 */
 //task 5
 /*
 var password="nimraakram";
 var verifypassword=prompt("enter your password")
 if(password===verifypassword){
     alert("your password is correct")
 }
 else if(verifypassword==='0'){
     alert("please enter your password")
     verifypassword=prompt("enter your password")
 }
 else{
     alert("please enter correct password")
 }
 */
 //task 6
 /*
 var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting)
}
*/
//task 7
/*
var time=Number(prompt("enter the time in 24 hours"))
if(time>=0000 && time<1200){
    alert("Good morning!")

}
else if(time>=1200 && time<1700){
    alert("Good afternoon!")
}
else if(time>=1700 && time<2100){
    alert("Good evening!")
}
else if(time>=2100 && time<2359)(
    alert("Good night!")
)*/



                // ARRAYS (Ch# 14-16): Task # 1 : Declare an empty array using JS literal notation to store student names in future. 

//task 1
/*
var studentsName = [];
document.write("var studentsName = [];");

*/ 

//task 2
/*
var studentsName = new Array();
document.write("var studentsName = new Array();");
*/ 


//task 3
/*
var stringsArray = ["Hello", "World", "Hi", "ASSALAM O ALAIKUM" ];
*/ 

//task 4
/*
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
*/ 

//task 5
/*
var booleanArray = [true, false];
*/ 

//task 6
/*
var mixedArray = ["Nabil", 3, "Hello World !", true, 97, false];
*/ 

//task 7
/*
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h4><b> Qualifications : </b></h4>");
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br>");
*/ 

//task 8
/*
var studentsName = ["abdullah", "bilal", "Ghous"];
var studentsScore = [320, 230, 480];

document.write("Score of " + studentsName[0] + " is " + studentsScore[0] + ". Percentage: 64% <br>");
document.write("Score of " + studentsName[1] + " is " + studentsScore[1] + ". Percentage: 46% <br>");
document.write("Score of " + studentsName[2] + " is " + studentsScore[2] + ". Percentage: 96% <br>");

*/ 

//task 9
/*


var colorNames = ["Green ", "Yellow ", "Orange ", "Red " ];
document.write("<b>Color Array : " + colorNames + "</b><br><br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
colorNames.unshift(prompt("Enter Color name to Add at The Beginning of the following Array : " + colorNames));
document.write("a.)  " + colorNames + "<br><br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
colorNames.push(prompt("Enter Color name to Add at The End of the following Array : " + colorNames));
document.write("b.)  " + colorNames + "<br><br>");

// c. Add two more color to the beginning of the array. Display the updated array in your browser.
colorNames.unshift(prompt("Enter Color name/(s) to Add at The Beginning of the following Array : " + colorNames));
document.write("c.)  " + colorNames + "<br><br>");

// d. Delete the first color in the array. Display the updated array in your browser.
colorNames.shift();
document.write("d.)  " + colorNames + "<br><br>");

// e. Delete the last color in the array. Display the updated array in your browser.
colorNames.pop();
document.write("e.)  " + colorNames + "<br><br>");

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
var index = (+prompt("Enter index number to Add  The Color of the following Array : " + colorNames));
var arr = [];
arr = prompt("Enter Color name/(s) to Add at The given index of the following Array : " + colorNames);
colorNames.splice((index-1), 0, arr);
document.write("f.)  " + colorNames + "<br><br>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
var startIndex = (+prompt("Enter The Starting index number to Delete  The Color of the following Array : " + colorNames));
var endIndex = (+prompt("Enter The Number of Elements to Delete  The Color/(s) of the following Array : " + colorNames));
colorNames.splice((startIndex-1), endIndex);
document.write("g.)  " + colorNames + "<br><br>");


*/ 

//task 10
/*
var studentScores = [320, 230, 480, 120];
document.write("<b>Array Before Sorting : </b><br>" + studentScores + "<br><br>");

studentScores = studentScores.sort();
document.write("<b>Array After Sorting : </b><br>" + studentScores);

*/ 

//task 11
/*
var cities = ["Karachi ", "Lahore ", "Islamabad", "Multan ", "Quetta ", "Peshawar " ];
document.write("<b>Cities list : </b><br>" + cities + "<br><br>");

var selestedCities = [];
selestedCities = cities.slice(2, 5);
document.write("<b>Selected cities list : </b><br>" + selestedCities + "<br><br>");
*/ 

//task 12
/*
var arr = ["This" , " is ", " my ", " cat "];
document.write("<b>Array : </b><br>" + arr + "<br><br>");

var stringArr = [];
stringArr = arr.join(" ");
document.write("<b>String : </b><br>" + stringArr + "<br><br>");

*/ 

//task 13
/*
var devices = ["keyboard", "Mouse", "Printer", "Monitor"];
document.write("<b>Devices : </b><br>" + devices + "<br><br>");

var deviceOut = devices.shift();
document.write("<b>Out : </b><br>" + deviceOut + "<br><br>");
deviceOut = devices.shift();
document.write("<b>Out : </b><br>" + deviceOut + "<br><br>");
deviceOut = devices.shift();
document.write("<b>Out : </b><br>" + deviceOut + "<br><br>");
deviceOut = devices.shift();
document.write("<b>Out : </b><br>" + deviceOut + "<br><br>");

*/ 

//task 14
/*
var devices = ["keyboard", "Mouse", "Printer", "Monitor"];
document.write("<b>Devices : </b><br>" + devices + "<br><br>");

var deviceOut = devices.pop();
document.write("<b>Out : </b><br>" + deviceOut + "<br><br>");
deviceOut = devices.pop();
document.write("<b>Out : </b><br>" + deviceOut + "<br><br>");
deviceOut = devices.pop();
document.write("<b>Out : </b><br>" + deviceOut + "<br><br>");
deviceOut = devices.pop ();
document.write("<b>Out : </b><br>" + deviceOut + "<br><br>");
*/ 

//task 15
/*
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier" ];

// document.write('<div class="btn-group"> <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Manufacturers </button> <div class="dropdown-menu"> <a class="dropdown-item" href="#">' + manufacturers[0] +'</a> <a class="dropdown-item" href="#">' + manufacturers[1] +'</a> <a class="dropdown-item" href="#">' + manufacturers[2] +'</a> <a class="dropdown-item" href="#">' + manufacturers[3] +'</a> <a class="dropdown-item" href="#">' + manufacturers[4] +'</a> <a class="dropdown-item" href="#">' + manufacturers[5] +'</a> </div>');

document.write('<div class="btn-group">');
document.write('<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">');
document.write('Manufacturers');
document.write('</button>');
document.write('<div class="dropdown-menu">');
document.write('<a class="dropdown-item" href="#">' + manufacturers[0] +'</a>');
document.write('<a class="dropdown-item" href="#">' + manufacturers[1] +'</a>');
document.write('<a class="dropdown-item" href="#">' + manufacturers[2] +'</a>');
document.write('<a class="dropdown-item" href="#">' + manufacturers[3] +'</a>');
document.write('<a class="dropdown-item" href="#">' + manufacturers[4] +'</a>');
document.write('<a class="dropdown-item" href="#">' + manufacturers[5] +'</a>');
document.write('</div>');
document.write('</div>');


*/


                // ARRAYS AND LOOP (Ch# 17-20)

//task 1
/*
var array2D = [[0,0],[0, 0]];

*/ 

//task 2
/*

var arr = new Array(4); 



for (var i = 0; i < arr.length; i++) { 
    arr[i] = new Array(4); 
} 
  
var h = 0; 
var a="012310122101";
  
// Loop to initilize 2D array elements. 
for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++) {
        
        arr[i][j] = a[h++];
        
        
        
    } 
    
    
    
    
} 


// Loop to display the elements of 2D array.  
for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 4; j++)    { 
        document.write(arr[i][j] + " "); 
    } 
    document.write("<br>"); 
}  


*/ 

//task 3
/*
for (var i = 1 ; i <= 10 ; i++){
    document.write(i + "<br>");


*/ 

//task 4
/*

var num = (+prompt("Enter a Number to show its multiplication table : "));
var length = (+prompt("Enter length of multiplication table : "));
document.write("<b>Multiplication Table of : " + num + "</b><br>");
document.write("<b>Length of Table : " + length + "</b><br> <br>");

for (var i = 1 ; i <= length ; i++){
    document.write( num + " X " + i + " = " + num*i + "<br>");
}


*/ 

//task 5
/*

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    
for (var i = 0 ; i < 5 ; i++){
    document.write( fruits[i] + "<br>");
}
document.write("<br><br>");

for (var i = 0 ; i < 5 ; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}


*/ 

//task 6
/*

var counting = (+prompt("Enter a number You Want to print counting :"))
document.write("<b>Counting : </b><br>");
for (var i = 1 ; i <= counting ; i++){
    document.write(i + ", ");
}
document.write("<br><br>");

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

var reverse = (+prompt("Enter a number You Want to print reverse counting :"))
document.write("<b>Reverse Counting : </b><br>");
for (var i = reverse ; i >= 1 ; i--){
    document.write(i + ", ");
}
document.write("<br><br>");

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

var even = (+prompt("Enter a number You Want to print Even numbers :"))
document.write("<b>Even Numbers : </b><br>");
for (var i = 0 ; i <= even ; i += 2){
    document.write(i + ", ");
}
document.write("<br><br>");

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

var odd = (+prompt("Enter a number You Want to print Odd numbers :"))
document.write("<b>Odd Numbers : </b><br>");
for (var i = 1 ; i <= odd ; i += 2){
    document.write(i + ", ");
}
document.write("<br><br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var series = (+prompt("Enter a number You Want to print Series :"))
document.write("<b>Series : </b><br>");
for (var i = 2 ; i <= series ; i += 2){
    document.write(i + "k, ");
}

*/ 

//task 7
/*
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am ?");
var inputItem = input.toLowerCase();

for (var i = 0 ; i <= arr.length ; i++ ){
    if(inputItem === arr[i]){
        document.write(arr[i] + " is <b>available</b> at index " + i + " in our bakery");
        break
    }
    else{
        document.write("We are sorry. " + input + " is <b>not available</b> in our bakery");
        break
        
    }
    
}

*/ 

//task 8
/*

var arr = [24, 53, 78, 91, 12];

document.write("<b>Array items:</b>  " + arr + " <br>");
var largestNumber = 0;

for (var i = 0 ; i < arr.length ; i++){
    if (largestNumber < arr[i]){
        largestNumber = arr[i];
    }
}
document.write("<b>The Largest Number is :</b> " + largestNumber);


*/ 

//task 9
/*
var arr = [24, 53, 78, 91, 12];

document.write("<b>Array items:</b>  " + arr + " <br>");
var smallestNumber = "" ;

for (var i = 0 ; i < arr.length ; i++){
    if (smallestNumber > arr[i] || smallestNumber.length <= 0){
        smallestNumber = arr[i];
    }
}
document.write("<b>The Smallest Number is :</b> " + smallestNumber + "<br><br>");
*/ 

//task 10
/*
for (var i = 5 ; i <= 100 ; i += 5 ){
    document.write( i * 1  + ", ");
}

*/ 
