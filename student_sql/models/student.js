const db = require("../utils/database");

module.exports = {
  insert(name, usn, address) {
    return db.execute("INSERT into student(name,usn,address) VALUES (?,?,?)", [
      name,
      usn,
      address,
    ]);
  },

  fetch() {
    return db.execute("SELECT * from student");
  },

  fetchById(id) {
    return db.execute("SELECT * from student where id = " + id);
  },

  deleteById(id) {
    return db.execute("DELETE from student where student.id =" + id);
  },
};
