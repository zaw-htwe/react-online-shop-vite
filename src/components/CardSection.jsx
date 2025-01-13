import React from "react";
import Cart from "./Cart";
import products from "../data/products";
import Container from "./Container";
import { Link } from "react-router-dom";
import carts from "../data/cart";

const CardSection = () => {
  

  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

        <div className="absolute bottom-0 left-0 w-full h-52">
          <Container>
            <div className="border-t border-black flex justify-end gap-10 py-3 mb-5">
              <div className="text-right">
                <p className="text-gray-500">Total</p>
                <p className="font-bold">123</p>
              </div>
              <div className="text-right">
              <p className="text-gray-500">Tax(10%)</p>
              <p className="font-bold">123</p>
              </div>
              <div className="text-right">
              <p className="text-gray-500">Net Total</p>
              <p className="text-2xl font-bold">123</p>
              </div>
              

            </div>
            <div className="text-end ">
            <Link className="border border-black px-4 py-2">
              Order Now
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CardSection;
