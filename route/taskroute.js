const route = require('express').Router();

const taskcontroller = require('../controller/taskcontroller')


route.get(`/` , taskcontroller.index)

route.get(`/create` , taskcontroller.new)

route.get('/edit/:id' , taskcontroller.edit)


route.post('/newTask' , taskcontroller.createTask)
module.exports = route