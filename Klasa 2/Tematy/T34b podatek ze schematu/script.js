function podatek(cena, typ){
    kwota = 0;
    if(cena < 200){
        kwota = 0;
        return `Cena: ${cena} Typ: ${typ} Podatek: ${kwota}`
    }else{
        if(cena <= 1000){
            if(typ == "d"){
                kwota = cena * (0.15 - 0.05)
                return `Cena: ${cena} Typ: ${typ} Podatek: ${kwota}`
            } else{
                kwota = cena * 0.15
                return `Cena: ${cena} Typ: ${typ} Podatek: ${kwota}`
            }
        }else{
            if(typ == "d"){
                kwota = cena * (0.22 - 0.05)
                return `Cena: ${cena} Typ: ${typ} Podatek: ${kwota}`
            } else{
                kwota = cena * 0.22
                return `Cena: ${cena} Typ: ${typ} Podatek: ${kwota}`
            }
        }
    }
}

console.log(podatek(10000, "d"))