
import mongoose from "mongoose";

var database = process.env.DATABASE || "127.0.0.1";
var port = process.env.DATABASE_PORT || "27017";
var user = process.env.DATABASE_USER || "";
var password = process.env.DATABASE_PASSWORD || "";

(mongoose as any).Promise = global.Promise;

  mongoose.connect("mongodb://" + database +":" + port +"/admin", {
    useNewUrlParser: true,
    useCreateIndex: true
  });

export { mongoose };
