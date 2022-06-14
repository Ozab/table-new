import React from 'react';

const Product = ({name, price, left, image}) => {
    return (
        <tr className='tr'>
           <td className='firstChildTr'>{name}</td>
           <td>{price}</td>
           <td>{left}</td>
           <td>
               <img src={image} alt={name} />
            </td>
        </tr>
    );
};

export default Product;