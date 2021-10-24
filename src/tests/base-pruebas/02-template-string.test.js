import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', ()=>{
  test('getSaludo debe de retornar hola victor', ()=>{
    //declaracion
    const nombre = 'Victor';
    //Aplicamos el estimulo
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola '+nombre);
  })  

  //get saludo debe de retornar "Hola Carlangas" si no hay arg en el nombre
  test('Verificando si regresa Hola carlangas', ()=>{
      const saludo = getSaludo();
      expect(saludo).toBe('Hola Carlangas');
  })
})