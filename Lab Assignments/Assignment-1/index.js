let mytext="This is my first assignment of MAD";
let text="   BSE-6    ";
//length
let length=mytext.length;
console.log(length);
//slice
let slice=mytext.slice(4,6)
console.log(slice);
//substring
let substring=mytext.substring(13,)
console.log(substring);
//substr
let substr=mytext.substr(4,9)
console.log(substr);
//replace
let replace=mytext.replace("MAD","Mobile App Development")
console.log(replace);
//replaceAll
let replaceall=mytext.replaceAll("my"," my first practice and ")
console.log(replaceall);
//touppercase
let uppercase=mytext.toUpperCase()
console.log(uppercase)
//tolowercase
let lowercase=mytext.toLowerCase()
console.log(lowercase)
//concat
let cancat=mytext.concat(" ",text);
console.log(cancat);
//trim
let trim=text.trim();
console.log(trim);
//trimstart
let trimstart=text.trimStart();
console.log(trimstart);
//trimend
let trimEnd=text.trimEnd();
console.log(trimEnd);
//padded start
let padded=mytext.padStart(4,"14");
console.log(padded);
//padded end
let padded_end=mytext.padEnd(4,"x");
console.log(padded_end);
//charat
let char=mytext.charAt(6);
console.log(char);
//char code at
let charat = mytext.charCodeAt(3);
console.log(charat);
//split
let split=mytext.split(" ");
console.log(split);