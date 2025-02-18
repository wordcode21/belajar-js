function cekHurufVokal(kata){
    let result={
        "a":0,
        "i":0,
        "u":0,
        "e":0,
        "o":0,
    }
    for(let i =0;i<kata.length;i++){
        if(kata[i]==="a"){
            result.a++;
        }else if(kata[i]==="i"){
            result.i++;
        }else if(kata[i]==="u"){
            result.u++;
        }else if(kata[i]==="i"){
            result.i++;
        }
    }
    return result;
}

console.log(cekHurufVokal("kata kata"))