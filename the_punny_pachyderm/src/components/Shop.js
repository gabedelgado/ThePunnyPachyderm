import React from "react"
import '../App.css';
import {useParams} from "react-router-dom"

function Shop() {
  
  const {itemid} = useParams();
  
  return (
    <div>
        <h1>Test Shop Page {itemid ? itemid : ""}</h1>
    </div>
  );
}

export default Shop;
