import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-center text-5xl font-bold">
        Features <span className="text-[#1eb123f9]">And</span> Services
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {features.map((feature) => (
          <div key={feature.id}>
            <div className="card p-3 card-side flex flex-col md:flex-row bg-base-100 shadow-xl">
              <motion.figure whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="flex-1">
                <img className="rounded" src={feature.img} alt="Movie" />
              </motion.figure>
              <div className="card-body flex-1">
                <h2 className="card-title text-2xl">{feature.title || <Skeleton />}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
