
test('Esta es  mi primera prueba', ()=>{

    //Aqui se ejecuta la prueba
    const isActive = true;


    if(isActive){
        throw new Error('No esta activo')
    }

})