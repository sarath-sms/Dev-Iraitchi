import { addNewProduct } from "../controllers/productControllers";
import { addNewUser, userList } from "../controllers/userControllers";

const routes = (app) => {
    app.route('/products').post(addNewProduct);
    app.route('/users').post(addNewUser)
    app.route('/users').get(userList)
}

export default routes;