import SingleMyToys from "../SingleMyToys/SingleMyToys";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysModal from "../../MyToysModal/MyToysModal";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [toys, setToys] = useState(null);
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [updateModalInfo, setUpdateModalInfo] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [sortMethod, setSortMethod] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value, sortMethod);
    if (event.target.value === "ascending") setSortMethod("asc");
    else setSortMethod("desc");
  };
  useEffect(() => {
    fetch(
      `https://joy-full-play-things-server.vercel.app/toys?userEmail=${email}&sort=${sortMethod}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [updated, sortMethod]);
  return (
    <div>
      <Helmet>
        <title>Joy Full Play Things | My Toys</title>
      </Helmet>
      {isModalOpen && (
        <MyToysModal
          setIsmodalOpen={setIsmodalOpen}
          updateModalInfo={updateModalInfo}
          setUpdated={setUpdated}
        ></MyToysModal>
      )}
      {toys && (
        <div className="">
          <div className="flex justify-center mt-5 mb-16">
            <select
              className="select select-info  w-full max-w-xs bg-primary text-secondary"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option disabled value="">
                Select language
              </option>
              <option value="ascending">Sorting By Ascending Order</option>
              <option value="descending">Sorting By Descending Order</option>
            </select>
          </div>

          <div className="flex flex-col gap-5 my-12">
            {toys.map((toy, index) => (
              <SingleMyToys
                key={index}
                toy={toy}
                setToys={setToys}
                toys={toys}
                setIsmodalOpen={setIsmodalOpen}
                setUpdateModalInfo={setUpdateModalInfo}
              ></SingleMyToys>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
