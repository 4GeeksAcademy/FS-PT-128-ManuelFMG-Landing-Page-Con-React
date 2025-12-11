import React from "react";

const Jumbotron = () => {
    return (
        <div class="bg-light py-5">
    <div class="container py-5">
        <h1 class="display-4 fw-bold">Bienvenidos a Centro Sushi</h1>
        <p class="lead mt-3 mb-4">
            Conoce nuestro gran surtido de sushi, elige entre una gran selección de bocados exquisitos.
        </p>
        <a class="btn btn-primary btn-lg" href="#">Entrega a Domicilio</a>
        <br/>
        <br/>
        <a class="btn btn-primary btn-lg" href="#">Recoger en Local</a>
    </div>
</div>
    );
};

export default Jumbotron;