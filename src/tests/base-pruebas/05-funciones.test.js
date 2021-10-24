import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones.js', () => {
    test('Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        //ouede ser util para Comparar si los dos objetos tienen las 
        //mismas props
        expect(user).toEqual(userTest);

    });
    test('getUsuarioActivo debe de retornar un objeto', ()=>{
        const userTestActivo = {
            uid: 'ABC567',
            username: "Vic"
        };
        const userActivo = getUsuarioActivo(userTestActivo.username);
        expect(userActivo).toEqual(userTestActivo);

    })
})