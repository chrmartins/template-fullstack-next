import userDelete from './userDelete';
import userFindAll from './userFindAll';
import userSave from './userSave';

export default class Service {
    static readonly users = {
        userFindAll,
        userSave,
        userDelete
    }
}