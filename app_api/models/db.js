var mongoose = require('mongoose');

// URI'yı environment variable'dan alın
var dbURI = process.env.MONGODB_URI || "mongodb://localhost/mekanbul";

mongoose.connect(dbURI);

mongoose.connection.on("connected", function () {
    console.log(dbURI + " adresine bağlandı");
});
mongoose.connection.on("disconnected", function () {
    console.log(dbURI + " bağlantısı koptu");
});

process.on("SIGINT", function () {
    mongoose.connection.close();
    console.log("Bağlantı kapatıldı");
    process.exit(0);
});

require("./venue");
