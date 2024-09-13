const express = require('express')
const Tele = require("../telegram_notify")
const db = require("../../database");
const app = express();

app.post("/usdt/rut", function (req, res) {
  const { address, a, al, n, b } = req.body;
  db.query(`SELECT email FROM users WHERE nick_name = ?`, [n], (err, result) => {
    if (err) {
      console.log(err)
    }

    if (Array.isArray(result) && result.length) {
      const email = result[0].email;
      db.query(`INSERT INTO trade_history (email, from_u, type_key, type, currency, amount, real_amount, note, status, bank, created_at)
      values(?,?,?,?,?,?,?,?,?,?,now())`,
        [
          email,
          n,
          'rt',
          'Rút tiền (USDT)',
          'usdt',
          a,
          al,
          `
          Địa chỉ ví : ${address}
          `,
          0,
          b,
        ], (err, result1) => {
          if (err) {
            console.log(err)
          }
          res.status(200).json({ success: 1 });
        });
    }
  });
})

app.post("/usdt/nap", function (req, res) {
  const { a, al, n, b } = req.body;
  db.query(`SELECT email FROM users WHERE nick_name = ?`, [n], (err, result) => {
    if (err) {
      console.log(err)
    }

    if (Array.isArray(result) && result.length) {
      const email = result[0].email;
      db.query(`INSERT INTO trade_history (email, from_u, type_key, type, currency, amount, real_amount, note, status, bank, created_at)
      values(?,?,?,?,?,?,?,?,?,?,now())`,
        [
          email,
          n,
          'nt',
          'Nạp tiền (USDT)',
          'usdt',
          a,
          al,
          ``,
          0,
          b,
        ], (err, result1) => {
          if (err) {
            console.log(err)
          }
          res.status(200).json({ success: 1 });
        });
    }
  });
})

app.post("/vnd/rut", function (req, res) {
  const { soTaiKhoan, chuTaiKhoan,tenNganHang, a, al, n, b } = req.body;
  db.query(`SELECT email FROM users WHERE nick_name = ?`, [n], (err, result) => {
    if (err) {
      console.log(err)
    }

    if (Array.isArray(result) && result.length) {
      const email = result[0].email;
      db.query(`INSERT INTO trade_history (email, from_u, type_key, type, currency, amount, real_amount, note, status, bank, created_at)
      values(?,?,?,?,?,?,?,?,?,?,now())`,
        [
          email,
          n,
          'rt',
          'Rút tiền (VNĐ)',
          'vnd',
          a,
          al,
          `
          Số tài khoản: ${soTaiKhoan}\n| Chủ tài khoản: ${chuTaiKhoan}\n| Tên ngân hàng: ${tenNganHang}
          `,
          0,
          b,
        ], (err, result1) => {
          if (err) {
            console.log(err)
          }
          res.status(200).json({ success: 1 });
        });
    }
  });
})

app.get('/vnd', function(req, res) {
  const { a, n, al, b } = req.query;

  db.query(`SELECT email FROM users WHERE nick_name = ?`, [n], (err, result) => {
    if (err) {
      throw new Error(err);
    }

    if (Array.isArray(result) && result.length) {
      const email = result[0].email;
      /**
       * status: 0: gửi admin phê duyệt
       * 1: success
       * -1: cancel
       */
      db.query(`INSERT INTO trade_history (email, from_u, type_key, type, currency, amount, real_amount, status, bank, created_at)
      values(?,?,?,?,?,?,?,?,?,now())`,
      [
        email,
        n,
        'nt',
        'Nạp tiền (VNĐ)',
        'vnd',
        a,
        al,
        0,
        b,
      ], (err, result1) => {
        if (err) {
          throw new Error(err);
        }
        res.status(200).json({ success: 1 });
      });
    }
  });
});

app.post('/approval', function(req, res) {
  const body = req.body;
  const {
    status,
    id,
    note,
    amount,
    email,
  } = body;

  db.query(`UPDATE trade_history SET status = ?, note = ? WHERE id = ?`,
  [
    status,
    note,
    id,
  ], (err) => {
    if (err) {
      throw new Error(err);
    }

    if (status === 1) {
      db.query(`UPDATE account SET balance = balance + ? WHERE email = ? AND type = 1`, [
        amount,
        email,
      ], (err1) => {
        if (err1) {
          throw new Error(err1);
        }

        Tele.sendMessNap(`Email: <b>${email}</b>\n
Vừa nạp: <b>$${amount}</b> bằng phương thức chuyển khoản ngân hàng (VNĐ).\n`)
  
        res.status(200).json({ success: 1 });
      })
    } else {
      res.status(200).json({ success: 1 });
    }
  });
});

app.post('/approval-rut', function(req, res) {
  const body = req.body;
  const {
    status,
    id,
    note,
    amount,
    email,
  } = body;

  db.query(`UPDATE trade_history SET status = ?, note = ? WHERE id = ?`,
  [
    status,
    note,
    id,
  ], (err) => {
    if (err) {
      throw new Error(err);
    }
    // Từ chối rút tiền thì cộng lại tiền cho user
    if (status === -1) {
      db.query(`UPDATE account SET balance = balance + ? WHERE email = ? AND type = 1`, [
        amount,
        email,
      ], (err1) => {
        if (err1) {
          throw new Error(err1);
        }
  
        res.status(200).json({ success: 1 });
      })
    } else {
      Tele.sendMessNap(`Email: <b>${email}</b>\n
Vừa rút: <b>$${amount}</b> bằng phương thức chuyển khoản ngân hàng (VNĐ).\n`)
      res.status(200).json({ success: 1 });
    }
  });
});

module.exports = app;