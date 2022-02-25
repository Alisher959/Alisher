let num1 = +prompt('sonni kiriting');
let num2 = +prompt('sonni kiriting');
different_1 = (5-num1);
different_2 = (5-num2);
if(different_1>0){
    different_1 = (1*(different_1));
}
else if(different_1<0){
    different_1 = ((-1)*(different_1));
}
if(different_2>0){
    different_2 = (1*(different_2));
}
else if(different_2<0){
    different_2 = ((-1)*(different_2));
}

if(different_1<different_2){
    alert(`${num1} yaqinroq`)
}
else if(different_1>different_2){
    alert(`${num2} yaqinroq`)
}
else if(different_1==different_2){
    alert(`ular teng`)
}