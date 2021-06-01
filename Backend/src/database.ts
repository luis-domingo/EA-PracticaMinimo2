//Database
import mongoose from 'mongoose';

export async function startConnection(){
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/practicaminimo2', {
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log('[ DATABASE RUNNING ]');
}

