const TelegramBot = require('node-telegram-bot-api')
const config = require('./config');

const TelegramAll = new TelegramBot(config.TELEGRAM_TOKEN, {polling: false})
TelegramAll.set

global['ARESTele'] = TelegramAll;

//require('./hoahong'); // chạy trả thưởng hoa hồng
require('./src/app'); // chạy http
require('./games/trade'); // chạy game
require('./auth/sys_settings'); // chạy thiết lập hệ thống
require('./auth/mess'); // chạy BOT Telegram
require('./src/nap'); // chạy BOT Nạp
require('./api/autoNapCoin');
require('./auth/notifi'); // chạy thông báo

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
process.on('uncaughtException', function (exception) {
	console.log(exception);
});
