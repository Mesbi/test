//require("dotenv").config({path:'./.env.local'});
const Stripe = require ("stripe");
const products = require ('./products');


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

(async () => {
    for (const product of products) {
        const stripeProduct = await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency:product.currency,
                unit_amount_decimal:product.price,
            },
            images: [product.image],
        });
        console.log(stripeProduct.name, ':', stripeProduct.id);
    };
})();





