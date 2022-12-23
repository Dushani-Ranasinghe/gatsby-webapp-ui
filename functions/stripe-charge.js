const stripe =require('stripe')('sk_test_51MI9UEJKckaNVBaaUrk1vZsZ7f7O8cQqNuapBJkbRArNBcuwXpBlBDvBzYdmSwEHpCP1UInxjw1q91zxHB826NJA00MJ9folbm')

exports.handler = async function(event){
   const {
    tokenId,
    email,
    name,
    description,
    amount
   }=JSON.parse(event.body)
   const customer = await stripe.customers.create({
    description:email,
    source:tokenId
   })

   await stripe.charges.create({
    customer: customer.id,
    amount,name,
    description,
    currency:'USD'
   })
}