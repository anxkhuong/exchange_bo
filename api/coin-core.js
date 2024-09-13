const {
    sendCoinBNB,
    sendCoinBep20,
    getUSDTFrom,
    sendCoinBNBByAdmin,
    isAdminBNBAvaiable,
    main,
} = require('bep20_trans_token');

const config = require('../config')
const Helper = require("../helpers");
const fileSys = config.PATH_SYS_CONFIG

let dataSys = Helper.getConfig(fileSys);

main(dataSys.IS_TEST_SMART_CHAIN);

module.exports = {
    sendCoinBNB,
    sendCoinBep20,
    getUSDTFrom,
    sendCoinBNBByAdmin,
    isAdminBNBAvaiable,
}