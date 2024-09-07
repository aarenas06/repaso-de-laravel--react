import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
const View = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/user/" + id);
      console.log(result.data.result);
      setUser(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Detallado</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" container d-flex justify-content-center">
        <NavLink to={`/`} className="btn btn-primary mx-2  btn-sm">
          Atras
        </NavLink>
      </div>
    </div>
  );
};

export default View;
