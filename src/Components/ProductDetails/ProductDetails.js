import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import dbData from "./../../Database/db.json";
import PageNotFound from "../../Pages/PageNotFound";

function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id, 10));

  const [showDetails, setShowDetails] = useState(false);

  if (!product) {
    return <PageNotFound />;
  }

  return (
    <div style={styles.productDetails}>
      <nav style={styles.breadcrumbs}>
        <Link to="/">Home</Link> &gt;{" "}
        <Link to={`/category/${product.product_category}`}>
          {product.product_category}
        </Link>{" "}
        &gt; {product.product_name}
      </nav>
      <h2 style={styles.categoryName}>{product.product_category}</h2>
      <div
        style={{
          ...styles.productCard,
          ...(showDetails && styles.productCardHover),
        }}
      >
        <h3>{product.product_name}</h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          style={styles.detailsButton}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div>
            <img
              src={product.product_image}
              alt={product.product_name}
              style={styles.productImage}
            />
            <p style={styles.productPrice}>Price: ${product.product_price}</p>
            <p>{product.product_desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  breadcrumbs: {
    fontSize: "0.9rem",
    marginBottom: "10px",
  },
  detailsButton: {
    marginTop: "10px",
    padding: "8px 16px",
    background: "#f1356d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
  },

  productDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
  },
  categoryName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  productCard: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease-in-out",
    margin: "20px",
  },
  productCardHover: {
    transform: "scale(1.05)",
  },
  productImage: {
    maxWidth: "100%",
    height: "auto",
    marginTop: "20px",
    transition: "transform 0.2s ease-in-out",
  },
  productImageHover: {
    transform: "scale(1.1)",
  },
  productPrice: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default ProductDetails;
