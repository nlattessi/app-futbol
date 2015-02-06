// app/routes.js

// agarro el modelo
var Cancha = require('./modelos/cancha');

module.exports = function(app) {

    app.get('/api/canchas', function(req, res) {
        Cancha.getCanchas(function(err, data) {
            res.json(data);
        });
    });

    app.get('/api/canchas/:cancha_id', function(req, res) {
        Cancha.getCancha(req.params.cancha_id, function(err, data) {
            res.json(data);
        });
    });

    app.post('/api/canchas', function(req, res) {
        Cancha.insertCancha({nombre: req.body.nombre, direccion: req.body.direccion});
        res.json({ message: 'Cancha agregada' });
    });

    app.delete('/api/canchas/:cancha_id', function(req, res) {
        Cancha.deleteCancha(req.params.cancha_id);
        res.json({ message: "cancha borrada "});
    });

    app.put('/api/canchas/:cancha_id', function(req, res) {
        Cancha.updateCancha(req.params.cancha_id, {nombre: req.body.nombre, direccion: req.body.direccion});
        res.json({ message: "cancha actualizada "});
    })


    // Sirvo la pagina
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};