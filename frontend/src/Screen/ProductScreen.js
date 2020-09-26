import React from "react";
import data from "../data";
import classes from "./ProductScreen.module.css";
import { Link } from "react-router-dom";

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
      <div className={classes.backToResult}>
        <Link to="/">Back to result</Link>
      </div>
      <div className={classes.detail}>
        <div className={classes.detailImage}>
          <img src={product.image} alt="product" ></img>
        </div>
        <div className={classes.detailInfo}>
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>
                {product.description}
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.detailAction}>
          <ul>
            <li>
              Price: {product.price}
            </li>
            <li>
              Status: {product.status}
            </li>
            <li>
              Qty: <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className={classes.buttonPrimary} >Add to Cart</button>
            </li>
          </ul>
        </div>
  
      </div>
  
    </div>
  }
  export default ProductScreen;