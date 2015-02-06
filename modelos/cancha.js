// Dependencias, creo la base y el objeto de funciones
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('app-futbol.db');

module.exports = {

    // GET - Devuelve todas las canchas en la DB
    getCanchas: function(callback) {
        db.all("SELECT rowid AS id, nombre, direccion from cancha_info", function(err, rows) {
            if (err)
                throw err;
            else
                callback(null, rows);
        });
    },

    // GET - Devuelve una cancha con el ID especificado
    getCancha: function(canchaId, callback) {
        var stmt = db.prepare("SELECT rowid AS id, nombre, direccion from cancha_info WHERE rowid = ?");
        stmt.bind(canchaId);
        stmt.get(function(err, row) {
            if (err)
                throw err;
            else
                callback(null, row)
        });
    },

    // POST - Inserta una cancha nueva
    insertCancha: function(canchaData) {
        var stmt = db.prepare("INSERT INTO cancha_info VALUES (?, ?)");
        stmt.run(canchaData.nombre, canchaData.direccion);
        stmt.finalize();
    },

    // DELETE - Borra una cancha con el ID especificado
    deleteCancha: function(canchaId) {
        var stmt = db.prepare("DELETE FROM cancha_info WHERE rowid = ?");
        stmt.run(canchaId);
        stmt.finalize();
    },

    // PUT - Updatea un registro existente
    updateCancha: function(canchaId, canchaData) {
        var stmt = db.prepare("UPDATE cancha_info SET nombre = ?, direccion = ? WHERE rowid = ? ");
        stmt.run(canchaData.nombre, canchaData.direccion, canchaId);
        stmt.finalize();
    }
}
