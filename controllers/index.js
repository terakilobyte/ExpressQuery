/**
 * Created by nathanleniz on 2/3/15.
 */
exports.index = function(req, res) {
    res.render('index', {
        textToDisplay: decodeURIComponent(req.query.text) || 'Hello',
        color: req.query.color || 'black'
    });
};