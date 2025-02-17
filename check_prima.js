function checkPrima(angka){
    let flag=0;
    for(let i=1;i<=angka;i++){
        if(angka%i===0){
            flag++
        }
    }
    if(flag===2){
        return("bilangan prima");
    }else{
        return("bukan bilangan prima");
    }
}
//bilangan prima adalah bilangan yang hanya memliki 2 faktor

console.log(checkPrima(1));
console.log(checkPrima(3));