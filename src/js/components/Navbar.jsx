import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">Centro Sushi <i class="fa-solid fa-utensils"></i></a>
        <a class="navbar-brand" href="#">Carta</a>
        <a class="navbar-brand" href="#">Nuestras Tiendas</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Iniciar Sesión <i class="fa-regular fa-user"></i> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cesta <i class="fa-solid fa-bag-shopping"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    );
};

export default Navbar;
