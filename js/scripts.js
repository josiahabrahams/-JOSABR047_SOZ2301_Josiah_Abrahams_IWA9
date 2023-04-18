const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)
//nested everything inside expensese meaning had to remove const and add , and :
const expenses = {
    food: 51.7501,
    transport:  10.2,

  
 tax : {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
},

 rent : {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
},
}
// You can change below however you want

  
 
const taxAsDecimal = parseFloat(expenses.tax[913]) / 100 ///fixed directory channel for tax : expenses.tax[913]

const startingAfterTax = salary * (1 - taxAsDecimal)

const type = `${size}-${lodging}`// interloped type

 /** 
  *  i fixed calling objects sytax, 
  *fixed calling syntax object rent,
  * and added const startingAfterTax to the balance equation*/
const balance = startingAfterTax - expenses.transport - expenses.food - expenses.rent[type]

const finalOutCome = balance.toFixed(2) //making new variable to make 2 decimal places

console.log(finalOutCome)
