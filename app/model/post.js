const databaseConfig = require("../databaseConfig");

/* 
    this function is insert the post data . if it has error in process it call error callback otherwise data callback
    param1 - array for insert post data
*/
exports.addPost = (data, callback) => {
    try {
        databaseConfig().query("CALL add_post(?,?,?)",
        data,
            (err, res) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null, res[0][0]);
                }
            }
        );
    } catch (error) {
        callback(error);
    }
}