const db = require("../common/connect");

const BangDia = (bangDia) => {
  //this.id = bangDia.id;
  //this.tenBangDia = bangDia.tenBangDia;
  //this.theLoai = bangDia.theLoai;
  //this.nhaSX = bangDia.nhaSX;
  //this.noiDung = bangDia.noiDung;
  //this.gia = bangDia.gia;
};

BangDia.getById = (id, callback) => {
  const sqlString = "SELECT * FROM bangDia WHERE id = ? ";
  db.query(sqlString, id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

BangDia.getAll = (callback) => {
  const sqlString = "SELECT * FROM bangDia ";
  db.query(sqlString, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(result);
  });
};

BangDia.insert = (bangDia, callBack) => {
  const sqlString = "INSERT INTO bangDia SET ?";
  db.query(sqlString, bangDia, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("Thêm băng đĩa id = "+ bangDia.id +" thành công");
  });
};

BangDia.update = (bangDia, id, callBack) => {
  const sqlString = "UPDATE bangDia SET ? WHERE id = ?";
  db.query(sqlString, [bangDia, id], (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("cập nhật băng đĩa id = " + id + " thành công");
  });
};

BangDia.delete = (id, callBack) => {
  db.query(`DELETE FROM bangDia WHERE id = ?`, id, (err, res) => {
    if (err) {
      callBack(err);
      return;
    }
    callBack("xóa băng đĩa id = " + id + " thành công");
  });
};

BangDia.getByTheLoai = (theLoai, callBack) => {
  const sqlString = "SELECT * FROM bangDia WHERE theLoai like ? ";
  db.query(sqlString, theLoai, (err, result) => {
    if (err) {
      return callBack(err);
    }
    callBack(result);
  });
}

module.exports = BangDia;

