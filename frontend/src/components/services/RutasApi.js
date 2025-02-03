// Definicion de las rutas de la api
import AxiosApi from './AxiosApi';

const RutasApi = {
    // obtener la lista de cursos
    getCursos: () => {
        return AxiosApi.get('/cursos');
    },
    // obtener un curso por id
    getCurso: (id) => {
        return AxiosApi.get(`/cursos/${id}`);
    },
    // obtener la lista de docentes
    getDocentes: () => {
        return AxiosApi.get('/docentes');
    },
    // obtener un docente por id
    getDocente: (id) => {
        return AxiosApi.get(`/docentes/${id}`);
    }
}

export default RutasApi;


