import React from "react";

const Card = () => {

    const cards = [
        {
            title: "Nigiri de Salmón",
            image: "https://sushidaily.com/media/aril1w1v/nigiri-salmon.jpg?width=800&quality=80&format=webp",
            button: "Nigiris",
            text: "El sushi nigiri de salmón es un verdadero clásico. Empezamos con nuestro característico arroz para sushi, el cual se exprime suavemente y se prensa a mano hasta formar una bola. A continuación, tomamos un cuchillo afilado y cortamos una lámina de salmón para colocarla encima, y ya está. Lo demás lo decides tú. Añade un poco de jengibre encurtido, una pizca de wasabi y una gota de salsa de soja para integrarlo todo."
            
        },
        {
            title: "Maki Rolls",
            image: "https://sushidaily.com/media/jh4fsljn/veggie-roll-min.jpg?width=800&quality=80&format=webp",
            button: "Makis",
            text: "En lo que respecta a nuestros makis de verduras, no hacemos concesiones. La misma atención al detalle que prestamos al abastecernos de pescado la prestamos también a nuestras verduras. ¿Cómo son nuestros makis vegetarianos? Se trata de un roll invertido y tomamos nuestro arroz característico, pepino fresco, aguacate y zanahoria, y lo aderezamos con semillas de sésamo tostadas para crear un roll elaborado a la perfección."
        },
        {
            title: "Gyozas de Pollo",
            image: "https://sushidaily.com/media/2hyhodev/shrimp-gyoza.jpg?width=800&quality=80&format=webp",
            button: "Gyozas",
            text: "Nuestras gyozas de pollo están listas para llevar. Bocados de deliciosa carne picada de pollo, col, jengibre, ajo y tamari elaborados por nuestros artesanos expertos en sushi para que las calientes en casa."
        },
        {
            title: "Surtido",
            image: "https://sushidaily.com/media/wt1l5cv2/combo-one.jpg?width=800&quality=80&format=webp",
            button: "Surtidos",
            text: "Nuestro menú de sushi Surtido uno es una bandeja de sushi mixta con 10 piezas de nuestro sushi hecho a mano por nuestros artesanos expertos. Este combo combina 2 california rolls crujientes, 3 makis de salmón, 3 makis de pepino y 2 nigiris de salmón."
        }
    ];

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">

                {cards.map((item, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 text-center">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.text}</p>

                                
                                <div className="mt-auto">
                                    <button className="btn btn-primary">
                                        {item.button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Card;
