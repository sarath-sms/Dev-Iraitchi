import { createIraiAdmin, iraiLogin } from "../controllers/adminController";
import { addNewProduct } from "../controllers/productControllers";
import { addNewUser, checkMobNo, checkOtp, userList } from "../controllers/userControllers";
import { userVerification } from "../middleware/index";

const routes = (app) => {
    // app.route('/users').get(userList)
    app.route('/checkMobNo').get(checkMobNo);
    app.route('/checkOtp').post(checkOtp);
    app.route('/').post(userVerification);

    // admin
    app.route('/iraiAdminRegister').post(createIraiAdmin)
    app.route('/iraiAdminLogin').post(iraiLogin)
}

export default routes;