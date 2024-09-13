const config = require('../config')
const Helper = require("../helpers");
const fileSys = config.PATH_SYS_CONFIG;
const { sendCoinBep20 } = require('./coin-core');
var db = require("../database");

let dataSys = Helper.getConfig(fileSys);

module.exports = {
    sendCoinBSC_BEP20: async (priceUSDT, AddressForUser , idHis) => {
        return await new Promise(async (resolve, reject) => {
            let addressFrom = dataSys.ADDRESS_ETH_TRANSACTION; // Địa chỉ ví Admin
            let KeyFrom     = dataSys.PRIVATE_KEY_ETH_TRANSACTION || null;

            if(addressFrom == null || KeyFrom == null){
                let json = {
                    success: 99,
                    msg: 'Địa chỉ gửi tiền chưa thiết lập!'
                }
                console.log(`⚡️Địa chỉ chưa được thiết lập`);
                resolve(json);
            }

            try {
                const res = await sendCoinBep20(addressFrom, KeyFrom, AddressForUser, priceUSDT, dataSys.IS_TEST_SMART_CHAIN);

                let json = {
                    success: 1,
                    price_trans: priceUSDT,
                    msg: res
                }
                db.query(
                    `UPDATE trade_history SET real_amount = ?, pay_fee = ?, status = ? WHERE id = ?`,
                    [
                        priceUSDT,
                        '0.0021',
                        1,
                        idHis
                    ])
                resolve(json);
            } catch (error) {
                let json = {
                    success: 99,
                    msg: error
                }

                reject(json);
            }
        })        
    }
}