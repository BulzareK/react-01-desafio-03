import React from "react";

const BuscarColaborador = ({ setBusqueda }) => {
  // onChange busqueda
  const handleOnChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <nav className="navbar bg-warning text-dark mb-5 p-2">
      <h1>Buscar colaboradores</h1>
      <input
        className="form-control w-25"
        type="text"
        placeholder="Buscar colaborador"
        onChange={handleOnChangeBusqueda}
        list="datalistOptions"
      />
    </nav>
  );
};

export default BuscarColaborador;
