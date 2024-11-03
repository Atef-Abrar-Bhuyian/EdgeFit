import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym facilities",
        "Free parking",
        "Locker room access",
        "Group fitness classes",
        "1 Personal training session per month",
      ],
    },
    {
      id: 2,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "Access to gym facilities",
        "Free parking",
        "Locker room access",
        "Group fitness classes",
        "5 Personal training sessions per month",
        "Access to spa and sauna",
      ],
    },
    {
      id: 3,
      name: "VIP Plan",
      price: 149.99,
      features: [
        "All features of the Premium Plan",
        "Unlimited personal training sessions",
        "Dedicated locker",
        "Free gym merchandise",
        "Priority booking for classes and facilities",
        "Free guest passes",
      ],
    },
  ];

  return <div className="text-center mt-12 w-11/12 mx-auto">
    <h2 className="text-5xl font-bold text-white">Best Price in the Town</h2>
    <div className="md:grid grid-cols-3 gap-6">
    {
        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
    }
    </div>
  </div>;
};

export default PriceOptions;
