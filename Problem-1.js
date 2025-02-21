function cashOut(money) {
    if (typeof money !== 'number' || money <= 0) {
        return "Invalid";
    }
    const cashOutCharge = money * 0.0175;
    
    return cashOutCharge;
}

console.log(cashOut(2000)); 
console.log(cashOut(55000));