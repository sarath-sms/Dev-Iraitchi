import { addNewProduct } from "../controllers/productControllers";
import { addNewUser, checkMobNo, checkOtp, userList } from "../controllers/userControllers";

const routes = (app) => {
    // app.route('/users').get(userList)
    app.route('/checkMobNo').get(checkMobNo);
    app.route('/checkOtp').post(checkOtp);
    
}

export default routes;