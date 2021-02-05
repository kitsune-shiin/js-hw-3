console.log('Задание 1.');

let i = 1;
while(i <= 50) {
   console.log(i);
   i++;
}
i = 35;
while(i >= 8) {
    console.log(i);
    i--;
}
document.write('Задание 2 <br/>');

i = 89;
while(i >= 11) {
    document.write(i, '<br/>');
    i--;
}

document.write('Задание 3 <br/>');

 let sum = 0;
 for(i = 0; i <= 100; i++) {
     sum += i;  
 }
document.write(sum, '<br/>')

document.write('Задание 4 <br/>');

i = 1;
let sum2 = 0;
for(; i <=5; i++) {
    sum2 += i + i; 
    document.write(sum2, '<br/>')
}
  
document.write('Задание 5 <br/>');

for(i = 8; i <= 56; i++) {
    if(i % 2 != 0) continue;
    document.write(i, '<br/>');
}

document.write('Задание 6 <br/>');

for (i = 1; i <= 10; i++)
{ document.write(' . . . <br/>')
    for (j = 1; j <= 10; j++)
    {
        document.writeln(i + "x" + j + "=" + (i*j) + '<br/>');
    }
}

document.write('Задание 7 <br/>');

let num = 1000;
while(num > 50) {
	num = num / 2;
}
document.write(num, '<br/>');

for(num = 1000, i = 0; num > 50; num = num / 2, i++);
document.write(num, i);
