var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('app-futbol.db');
var check;
// Crea la tabla y carga info de prueba
db.serialize(function() {
    db.run("CREATE TABLE if not exists cancha_info (nombre TEXT, direccion TEXT)");
    var stmt = db.prepare("INSERT INTO cancha_info VALUES (?, ?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Cancha num " + i, "Autopista al 500" + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, nombre, direccion FROM cancha_info", function(err, row) {
        console.log(row.id + ": " + row.nombre + " -> " + row.direccion);
    });
});

db.close();