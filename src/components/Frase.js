import React from 'react';
import PropTypes from 'prop-types';

const Frase = ({frase}) => {
    return (

            <div>
                <h1>{frase.quote}</h1>
                <p>- {frase.author} </p>
            </div>
        );
};


Frase.propTypes = {
    
};

export default Frase;