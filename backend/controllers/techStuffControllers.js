// controller1
exports.getAlltechStuff = (req, res, next) => {
    res.send('get all tech stuff')
}

// controller2
exports.createtechStuff = (req, res, next) => {
    res.send('create tech stuff')
}

// controller3
exports.updatetechStuffById = (req, res, next) => {
    res.send('update by id tech stuff')
}

// controller3
exports.deletetechStuffById = (req, res, next) => {
    res.send('delete by id tech stuff')
}