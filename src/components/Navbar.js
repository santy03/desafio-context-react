import CartWidget from "./CartWidget";

const Navbar= () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="index.html"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="index.html" style={{color:"gold"}}>La Casa del Deporte </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Hombre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Mujer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Niño</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Niña</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tienda</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Zapatillas Hombre</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Zapatillas Mujer</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Zapatillas Niño</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Zapatillas Niña</a></li>
          </ul>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
 );
}

export default Navbar;