import { useEffect, useState } from "react";
import CommonAllCategory from "../CommonAllCategory/CommonAllCategory";

const ScienceCategoryToys = () => {
  const [toys, setToys] = useState(null);
  useEffect(() => {
    fetch(
      "https://joy-full-play-things-server.vercel.app/toys?subCategory=Science%20Toys&sort=1"
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-12">
        {toys &&
          toys.map((toy, index) => (
            <CommonAllCategory key={index} toy={toy}></CommonAllCategory>
          ))}
      </div>
    </div>
  );
};

export default ScienceCategoryToys;
