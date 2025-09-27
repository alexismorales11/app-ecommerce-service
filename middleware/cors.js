const middlewareCorsConst = require('../constants/cors');

module.exports = function (req, res, next) {
    res.header(middlewareCorsConst.origin, middlewareCorsConst.allowAllOrigins);
    res.header(
        middlewareCorsConst.headers,
        middlewareCorsConst.allowedHeaders
    );
    if (req.method === middlewareCorsConst.option) {
        res.header(middlewareCorsConst.methods, middlewareCorsConst.allowedMethods);
        return res.status(middlewareCorsConst.successStatus).json({});
    }
    next();
};