const controllerVersionConst = require("../../constants/version");

class versionServices {

    async currentVersion() {

        return {
            success: true,
            message: controllerVersionConst.message,
            version: controllerVersionConst.version
        }
    }
}

module.exports = versionServices;