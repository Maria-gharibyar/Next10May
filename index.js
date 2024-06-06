

function withdraw(person,amountOfMoney){
        if(amountOfMoney > person.blance){
            console.log('withdrawal cannot be processed due to insufficient funds.')
        }else if(amountOfMoney<=person.blance){
            let remain=person.blance-amountOfMoney;
            console.log(`The Remaining Money is: ${remain}`);
            person.blance=remain;
            return remain
            
        }else{
            console.log('You do not have enough Money');
        }

}

let person={
    blance:2000
}
let y=withdraw(person,200);
console.log(`Returned value: ${y}`); 
console.log(`Updated balance: ${person.blance}`); 
