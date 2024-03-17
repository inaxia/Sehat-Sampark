/* eslint-disable react/prop-types */
const Button = ({ title, className, onClick }) => {
    return (
        <button
            className={`px-5 py-2 rounded-full btn text-background active:btn-primary duration-500 ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;