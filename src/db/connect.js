const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        serverSelectionTimeoutMS: 5000,
        autoIndex: true,
        poolSize: 10, 
        ignoreUndefined: true,
    });
    console.log('Conexión a la base de datos establecida');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
};

module.exports = connectDB;
