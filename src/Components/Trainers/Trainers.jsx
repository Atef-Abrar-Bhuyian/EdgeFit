import axios from "axios";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import Trainer from "../Trainer/Trainer";

const Trainers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => setUsers(data));

    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      setUsers(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto">
        <h2 className="text-5xl text-center font-bold text-white mb-12">Our Trainers Details</h2>
      {loading && (
        <Bars
          height="80"
          width="80"
          color="white"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}{" "}
      <div className="grid md:grid-cols-2 gap-6 ">
        {users.map((user) => (
          <Trainer key={user.id} user={user}></Trainer>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
