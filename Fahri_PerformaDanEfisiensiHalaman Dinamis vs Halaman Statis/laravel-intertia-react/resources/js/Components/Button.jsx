import PropTypes from 'prop-types';

function Button(props) {
return (
        <button 
          onClick={props.onClick} 
          className={`rounded ${props.className}`}>
          {props.text}
      </button>
);
}

Button.propTypes = {
  onClick: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  onClick: "",
  className: ""
};

export default Button;