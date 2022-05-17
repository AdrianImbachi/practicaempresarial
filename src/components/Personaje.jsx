import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { unicaPersona } from "./Pos";

const Personaje = () => {

    const [persona, setPersona] = useState(null);
    const params = useParams()

    useEffect(() => {
        unicaPersona(params.id, setPersona)
    }, [])
    return (
        <>
            {persona != null ? (
                <div>
                    <br/>
                    <h7>Id: {params.id}</h7><br/>
                    <p>Nombre: {persona.given}</p>
                    <p>Apellido: {persona.family}</p>
                </div>
                
            ) : ('No hay personas')} 
        </>

        
    )
}
export default Personaje;