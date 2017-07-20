module.exports = {
    getUsers: function(req, res) {
        req.app.get('db').get_users().then(function(response){
            res.send(response)
        })
    },
    getVehicles: function(req, res) {
        req.app.get('db').get_vehicles().then(function(response){
            res.send(response)
        })
    },
    addUser: function(req, res) {
        const newUser = [
            req.body.name,
            req.body.email
        ]
        req.app.get('db').add_user(newUser).then(function(response){
            res.send(response)
        })
    },
    addVehicle: function(req, res) {
        const newVehicle = [
            req.body.make,
            req.body.model,
            req.body.year,
            req.body.owner_id
        ]
        req.app.get('db').add_vehicle(newVehicle).then(function(response){
            res.send(response)
        })
    },
    getVehicleCount: function(req, res) {
        const count = [
            req.params.userId
        ]
        req.app.get('db').vehicle_count(count).then(function(response){
            res.send(response)
        })
    },
    getVehicleById: function(req, res) {
        const id = [
            req.params.userId
        ]
        req.app.get('db').vehicle_id(id).then(function(response){
            res.send(response)
        })
    },
    findAllVehicles: function(req, res) {
        if(req.query.userEmail){
            req.app.get('db').find_vehicle_email([req.query.userEmail]).then(function(response){
                res.send(response)
            })
        }else if(req.query.userFirstStart){
            const first = req.query.userFirstStart;
            req.app.get('db').find_vehicle_first_name([first + '%']).then(function(resp){
                res.send(resp)
            })
        }
    },
    getVehcielsByYear: function(req, res) {
        req.app.get('db').get_vehicles_by_year().then(function(response){
            res.send(response)
        })
    },
    changeOwner: function(req, res) {
        const change = [
            Number(req.params.vehicleId),
            Number(req.params.userId)
        ]
        req.app.get('db').change_owner(change).then(function(response){
            res.send(response)
        })
    },
    removeOwner: function(req, res) {
        const owner = [
            req.params.userId,
            req.params.vehicleId
        ]
        req.app.get('db').remove_owner(owner).then(function(response){
            res.send(response)
        })
    },
    removeVehicle: function(req, res) {
        req.app.get('db').remove_vehicle([req.params.vehicleId]).then(function(response){
            res.send(response)
        })
    }

}
