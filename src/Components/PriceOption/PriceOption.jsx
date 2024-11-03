import PropTypes from "prop-types";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div>
            <h2></h2>
        </div>
    );
};


PriceOption.propTypes={
    option: PropTypes.object
}
export default PriceOption;