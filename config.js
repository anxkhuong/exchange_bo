/**
 * Author Ares DN
 *
 * Website: https://www.iskydn.online
 *
 */

let USE_SSL = true;

module.exports = {
    USE_SSL,
    CF_SSL: {
        key: "./certs/panazic.key",
        cert: "./certs/panazic.crt",
    },

    DOMAIN: "http://localhost/",
    TITLE_SITE: "Medola",
    CONTACT: "",
    MAIL_USERNAME: "",
    MAIL_PASSWORD: "",
    MAIL_LOGO: "http://localhost//logo.png",
    MAIL_IMG_FOOTER: "http://localhost//line.png",

    IS_PLAY_SPOT: true, // mặc địng false -> FUTURES, Sử dụng BINANCE SPOT ( check được sàn ) hoặc FUTURE ( không bào giờ bảo trì, không check được sàn )

    SO_GIAY_DEM_NGUOC: 30,
    SO_GIAY_DEM_NGUOC_KET_QUA: 30,
    RATE_NHA_THUONG: 95,
    BET_MAX: 1,

    BINANCE_APIKEY: "XYPMFIiYrTh8YTRSVxA6p59QJbWwshQdh1JawUfFTmRyBZD8bjf1TLPxzvrRsjho",
    BINANCE_APISECRET: "KbrXXbaIvRAC5r2JJrsCZMzmNs6ue9LMGrKLDE7s9oRkhmXQTJCv2vb3R0fH7VoY",

    // THANH TOÁN PAYPAL
    //PAYPAL_MODE: 'live', //sandbox or live
    //PAYPAL_CLIENT_ID: 'AbubWI5Cc-21tFJnqK7B6cFuSa2es3nqJYY0McPI9EBLiCyDQjJEJ7_vUcZTBNdiHVhfOEWUsTPL0mcf',//'AakUAPg0hA5WSN5IdhfLV_VsPWd8kLktvesDPEDgbsdzOLwI9UPQj9NAYEyVIVKKzRsdC_2HbnAFy10p',
    //PAYPAL_CLIENT_SECRET: 'EFX50IOpCcqREF8npYA9iavGBvqeW8W7zZ1wfM_dn147xyelQyGwSa9U-WJrl44BrSmnj7JFNqMcY8fk',//'EMEZw9QceAhl2UztIWGH62xh95z7---kuu6npJTRj09TVJRQnG-hyIfKUfsptfPIGcBvuwxeBhCtjYT_',

    PAYPAL_MODE: "sandbox", //sandbox or live
    PAYPAL_CLIENT_ID: "ATKEo_r0490VPhrfwZCibwK4Quhw2sJ9EfHVkOLHJQ6zoI7koNubcueoUYjpr16P9rYqR2mg8gbOA558", //'',
    PAYPAL_CLIENT_SECRET: "EMEZw9QceAhl2UztIWGH62xh95z7EH7MxejMbWWJxhyYb7pE17eixopTVz4aSiAXoHYbVUw2wxFJQGc6cN4b2KwAY_d7Wrq--NbrDkCrqUfl", //'',
    // KẾT THÚC THANH TOÁN PAYPAL

    // DATA_HOST: "localhost",
    // DATA_USER: "root",
    // DATA_PASS: "Xinchao@123!",

    DATA_HOST: "127.0.0.1",
    DATA_USER: "root",
    DATA_PASS: "",
    DATA_DB: "sanbo",
    DATA_PORT: 3306,

    PORT_SYS: 2087,
    PORT_NAP: 2083,
    PORT_NOTIFY: 2053,

    TOKEN_KEY: "vinfin.netbotrade2022pro",

    PATH_SYS_CONFIG: "stSys",
    PATH_SYS_COMMISSION: "stCommission",
    PATH_SYS_COMMISSION_VIP: "stCommissionVip",

    ABI_USDT_MAINNET: "USDT_BEP20_mainnet",
    ABI_USDT_TESTNNET: "USDT_BEP20_testnet",

    TELEGRAM_TOKEN: "6139863601:AAEFnUE47SJKEo2Gf9V3rUZXRo5AZU-c66E",
    TELEGRAM_BET_ID: "5802040566",
    TELEGRAM_RUT_ID: "5802040566",
    TELEGRAM_NAP_ID: "5802040566",
    TELEGRAM_BET_AMOUNT: "5802040566",
    TELEGRAM_BET_THONG_BAO: "5802040566",
    TELEGRAM_BET_PHIM_LENH: "5802040566",
};