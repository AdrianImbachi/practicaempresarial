import React, {useState} from "react";
// import '../css/estilos.css';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from "../elementos/Formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from "./Input";


const Validacion = () => {

    const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
    const [nombre, cambiarNombre]= useState({campo: '', valido: null});
    const [password, cambiarPassword]= useState({campo: '', valido: null});
    const [paciente, cambiarPaciente]= useState({campo: '', valido: null});
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);


    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            usuario.valido === 'true' &&
            nombre.valido === 'true' &&
            paciente.valido === 'true' &&
            password.valido === 'true' &&
            terminos
        ){
            cambiarFormularioValido(true);
            cambiarUsuario({campo: '', valido: null});
            cambiarNombre({campo: '', valido: null});
            cambiarPaciente({campo: '', valido: null});
            cambiarPassword({campo: '', valido: null});
        }else{
            cambiarFormularioValido(false);
        }
    }
    function ingresar()  {
        window.location.href="./visualizar";
    }


    return(
        <main>
            <Formulario action="" onSubmit={onSubmit}>
                <Input
                    estado={usuario}
                    cambiarEstado={cambiarUsuario}
                    tipo="text"
                    label="Usuario"
                    placeholder="jose123"
                    name="usuario"
                    leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener números, letra y guión bajo. "
                    expresionRegular={expresiones.usuario}
                />
                {/* <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    label="Nombre"
                    placeholder="Pepito Pérez"
                    name="nombre"
                    leyendaError="El usuario  solo puede contener letras y espacios. "
                    expresionRegular={expresiones.nombre}
                /> */}
                
                <Input
                    estado={paciente}
                    cambiarEstado={cambiarPaciente}
                    tipo="text"
                    label="Id Paciente"
                    placeholder="123jdj4"
                    name="paciente"
                    leyendaError="El id del paciente solo debe contener letras y numeros. "
                    expresionRegular={expresiones.usuario}
                />

                <Input
                    estado=""
                    cambiarEstado=""
                    tipo="file"
                    label="Cargar Archivo Portable"
                    placeholder=""
                    name="cargarArchivo"
                    leyendaError="El id del paciente solo debe contener letras y numeros. "
                    expresionRegular=""
                />

                <Input
                    estado={password}
                    cambiarEstado={cambiarPassword}
                    tipo="password"
                    label="Clave"
                    placeholder="****"
                    name="contraseña"
                    leyendaError="La clave tiene que se de 4 a 12 digitos. "
                    expresionRegular={expresiones.password}
                />
                {/* <Input
                    estado={paciente}
                    cambiarEstado={cambiarPaciente}
                    tipo="date"
                    label="Fecha"
                    placeholder="123jdj4"
                    name="paciente"
                    leyendaError="El id del paciente solo debe contener letras y numeros. "
                    expresionRegular=""
                /> */}
                
                <ContenedorTerminos>
                    <Label>
                        <input 
                        type="checkbox" 
                        name="terminos" 
                        id="terminos" 
                        checked={terminos}
                        onChange={onChangeTerminos}
                    />
                        Acepto los términos y condiciones
                    </Label>
                </ContenedorTerminos>
                {formularioValido === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error: </b> Por favor rellene el formulario correctamente.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit" onClick={ingresar}>Ingresar</Boton>
                    {formularioValido === true && <MensajeExito>El formulario se envió exitosamente</MensajeExito>}
                </ContenedorBotonCentrado>

                
            </Formulario>
        </main>

    );
}



export default Validacion;