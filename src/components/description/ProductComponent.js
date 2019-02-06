import React from 'react';
import PropTypes from 'prop-types';

const ProductComponent = ({image, description}) =>{
    return (
        <div className="product-description">
            <img src={image} alt=""/>
            <p>{description}</p>
        </div>
    );
}

ProductComponent.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ProductComponent;