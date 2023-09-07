function euk(a,b){
    while(a !== b){
        if(a > b){
            a = a-b
        } else{
            b = b-a
        }
    }
    return a
}


console.log(euk(10,2))