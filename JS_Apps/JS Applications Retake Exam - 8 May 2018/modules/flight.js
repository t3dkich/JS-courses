let flightService = (()=>{
    function create(cost, depTime, depDate, dest, img, origin, isPublic, seats) {
        let data = { cost, depTime, depDate, dest, img, origin, isPublic, seats };
        return remote.post('appdata', 'flights', 'kinvey', data);
    }

    function getPublic() {
        let endpoint = 'flights?query={"isPublic":"true"}'
        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function getbyId(id) {
        return remote.get('appdata', 'flights/'+id, 'kinvey')
    }
    
    function edit(id, data) {
        return remote.update('appdata', 'flights/'+id, 'kinvey', data)
    }

    function userAdded(id) {
        let endpoint = `flights?query={"_acl.creator":"${id}"}`
        return remote.get('appdata', endpoint, 'kinvey')
    }

    return {
        create,
        getPublic,
        getbyId,
        edit,
        userAdded
    }
})()
