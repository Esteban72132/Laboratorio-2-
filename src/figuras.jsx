import React, { useState } from "react";

function Figuras() {

    // Variables para el triangulo
    const [baseTriangulo, setBaseTriangulo] = useState("");
    const [alturaTriangulo, setAlturaTriangulo] = useState("");
    const [resultadoTriangulo, setResultadoTriangulo] = useState("");

    // Variables para el rectangulo
    const [baseRectangulo, setBaseRectangulo] = useState("");
    const [alturaRectangulo, setAlturaRectangulo] = useState("");
    const [resultadoRectangulo, setResultadoRectangulo] = useState("");

    // Variables para el cuadrado
    const [lado1Cuadrado, setLado1Cuadrado] = useState("");
    const [lado2Cuadrado, setLado2Cuadrado] = useState("");
    const [resultadoCuadrado, setResultadoCuadrado] = useState("");


    // Funcion para calcular triangulo
    const calcularTriangulo = () => {

        const base = parseFloat(baseTriangulo);
        const altura = parseFloat(alturaTriangulo);

        if (base > 0 && altura > 0) {
            const area = (base * altura) / 2;
            setResultadoTriangulo(area);
        } else {
            setResultadoTriangulo("Ingrese valores validos");
        }
    };


    // Funcion para calcular rectangulo
    const calcularRectangulo = () => {

        const base = parseFloat(baseRectangulo);
        const altura = parseFloat(alturaRectangulo);

        if (base > 0 && altura > 0) {
            const area = base * altura;
            setResultadoRectangulo(area);
        } else {
            setResultadoRectangulo("Ingrese valores validos");
        }
    };


    // Funcion para calcular cuadrado
    const calcularCuadrado = () => {

        const lado1 = parseFloat(lado1Cuadrado);
        const lado2 = parseFloat(lado2Cuadrado);

        if (lado1 > 0 && lado2 > 0) {
            const area = lado1 * lado2;
            setResultadoCuadrado(area);
        } else {
            setResultadoCuadrado("Ingrese valores validos");
        }
    };


    return (

        <div className="container py-5">

            {/* Titulo */}

            <div className="text-center mb-5">

                <h1 className="titulo">
                    Área de Figuras Geométricas
                </h1>

                <p className="subtitulo">
                    Calcula el área de diferentes figuras de manera sencilla
                </p>

            </div>


            <div className="row g-4">


                {/* TRIANGULO */}

                <div className="col-md-4">

                    <div className="card figura-card h-100">

                        <div className="card-body">

                            <div className="icono">
                                △
                            </div>

                            <h2 className="card-title">
                                Triángulo
                            </h2>

                            <p className="text-muted">
                                Área = (Base × Altura) / 2
                            </p>


                            <div className="mb-3">

                                <label className="form-label">
                                    Base
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Digite la base"
                                    value={baseTriangulo}
                                    onChange={(e) =>
                                        setBaseTriangulo(e.target.value)
                                    }
                                />

                            </div>


                            <div className="mb-3">

                                <label className="form-label">
                                    Altura
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Digite la altura"
                                    value={alturaTriangulo}
                                    onChange={(e) =>
                                        setAlturaTriangulo(e.target.value)
                                    }
                                />

                            </div>


                            <button
                                className="btn btn-primary w-100"
                                onClick={calcularTriangulo}
                            >
                                Calcular área
                            </button>


                            <div className="resultado mt-3">

                                Área:

                                <strong>
                                    {resultadoTriangulo}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>


                {/* RECTANGULO */}

                <div className="col-md-4">

                    <div className="card figura-card h-100">

                        <div className="card-body">

                            <div className="icono">
                                ▭
                            </div>

                            <h2 className="card-title">
                                Rectángulo
                            </h2>

                            <p className="text-muted">
                                Área = Base × Altura
                            </p>


                            <div className="mb-3">

                                <label className="form-label">
                                    Base
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Digite la base"
                                    value={baseRectangulo}
                                    onChange={(e) =>
                                        setBaseRectangulo(e.target.value)
                                    }
                                />

                            </div>


                            <div className="mb-3">

                                <label className="form-label">
                                    Altura
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Digite la altura"
                                    value={alturaRectangulo}
                                    onChange={(e) =>
                                        setAlturaRectangulo(e.target.value)
                                    }
                                />

                            </div>


                            <button
                                className="btn btn-success w-100"
                                onClick={calcularRectangulo}
                            >
                                Calcular área
                            </button>


                            <div className="resultado mt-3">

                                Área:

                                <strong>
                                    {resultadoRectangulo}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>


                {/* CUADRADO */}

                <div className="col-md-4">

                    <div className="card figura-card h-100">

                        <div className="card-body">

                            <div className="icono">
                                □
                            </div>

                            <h2 className="card-title">
                                Cuadrado
                            </h2>

                            <p className="text-muted">
                                Área = Lado × Lado
                            </p>


                            <div className="mb-3">

                                <label className="form-label">
                                    Lado 1
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Digite el lado"
                                    value={lado1Cuadrado}
                                    onChange={(e) =>
                                        setLado1Cuadrado(e.target.value)
                                    }
                                />

                            </div>


                            <div className="mb-3">

                                <label className="form-label">
                                    Lado 2
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Digite el lado"
                                    value={lado2Cuadrado}
                                    onChange={(e) =>
                                        setLado2Cuadrado(e.target.value)
                                    }
                                />

                            </div>


                            <button
                                className="btn btn-warning w-100"
                                onClick={calcularCuadrado}
                            >
                                Calcular área
                            </button>


                            <div className="resultado mt-3">

                                Área:

                                <strong>
                                    {resultadoCuadrado}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <footer className="text-center mt-5">

                <p>
                    Proyecto realizado con React, Hooks y Bootstrap
                </p>

            </footer>

        </div>
    );
}

export default Figuras;