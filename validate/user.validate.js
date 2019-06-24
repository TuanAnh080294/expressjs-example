module.exports.postCreate = function(req, res, next) {
    var user = req.body;
    var errors = [];
    if(!req.body.name) {
        errors.push("Name is required");
    }
    if(!req.body.phone) {
        errors.push("Phone is required");
    }
    if(errors.length) {
        res.render("user/create", {
            user: user,
            errors: errors
        });
        return;
    }
    res.locals = "Hello";
    next();
}