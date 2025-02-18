function nilaiMinMax(arrayAngka){
    let min = arrayAngka[0];
    let max = arrayAngka[0];
    for(let i =0;i<arrayAngka.length;i++){
        if(max<arrayAngka[i]){
            max = arrayAngka[i];
        }
        if(min>arrayAngka[i]){
            min=arrayAngka[i];
        }
    }
    return {"max":max,"min":min};
}
let array = [1,2,3,4]
console.log(nilaiMinMax(array))