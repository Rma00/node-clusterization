module.exports = {
    "appEnv": process.env.NODE_ENV,
    "application": {
        "port": process.env.PORT || 8080,
        "token": process.env.TOKEN,
        "isMaintenance": false,
        "maintenanceMessage": "System Will Be Available Soon.....!",
        "versionNumbers": process.env.VERSIONS.split(", "),
        "jwtSecret": process.env.JWT_SECRET,
    },
    "databases": {
        "mongo": {
            "database": process.env.MONGO_DB,
            "reader": process.env.MONGO_DB_READER,
            "writer": process.env.MONGO_DB_WRITER,
        }
    }
}