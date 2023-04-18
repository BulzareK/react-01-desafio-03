import React from "react";

const ListadoColaborador = ({ colaboradores }) => {
  return (
    <div className="col-10 col-md-5 col-lg-8 mx-auto">
      <div className="card border border-dark">
        <div className="card-header bg-dark text-secondary">
          <h2 className="card-title bg-dark text-light">
            Listado de colaboradores
          </h2>
        </div>
        <div className="card-body bg-info">
          <ul>
            {colaboradores.map((colaborador) => (
              <li
                key={colaborador.id.toString()}
                className="bg-light bg-gradient mb-2 rounded p-1 fs-5 border border-secondary text-start"
              >
                <b className="d-flex justify-content-start">
                  Nombre de usuario:
                </b>{" "}
                {colaborador.nombre.toLowerCase()} <br /> <b>Email:</b>{" "}
                {colaborador.correo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListadoColaborador;
