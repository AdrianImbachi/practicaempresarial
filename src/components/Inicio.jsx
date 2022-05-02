import React, {useEffect, useState} from "react";
import { todasPersonas } from "./Pos";

const Inicio = ()=> {
    const [personas, setPersonas] = useState(null);

   useEffect(()=>{
        todasPersonas(setPersonas)
    },[]) 

    return(
        <>          
                        <table class="table table-dark table-striped table-hover table-bordered">
                            <thead>
                                <tr scope='col'>
                                    {/* <th scope="col">Id</th> */}
                                    <th>Id usuario</th>                                    
                                    <th>Nombre usuario</th>                                    
                                </tr>
                            </thead>
                            <tbody>                                
                                {personas != null ? (
                                     personas.map(persona => (
                                        <tr  scope ='row' key={persona.id}>
                                            <td><a href={`/persona/${persona.id}`}>{persona.resource.id}</a></td>
                                            <td><a href={`/persona/${persona.id}`}>{persona.resource.name.use}</a></td>
                                        </tr>
                                    ))
                                ) : ('no hay persona')};                                
                            </tbody>
                        </table>
        </>
    )
}
export default Inicio;