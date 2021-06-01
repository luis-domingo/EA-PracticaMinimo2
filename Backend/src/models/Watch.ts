import {Document, Schema, model} from 'mongoose';

const schema = new Schema({
    brand: String,
    color: String,
    material: String
});

interface IWatch extends Document{
    brand: String;
    color: String;
    material: String;
}

export default model<IWatch>('Watch', schema);
