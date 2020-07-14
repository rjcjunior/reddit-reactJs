import React from "react";
import PropTypes from 'prop-types';
import ButtonStyle from './style'

const Button = ({text, className, fn }) => {
    return (
        <ButtonStyle className={className} onClick={fn} type="button">
            {text}
        </ButtonStyle>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    fn: PropTypes.func.isRequired,
};

export default Button;
