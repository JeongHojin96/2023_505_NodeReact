import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    p_code: "",
    p_name: "",
    p_price: 0,
    p_rem: "",
  });

  const fetchProducts = async () => {
    const response = await axios.get("/api/products");
    setProducts(response.data);
  };

  const createProduct = async () => {
    await axios.post("/api/products", newProduct);
    fetchProducts();
    setNewProduct({ p_code: "", p_name: "", p_price: 0, p_rem: "" });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.p_code}>
            Product Code: {product.p_code}, Name: {product.p_name}, Price:{" "}
            {product.p_price}
          </li>
        ))}
      </ul>
      <h2>Create New Product</h2>
      <div>
        <input
          type="text"
          placeholder="Product Code"
          value={newProduct.p_code}
          onChange={(e) =>
            setNewProduct({ ...newProduct, p_code: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Name"
          value={newProduct.p_name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, p_name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.p_price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, p_price: parseInt(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="Remarks"
          value={newProduct.p_rem}
          onChange={(e) =>
            setNewProduct({ ...newProduct, p_rem: e.target.value })
          }
        />
        <button onClick={createProduct}>Create</button>
      </div>
    </div>
  );
}

export default Product;
