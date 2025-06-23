import { addNewProduct } from "../controllers/productControllers";

const routes = (app) => {
    app.route('/products').post(addNewProduct);
}

export default routes;