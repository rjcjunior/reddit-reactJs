import React from "react";
import PropTypes from 'prop-types';
import ButtonStyle from './style'

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired,
};

const Button = ({text, className, fn }) => {
    return (
        <ButtonStyle className={className} onClick={fn} type="button">
            {text}
        </ButtonStyle>
    );
};

export default Button;
