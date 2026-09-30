var gpa = +prompt("Enter Your GPA");

if(gpa >= 0 && gpa <= 4) {
    if(gpa >= 4) {
    console.log("A+")
} else if(gpa >= 3.85) {
    console.log("A")
} else if(gpa >= 3.70) {
    console.log("A-")
} else if(gpa >= 3.30) {
    console.log("B+")
} else if(gpa >= 3) {
    console.log("B")
} else if(gpa >= 2.70) {
    console.log("B-")
} else if(gpa >= 2.30) {
    console.log("C+")
} else if(gpa >= 2) {
    console.log("C")
} else if(gpa >= 1.70) {
    console.log("C_")
} else if(gpa >= 1.30) {
    console.log("D+")
} else if(gpa >= 1) {
    console.log("D")
} else if(gpa >= .70) {
    console.log("D_")
} else {
    console.log("F")
}
} else {
    console.log("invalid GPA")
}