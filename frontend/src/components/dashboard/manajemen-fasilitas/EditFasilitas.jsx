import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/api";

const EditFasilitas = () => {
  const { id } = useParams();
  const [facility, setFacility] = useState({});

  useEffect(() => {
    api
      .request({
        url: "/facilities/" + id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data);
        setFacility(res.data.payload);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ml-80 w-[100vh-320px] mt-3">
      <h2>{JSON.stringify(facility)}</h2>
    </div>
  );
};

export default EditFasilitas;
