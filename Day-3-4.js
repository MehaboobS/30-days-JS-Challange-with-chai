let num = prompt("enter the number")
if (num > 0) console.log("positive num")
else if (num < 0) console.log("negative num")
else console.log("number is zero")

let age = prompt("enter the age of the person")
if (age >= 18) console.log("person is eligible to vote")
else console.log("person is not eligible to vote")
    
a = prompt("enter the first number")
b = prompt("enter the second number")
c = prompt("enter the third number")
if (a > b) {
    if (a > c) {
        console.log(`${a} is greatest number`)
    }
    else {
        console.log(`${c} is greatest number`)
    }
}
else {
    if (b > c) {
         console.log(`${b} is greatest number`)
    }
    else {
         console.log(`${c} is greatest number`)
    }
}

day = Number(prompt("enter the number between 1-7"))

switch (day) {
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("thursday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    case 7:
        console.log("sunday")
        break
    default:
        console.log("enter a valid number")
}

score = Number(prompt("enter the score"))

switch (true) {
    case (score > 80):
        console.log("Grade-A")
        break
    case (score > 60):
        console.log("Grade-B")
        break
    case (score > 40):
        console.log("Grade-C")
        break
    case (score > 20):
        console.log("Grade-D")
        break
    default:
        console.log("Grade-F")
}

num = Number(prompt("enter the number"))

if (num % 2 === 0) {
    console.log("even number")
}
else {
    console.log("odd number")
}

year = Number(prompt("enter the year"))
check=year%400===0 ?  year%100===0  : false
if (year % 4 === 0 || check) {
    console.log("leap year")
}
else {
    console.log("not leap year")
}

for (let i = 1; i <= 10; i++){
    console.log(i)
}

for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${i*5}`)
}



i=1
sum = 0
while (i <= 10) {
    sum += i
    i+=1
}
console.log(sum)


i = 10
while (i >= 1) {
    console.log(i)
    i-=1
}
i=1
do{
    console.log(i)
    i+=1
}while(i<=5)

fact = 1
num = Number(prompt("enter the number to find the factorial"))
i=1
do {
    fact = fact * i
    i += 1
} while (i <= num)
console.log(fact);

for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= i; j++){
       process.stdout.write(' * ')
    }
    console.log()
}

i = 0;
while (i <= 10) {
    i+=1
    if (i === 5) {
        continue
    }
    console.log(i)
    
}

i = 1;
while (i <= 10) {
    if (i === 7) break
    console.log(i)
}