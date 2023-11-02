import React, { useState ,useEffect } from "react";

let Formulario = (props) => {

    let [nombre, setNombre] = useState("")
    let [dni, setDni] = useState(0)
    let [ciudad, setCiudad] = useState("")
    let [error, setError] = useState("");

    useEffect(() => {
        setError("")
    }, [nombre, dni, ciudad])

    let manejadorSubmit = e => {
        e.preventDefault()

        if ([nombre, dni, ciudad].includes("")) {
            console.log("Faltan completar campos")
            setError("Faltan completar campos");
        }
        else if (nombre.trim().length < 3) {
            console.log("Nombre no puede ser menor a 3 caracteres")
            setError("Nombre no puede ser menor a 3 caracteres");
        }
        else if (!/^\d+$/.test(dni)) {
            console.log("DNI DEBE CONTENER SOLO NUMEROS");
            setError("DNI DEBE COTENER SOLO NUMEROS ")
        } else if (dni.trim().length < 6) {
            console.log("DNI DEBE TENER AL MENOS 6 CARACTERES");
            setError("Dni debe tener x lo menos 6 caracteres ")
        }
        else if (ciudad.trim().length < 5) {
            console.log("ciudad no puede ser menor a 5 caracteres")
            setError("Ciudad debe tener 5 caracteres como minimo")
        }
        else {
            setNombre(nombre)
            setDni(dni)
            setCiudad(ciudad)
            console.log("los datos fueron enviados correctamente")
            
            props.onSubmit({ nombre, dni, ciudad });

            
        }
    }

    return (
        <>

            <form onSubmit={manejadorSubmit}>

                <label htmlFor="">Nombre: </label>
                <input
                    type="text"
                    placeholder="Nombre Completo"
                    id="nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />

                <label htmlFor="">DNI: </label>
                <input
                    type="number"
                    placeholder="Numero DNI"
                    id="dni"
                    value={dni}
                    onChange={e => setDni(e.target.value)}
                />

                <label htmlFor="">Ciudad</label>
                <input
                    type="text"
                    placeholder="Ciudad residencia"
                    id="ciudad"
                    value={ciudad}
                    onChange={e => setCiudad(e.target.value)}
                />


                {error && <p style={{ color: "red" }}>{error}</p>}

                <input className="btn"
                    type="submit"
                    value="Enviar formulario"
                />

            </form>
        </>

    )
}

export default Formulario