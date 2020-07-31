function lifeSupply(numPerMonth, age){
    let supply = 0;
    supply = numPerMonth * 12 * (100 - age);
    return supply;
}

lifeSupply(10, 26);
console.log(lifeSupply(10, 26));