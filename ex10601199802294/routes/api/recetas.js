var express = require ('express');
var router = express.Router();
var uuid = require ('uuid/v4');

var recetasCollection = [];

var recetasStruct = { 
    id:0,
    recetas:'',
    precio:'',
    tipo:'',
    observacion:'',
    estado:''

}

recetasCollection.push(
    Object.assign(
        {},
        recetasStruct,
        {
            id:uuid(),
            recetas: 'pildoras para dormir',
            precio : '20 lps',
            tipo: 'pildora',
            observacion: 'excelente',
            estado:'1'
        }


    )


);

router.get('/',(req,res,next)=>{
    //obtiene la collecion de personas
 res.status(200).json(personasCollection);


});// get
router.get('/:id',(req,res,next)=>{
    res.status(403).json({msg:"not implemented"});
});// get on by id
