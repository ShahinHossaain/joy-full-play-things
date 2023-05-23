import SingleMyToys from "../SingleMyToys/SingleMyToys";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysModal from "../../MyToysModal/MyToysModal";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [toys, setToys] = useState(null);
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [updateModalInfo, setUpdateModalInfo] = useState(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetch(
      `https://joy-full-play-things-server.vercel.app/toys?userEmail=${email}&sort=1`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [updated]);
  return (
    <div>
      {isModalOpen && (
        <MyToysModal
          setIsmodalOpen={setIsmodalOpen}
          updateModalInfo={updateModalInfo}
          setUpdated={setUpdated}
        ></MyToysModal>
      )}
      {toys && (
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
      )}
    </div>
  );
};

export default MyToys;
