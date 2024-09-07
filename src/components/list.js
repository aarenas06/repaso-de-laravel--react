import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const List = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/user");
      setUserData(result.data.result);
    } catch (error) {
      console.log("something wrong");
    }
  };

  const handleDelete = async (id) => {
    console.log("aqui pasa el id", id);
    await axios.delete(`http://127.0.0.1:8000/api/Delete/${id}`);
    // alert("ya se elimino");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => {
            return (
              <tr key={i}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <NavLink
                    to={`/view/${user.id}`}
                    className="btn btn-success mx-2  btn-sm"
                  >
                    Detalle
                  </NavLink>
                  <NavLink
                    to={`/edit/${user.id}`}
                    className="btn btn-info mx-2  btn-sm"
                  >
                    Editar
                  </NavLink>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default List;
