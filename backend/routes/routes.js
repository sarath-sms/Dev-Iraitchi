import { addNewProduct } from "../controllers/productControllers";
import { addNewUser, checkMobNo, userList } from "../controllers/userControllers";

const routes = (app) => {
    // app.route('/users').get(userList)
    app.route('/checkMobNo').get(checkMobNo)
    
}

export default routes;