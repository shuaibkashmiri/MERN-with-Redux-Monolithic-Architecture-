const mongoose = require("mongoose");

const url = "mongodb+srv://shoaibbhat007:Kashmir19000@reduxcluster.6jv1w.mongodb.net/ReactRedux?retryWrites=true&w=majority&appName=ReduxCluster";
// const url ="mongodb://localhost:27017/ReactRedux"

const connectDb = async () => {
  try {
   await mongoose.connect(url);
    console.log(`Database Connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
