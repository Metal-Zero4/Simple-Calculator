//function declaration
function hello(){
    var userName=prompt("Enter your name: ");
    console.log("Hello " +userName);
}
//hello();

//function expression
/*let traveling = function(place){
    return "traveling to " +place;
}*/

//arrow function
let traveling = (place) => "Traveling to " + place;
let travel= traveling("Italy");
let travel2= traveling("Mexico");
document.write(travel);
document.write(travel2);

var pr = prompt("Enter Product Name: ")
var q=prompt("Enter the Quantity: ")
var p=prompt("Enter the price: ")

function taxCalculation(product,quantity,price,taxes){
    var subtotal=quantity*price;
    var total=(subtotal*taxes)+subtotal;
    document.write(`
        <div>
            <h1>Amazon Online Store</h1>
            <p>Tijuana, Mexico, 25555</p>
            <p>Quantity -- Description -- Price</p>
            <p>${quantity} ${product} ${price}</p>
            <p>---------------------subtotal= ${subtotal}</p>
            <p>------------------------taxes= ${subtotal*taxes}</p>
            <p>------------------------total= ${total}</p>
        </div>
    `)
}
taxCalculation("Laptop",2,1000,0.16)
taxCalculation(pr,q,p,0.16)