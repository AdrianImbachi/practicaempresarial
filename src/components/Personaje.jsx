import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { unicaPersona } from "./Pos";

const Personaje = () => {

    const [persona, setPersona] = useState(null);
    const params = useParams()

    useEffect(() => {
        unicaPersona(params.fullUrl, setPersona)
    }, [])
    return (
        <>
            {persona != null ? (
                <h2>Nombre: {params.fullUrl}</h2>
            ) : ('No hay personas')} 
        </>

        
    )
}
export default Personaje;