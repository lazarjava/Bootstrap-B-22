var sid = prompt(" Enter the Student id");
var sname = prompt(" Enter the student name");
var pc = prompt("Enter the physically challeged Yes or No");
var m1 = parseInt(prompt("Enter the student mark m1"));
var m2 = parseInt(prompt("Enter the student mark m2"));
var m3 = parseInt(prompt("Enter the student mark m3"));
var m4 = parseInt(prompt("Enter the student mark m4"));
var m5 = parseInt(prompt("Enter the student mark m5"));

var total = m1 + m2 + m3 +m4 + m5;
var percentage =(total*100)/500.0;


document.write("Student sid ="+sid+"<br>");
document.write("Student name ="+sname+"<br>");
document.write("Student physically challeged ="+pc+"<br>");
document.write("Student total ="+total+"<br>");
document.write("Student percentage ="+percentage+"<br>")


if(percentage>=90)
    {
        document.write("Garde A")
    }
else if ((percentage>=80)&&(percentage<90))
{
    document.write("Garde B")
}
else if ((percentage >=70)&&(percentage<80))
{
    document.write("Garde C")
}
else if ((percentage >=60)&&(percentage<70))
{
    document.write("Garde D")
}
else if ((percentage >=50)&&(percentage<60))
{
    document.write("Garde E")
}
else 
{
    document.write("Grade F")
}





