import Watch from '../models/Watch';
import {request, Request, Response} from 'express'; 

//Se intenta hacer un CRUD de Relojes

//Create
export async function add(req: Request, res: Response){
    
    const {brand, color, material} = req.body;
    console.log("new user creation petition for user ", brand);
    console.log("searching...");
    //comprobar que el usuario exista
    const usr_compare = await Watch.findOne({'brand': brand});
    //si no existe
    if(!usr_compare){
        const new_watch = new Watch({
            brand: brand,
            color: color,
            material: material
        });
        await new_watch.save();
        res.status(201);
        return res.json(new_watch.toJSON());
    }else{
        return res.status(400);
    }
}

//Read
export async function show(req: Request, res: Response){

    let watches = await Watch.find();
    watches.forEach((watch)=>watch.populate('brand').populate('color').populate('material'));
    console.log("watches returned");
    res.status(201).json(watches);

}

//Update
export async function update(req: Request, res: Response){

    const{brand,color,material} = req.body;
    console.log("Se quiere modificar a ",brand);
    
    //Encontramos al reloj existente segun la brand
    const watch_compare = await Watch.findOne({'brand': brand});
    console.log(watch_compare);

    //Cuando encontramos ese reloj lo actualizamos
    await Watch.findOneAndUpdate(
        { brand: brand },
        {
            brand: brand,
            color: color,
            material: material
        },
        { new: true}
    )

    const updatedWatch = new Watch({
        brand: brand,
        color: color,
        material: material
    });

    res.status(201);
    return res.json(updatedWatch.toJSON());
}

//Delete
export async function remove(req: Request, res: Response){

    const{brand}=req.body;
    const check = await Watch.findOne({'brand':brand});

    if(!check){
        return res.status(404).json({
            message:'this watch is not in the database',
        });
    }
    else{
        await Watch.deleteOne({'brand':brand});
        return res.status(201).json(check.toJSON());
    }


}













