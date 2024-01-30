import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ title }) => {
    return (
        <button>
            {title}
        </button>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired
};

export default Button;