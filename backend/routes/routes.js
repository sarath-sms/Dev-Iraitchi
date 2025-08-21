import { createIraiDrive, deleteIraiDrive, listIraiDrive, viewIraiDrive } from "../controllers/adminAuthController";
import { createIraiAdmin, iraiLogin } from "../controllers/adminController";
import { addNewProduct } from "../controllers/productControllers";
import { addNewUser, checkMobNo, checkOtp, userList } from "../controllers/userControllers";
import { userVerification } from "../middleware/index";
import { verifyIraiAdmin } from "../middleware/iraiAdmin";

const routes = (app) => {
    // app.route('/users').get(userList)
    app.route('/checkMobNo').get(checkMobNo);
    app.route('/checkOtp').post(checkOtp);
    app.route('/').post(userVerification);

    // admin
    app.route('/iraiAdminRegister').post(createIraiAdmin);
    app.route('/iraiAdminLogin').post(iraiLogin);
    // handle driver from admin
    app.route('/createIraiDrive').post(verifyIraiAdmin, createIraiDrive);
    app.route('/listIraiDrive').get(verifyIraiAdmin, listIraiDrive);
    app.route('/viewIraiDrive/:id').get(verifyIraiAdmin, viewIraiDrive);

    // pending.......!!!!!!!
    app.route('/deleteIraiDrive/:id').delete(verifyIraiAdmin, deleteIraiDrive);

}

export default routes;