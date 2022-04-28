import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hookes/useProductDetail';

const ProductsDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);

    return (
        <div>
            <h2>Product name: {product.name}</h2>
        </div>
    );
};

export default ProductsDetail;