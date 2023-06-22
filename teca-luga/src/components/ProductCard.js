import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import Rating from "@/components/Rating";
import {useShoppingCart} from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart/core";

export default function ProductCard({ product, index }) {
    const {addItem} = useShoppingCart();
    
//Alarme para adicionar no carrinho
    function onAddToCart(event) {
        event.preventDefault();
        const id = toast.loading("Adding 1 item...");
        addItem(product);
        toast.success(`${product.name} added`, {id});
    }


    return(
        <Link
        href={`/products/${product.id}`}

            className="border-2 rounded-md group overflow-hidden"
        >
            <div className="relative w-full h-64" >
                <Image
                    priority={index === 0}
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="100%"
                    style={{
                    objectFit: "contain",
                    }}
                />
            </div>

            <div className="p-6 bg-blue-500">
                <p className="font-semibold text-lg">{product.name}</p>
            <Rating/>
                <div className="mt-4 flex items-center justify-between space-x-2">
                    <div>
                        <p className="text-gray-500"> Price </p>
                        <p className="text-lg font-semibold">{formatCurrencyString({
                            currency: product.currency,
                            value: product.price,
                        })}</p>
                    </div>
                    <button onClick={onAddToCart} className="border rounded-lg py-1 px-4"> Add to Cart </button>
                </div>
            </div>
        </Link>
    );
}

/* componente renderiza um cartão de produto com detalhes
como imagem, nome, classificação, preço e um botão
"Add to Cart" para adicionar o produto ao carrinho.*/