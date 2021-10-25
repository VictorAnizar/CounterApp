import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../datos/heroes";

describe('Probando 09-promesas.js', ()=>{
    test('getHeroeByIdAsync Debe retornar un heroe async', (done)=>{
        const id = 1;
        getHeroeByIdAsync(id).then(heroe=>{
            
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });
    test('Debe de devolver un reject porque el heroe no existe', (done)=>{
        const id = 10;
        getHeroeByIdAsync(id).catch(error=>{
            
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    })
})