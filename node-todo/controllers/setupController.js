var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        
        // seed data
        var starterTodos = [
            {
                username: 'John',
                todo: 'Finish gym',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Jane',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Jim',
                todo: 'Finish the webserver',
                isDone: false,
                hasAttachment: false
            }
            
        ];
        
        Todos.create(starterTodos, function(err, results){
            if(err) throw err;
            res.send(results);
        })
    })
}