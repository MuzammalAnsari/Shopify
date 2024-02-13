import React from 'react'

const getAllProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()
}
