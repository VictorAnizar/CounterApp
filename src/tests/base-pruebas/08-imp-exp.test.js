import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../datos/heroes'


describe('Probando 08-imp-exp.js', ()=>{
    test('Debe de retornar un heroe por id', ()=>{
        const id = 1;
        const heroe = getHeroeById(id);        

        const heroeData = heroes.find(h=>h.id === id);

        expect(heroe).toEqual(heroeData);
    });


    test('Debe de retornar undefined si heroe no existe', ()=>{
        const id = 10;
        const heroe = getHeroeById(id);        
        // const heroeData = heroes.find(h=>h.id === id);

        expect(heroe).toBe(undefined);
    });

    test('Debe de retornar los arreglos con los heroes de dc',()=>{
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        expect(heroe).toEqual(heroes.filter((heroe)=>heroe.owner===owner));
    });

    test('Debe de retornar un arreglo con los heroes de marvel', ()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes).toHaveLength(2);
    })

})