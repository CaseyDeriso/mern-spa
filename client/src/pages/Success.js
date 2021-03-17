import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map(item => item._id);
      
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;
    
        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
        
      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <h1>Nothing But Success!</h1>
        <h2>
          Thanks For Your Monies!
        </h2>
        <h2>
          Your Home Page Is Safe
        </h2>
      </Jumbotron>
    </div>
  );
};

export default Success;