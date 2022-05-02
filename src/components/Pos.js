// https://mauriciogc.medium.com/react-haciendo-peticiones-con-axios-y-hooks-27029dc36299
import axios from 'axios';

const todasPersonas = async (state) => {
    // const peticion = await axios.get(`json/postres.json`);
    // const peticion = await axios.get(`https://rickandmortyapi.com/api/character`);
    // const peticion = await axios.get(`https://r3.smarthealthit.org/Patient/mdc-0001`);
    const peticion = await axios.get('https://r3.smarthealthit.org/Patient/_search?_format=json');
    // state(peticion.data.entry);
    state(peticion.data.entry);
    console.log(peticion);
}
const unicaPersona = async (entry, state) => {
    // const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const peticion = await axios.get(`https://r3.smarthealthit.org/Patient/_search?_format=json?=${entry}`);
    state(peticion.data.entry.resource);
    console.log(peticion)
}

export {
    todasPersonas,
    unicaPersona
}