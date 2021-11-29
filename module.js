const db = require("./db")

const moduleccc = {
    ahoyo: (cb) => {
        db.query(
            "select * from aoo",
            (err, result) => {
              if (err) {
                console.log(err)
                return cb(err);
              }
              cb(null, result[0]);
            }
          );
    }
}

module.exports = moduleccc;