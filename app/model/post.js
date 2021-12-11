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
                    callback(null, res[0]);
                }
            }
        );
    } catch (error) {
        callback(error);
    }
}

/* 
    this function is delete the post data . if it has error in process it call error callback otherwise data callback
    param1 - delete post id
*/
exports.deletePost = (postId, callback) => {
    try {
        databaseConfig().query("CALL delete_post(?)",
        postId,
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

/* 
    this function is update the post data . if it has error in process it call error callback otherwise data callback
    param1 - array for update post data
*/
exports.updatePost = (data, callback) => {
    try {
        databaseConfig().query("CALL update_post(?,?,?)",
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

/* 
    this function is get all post or specific author post. if it has error in process it call error callback otherwise data callback
    param1 - authorId
*/
exports.getPosts = (authorId, callback) => {
    try {
        databaseConfig().query("CALL get_posts(?)",
        authorId,
            (err, res) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null, res[0]);
                }
            }
        );
    } catch (error) {
        callback(error);
    }
}
exports.otherUserContact = (authorId, callback) => {
    try {
        databaseConfig().query("CALL other_user_contact(?)",
        authorId,
            (err, res) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null, res[0]);
                }
            }
        );
    } catch (error) {
        callback(error);
    }
}