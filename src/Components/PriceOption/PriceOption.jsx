import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-primary rounded-xl p-4 text-white mt-12 flex flex-col">
            <h2>
            <span className="text-7xl font-bold">{price}</span>
            <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-4xl my-8">{name}</h4>
            <div className="pl-6 flex-grow">
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className="btn mt-12 bg-white text-black border-none font-bold w-full p-2 hover:text-white">Buy Now</button>
        </div>
    );
};


PriceOption.propTypes={
    option: PropTypes.object
}
export default PriceOption;