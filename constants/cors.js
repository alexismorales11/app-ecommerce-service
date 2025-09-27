const middlewareCorsConst = {
    origin: "Access-Control-Allow-Origin",
    headers: "Access-Control-Allow-Headers",
    methods: "Access-Control-Allow-Methods",
    option: "OPTIONS",
    successStatus: 200,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    allowedMethods: "PUT, POST, GET, PATCH",
    allowAllOrigins: "*"
}
module.exports = middlewareCorsConst;