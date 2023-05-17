
let transaction
let sales

sales = indomie - bread
transaction = console.log("Your transaction is " + indomie + " and  " + bread + " and a total of " + sales);
console.log(transaction);

let name = "Frog"

function SayHi(name) {
    console.log("Hello " + name);
}

SayHi(name);
SayHi ("Ephraim")
SayHi("Jonah")

let intomie = 150
let breaad = 100
function purchase(a, b) {
    if (intomie && breaad != 0) {
        stales = intomie - breaad
        intomie -= a
        breaad -= b
        console.log("You sales transaction is "+ stales);
    } else { 
        console.log("Your request seems to be wrong can you try again");
    }
}

purchase(100,5);
purchase(25, 90);
purchase(25, 10);
console.log("Available products are indomie " + intomie + " and bread " + breaad);


async function addSale(req, res) {
    mkt = req.body.quantity
    console.log(typeof mkt);

    // sales.push({
    //     ...req.body,
    //     id: (sales.length + 1).toString()
    // });
    
    // console.log(typeof req.body.quantity);
    
    const stock = await stockModel.findById(req.params.stockId);
    // res.json(stock).end();
 
    // Check if the requested quantity is available
    if (mkt > stock.quantity) {
      return res.status(400).json({ error: 'Requested quantity not available' });
    }

    // stock.quantity -= quantity
    // stock.save()

    try {
        await salesModel.create({
            name: req.body.name,
            type: req.body.type,
            quantity: req.body.quantity,
            price: req.body.price
        });
    } catch(e) {
        return  res.status(400).json({error: 'An errror occured'})
    }

    await stockModel.updateOne({_id: req.params.stockId}, {quantity: stock.quantity -= mkt});

    res.send("sale added").end();
}


// Another way to work out sales that should work check the conversion of object to number especially on quantity
async function addSale(req, res) {
    // Removes name, quantity, type and price from the body Object
    const {name, type, quantity, price}  = req.body
  
    const stock =  stockModel.findById(req.params.id)
  
    if (quantity < stock.quantity)
      return res.status(400).json({error: "Requested quantity not available"})
  
    try {
      await salesModel.create({
        name,
        type,
        quantity,
        price,
      })
    } catch (error) {
      return res.status(400).json({error: "An error occured"})
    }  
  
    await stockModel.updateOne({_id: req.params.id}, {quantity: stock.quantity -= quantity})
  
    res.send("Sales added").end()
  }
