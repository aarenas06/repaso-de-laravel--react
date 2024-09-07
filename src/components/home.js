import React from "react";
import List from "./list";

const Home = () => {
  return (
    <div className="container">
      <h2 className="w-100 d-flex ">NAV</h2>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              {" "}
              <from>
                <label for="exampleInputEmail1" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Nombre"
                  placeholder="Digite su Email"
                ></input>
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  placeholder="Digite su Email"
                ></input>{" "}
                <br />
                <button className="btn btn-warning btn-sm">Registrar</button>
              </from>
            </div>
            <div className="col-8">
              <h2 className="w-100 d-flex justinfy-content-center">
                Registros
              </h2>
              <List/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
