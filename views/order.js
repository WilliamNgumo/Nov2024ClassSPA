import html from "html-literal";

export default () => html`<section id="order">
<form id="order" method="POST" action="https://sc-pizza-api.onrender.com/pizzas/form">
  <h2>Order a pizza</h2>
  <div>
    <label for="customer">Customer</label>
    <input
      type="text"
      name="customer"
      id="customer"
      placeholder="Enter Customer Name"
    />
  </div>
  <div>
    <label for="crust">Crust:</label>
    <select id="crust" name="crust">
      <option value="" hidden>Select a Crust</option>
      <option value="thin">Thin</option>
      <option value="chicago">Chicago</option>
      <option value="deep-dish">Deep Dish</option>
      <option value="hella-thick">Hella Thick</option>
    </select>`;