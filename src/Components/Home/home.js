import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import useFetch from "./useFetch";
import "./HomeStyle.css";

function Home() {
  const {
    data: products,
    loading,
    error,
    refetch,
  } = useFetch("http://localhost:8000/products");

  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProductData(products);
  }, [products]);

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedProductData = productData.filter(
          (product) => product.id !== id
        );
        setProductData(updatedProductData);
        alert('Deleted Successfully');
        refetch();
      } else {
        console.error("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return error ? (
      <div className="error-message">{error}</div>
    ) : (
      <div className="error-message">{error}</div>
    );
  }

  const groupProductsByCategory = () => {
    const groupedProducts = {};

    const filteredProducts = productData.filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredProducts.forEach((product) => {
      if (!groupedProducts[product.product_category]) {
        groupedProducts[product.product_category] = [];
      }
      groupedProducts[product.product_category].push(product);
    });

    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory();

  return (
    <div>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="product-list">
            {categoryProducts.map((product) => (
              <div key={product.product_id} className="product-card">
                <div className="card">
                  <h3>{product.product_name}</h3>
                  <p>{product.product_desc}</p>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

/*
import React from "react";
import Spinner from "./Spinner";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import "./HomeStyle.css"; // Import your custom CSS file

function Home() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("http://localhost:3000/products");

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return error ? (
      <div className="error-message">{error}</div>
    ) : (
      <div className="error-message">{error}</div>
    );
  }

  const groupProductsByCategory = () => {
    const groupedProducts = {};

    products.forEach((product) => {
      if (!groupedProducts[product.product_category]) {
        groupedProducts[product.product_category] = [];
      }
      groupedProducts[product.product_category].push(product);
    });

    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory();

  return (
    <div>
      <h1>Products</h1>
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="product-list">
            {categoryProducts.map((product) => (
              <Link
                key={product.product_id}
                to={`/product/${product.product_id}`}
                className="product-card"
              >
                <div className="card">
                  <h3>{product.product_name}</h3>
                  <p>{product.product_desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

/*if (data === "first") {
    return (
      <div>
        <article> Hello from the other side</article>
        <img
          src={logo}
          alt="Logo here"
          style={{ width: 100, height: 100 }}
        ></img>
      </div>
    );
  } else if (data == "second") {
    return (
      <div>
        <h1>Hossam Hatem Ragap</h1>
        <p>Welcome to our paragraph</p>
      </div>
    );
*/
