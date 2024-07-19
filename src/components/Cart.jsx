import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price} DH</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
