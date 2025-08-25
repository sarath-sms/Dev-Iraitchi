import { createIraiDrive, deleteIraiDrive, listIraiDrive, viewIraiDrive } from "../controllers/adminAuthController";
import { createIraiAdmin, iraiLogin } from "../controllers/adminController";
import { addNewProduct } from "../controllers/productControllers";
import { addNewUser, checkMobNo, checkOtp, userList } from "../controllers/userControllers";
import { userVerification } from "../middleware/index";
import { verifyIraiAdmin } from "../middleware/iraiAdmin";

const routes = (app) => {
    // app.route('/users').get(userList)
    app.route('/irai/checkMobNo').get(checkMobNo);
    app.route('/irai/checkOtp').post(checkOtp);
    app.route('/irai/').post(userVerification, (req, res) => res.json({ status: true, msg: "🔥 keep your function here 🔥" }));

    // admin
    app.route('/irai/iraiAdminRegister').post(createIraiAdmin);
    app.route('/irai/iraiAdminLogin').post(iraiLogin);
    // handle driver from admin
    app.route('/irai/createIraiDrive').post(verifyIraiAdmin, createIraiDrive);
    app.route('/irai/listIraiDrive').get(verifyIraiAdmin, listIraiDrive);
    app.route('/irai/viewIraiDrive/:id').get(verifyIraiAdmin, viewIraiDrive);

    // pending.......!!!!!!!
    app.route('/irai/deleteIraiDrive/:id').delete(verifyIraiAdmin, deleteIraiDrive);

}

export default routes;