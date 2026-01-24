/* arr */

/*
let a = 10
let b = 20 
let c = 30
console.log('a:',a,'b:',b,'c:',c)

let ages = [10,20,30]       //มี array 3 items
console.log('ages:',ages)
console.log('ages[1]:',ages[1]) 

//1. แทนที่ค่าข้อมูลใน array
ages = [15,25]
console.log('ages list:',ages)
//2. เพิ่มค่าข้อมูลใน array
ages.push(35)
console.log('ages after push:',ages)
//3. ลบค่าข้อมูลตัวสุดท้ายใน array
ages.pop()
console.log('ages after pop:',ages)
*/

/*
let ages = [25,30,35,40,45]
if(ages.includes(30)){      //ture
    console.log('Age 30 is found in the array')
}
*/

/*
let ages = [25,30,35,40,45]
console.log('Ages : ',ages)
let fruits = ['apple','banana','cherry']
console.log('Fruits : ',fruits)
fruits.push('mango')
console.log('Fruits after push : ',fruits)
console.log('First fruit : ',fruits.length)     //นับจำนวนข้อมูลใน array

for(let i=0;i<fruits.length;i++){       //วนลูปแสดงค่าข้อมูลใน array
    console.log(`Fruit at index ${i}:`,fruits[i])
}
*/

/*
let student = [{ 
    age: 30,
    name: 'John',
    grade: 'A'
},{  
    age: 25,
    name: 'Jane',
    grade: 'B'
}]
for(let i=0;i<student.length;i++){
    console.log('Student '+ (i+1) + ":")
    console.log(student[i])
    console.log('name:',student[i].name);
    console.log('age:',student[i].age);
    console.log('grade:',student[i].grade);
}
student.push({ 
    age: 28,
    name: 'Mike',
    grade: 'A'
});
console.log('Added new student:',student[student.length-1]);        //แสดงข้อมูลคนท้าย

student.pop();      //ลบข้อมูลคนท้าย
console.log('Removed last student. Current students:',student);
*/

//function

/*
score1 = 10
score2 = 80

function calculation_grade(score){
    if(score >= 80){
        grade = 'A'
    }else if(score >= 70){
        grade = 'B'
    }else if(score >= 60){
        grade = 'C'
    }else if(score >= 50){
        grade = 'D'
    }else{
        grade = 'F'
    }
    return grade
}
//เรียกฟังก์ชัน calculation_grade หาค่าเกรดจากคะแนนที่กำหนด
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('Score1:',score1,'Grade1:',grade1)
console.log('Score2:',score2,'Grade2:',grade2)
*/

/*
array
*/

/*
let scores = [90,80,70,60,50]

for(let i=0;i<scores.length;i++){
    console.log(`Score ${i+1}: ${scores[i]}`);
}   

scores = scores.map((s) => {        //map,filter
    return s - 10;
})

scores.forEach((s) => {
    console.log('Score:',s);        //console.log(`Score: ${s}`);
})
*/

/*
let scores = [90,80,70,60,50]

for(let i=0;i<scores.length;i++){
    console.log(scores[i]);
    //if(scores[i] >= 60){
    //    newScores.push(scores[i])
    //}
}

let newScores = scores.filter(function(score) {
    return score >= 70;
})

newScores.forEach((ns) => {
console.log('new Score:' + ns);
})
*/

// object functions

let students = [
    {name: 'John', age: 20, grade: 'A'},
    {name: 'Jane', age: 22, grade: 'B'},
    {name: 'Jim', age: 21, grade: 'C'}
]
console.log('Students:',students[0]);

let student = students.find((s) => {
    /*if(s.name === 'Jim'){
        return true;
    } else {
        return false;
    }
    */
   return s.name === 'Jane';
})

let dubblescoreStudents = students.map((s) => {
    s.age = s.age * 2;
    return s;
});

let highGradeStudents = students.filter((s) => {
    return s.grade === 'A';
});

console.log('Student ',student);
console.log('Dubble Score Students:',dubblescoreStudents);
console.log('High Grade Students:',highGradeStudents);