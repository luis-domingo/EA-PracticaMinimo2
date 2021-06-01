import {Router} from 'express';
import {add, show, update, remove} from '../controllers/watch.controller';

const user_router = Router();

user_router.route('/watch/add') //API Endpoint for Registering a user
    .post(add) // CREATE the user JSON object

user_router.route('/watch/')
    .get(show)

user_router.route('/watch/update')
    .put(update)

user_router.route('/watch/delete')
    .delete(remove)

export default user_router;