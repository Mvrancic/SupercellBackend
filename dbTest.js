const mongoose = require('mongoose');

// Reemplaza la siguiente cadena de conexión con la tuya
const connectionString = 'mongodb://supercell:1234@54.221.93.227:27017/SupercellDB';

// Define nombreColeccion aquí
const nombreColeccion = 'lecturasRFID';

mongoose.connect(connectionString)
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
    return mongoose.connection.db.listCollections().toArray();
  })
  .then(collections => {
    console.log('Colecciones en la base de datos:', collections.map(c => c.name));
    const collection = mongoose.connection.db.collection(nombreColeccion);
    return collection.find().toArray();
  })
  .then(docs => {
    console.log(`Documentos en la colección ${nombreColeccion}:`, docs);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });