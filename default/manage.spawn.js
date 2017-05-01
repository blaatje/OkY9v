var manageSpawn = {

    /** @param {Creep} creep **/
    run: function(creeps) {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var carriers1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier1');
        var carriers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier2');
        var carrierTower = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrierTower');
        var harvesters1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester1');
        var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var southReservers = _.filter(Game.creeps, (creep) => creep.memory.role == 'southReserver');
        var staticUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'staticUpgrader');


        if(harvesters1.length < HARVESTER_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(HARVESTER_CONFIG, "harvester1" + Game.time.toString(), {role: 'harvester1'});
            console.log('Spawning new harvester1: ' + newName);
        }
        else if(harvesters2.length < HARVESTER_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(HARVESTER_CONFIG, "harvester2" + Game.time.toString(), {role: 'harvester2'});
            console.log('Spawning new harvester2: ' + newName);
        }
        else if(builders.length < BUILDER_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(BUILDER_CONFIG, "Builder" + Game.time.toString(), {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
        else if(carriers1.length < CARRIER_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(CARRIER_CONFIG, "carrier1" + Game.time.toString(), {role: 'carrier1'});
            console.log('Spawning new carrier1: ' + newName);
        }
        else if(carriers2.length < CARRIER_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(CARRIER_CONFIG, "carrier2" + Game.time.toString(), {role: 'carrier2'});
            console.log('Spawning new carrier2: ' + newName);
        }
        else if(carrierTower.length < CARRIERT_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(CARRIERT_CONFIG, "carrierTower" + Game.time.toString(), {role: 'carrierTower'});
            console.log('Spawning new carrierT: ' + newName);
        }
        else if(upgraders.length < UPGRADER_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(UPGRADER_CONFIG, "upgrader" + Game.time.toString(), {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
        else if(southReservers.length < SOUTHRESERVERS_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(SOUTHRESERVERS_CONFIG, "southReserver" + Game.time.toString(), {role: 'southReserver'});
            console.log('Spawning new southReserver: ' + newName);
        }
        else if(staticUpgraders.length < STATICUPGRADER_AMOUNT) {
            var newName = Game.spawns['Spawn1'].createCreep(STATICUPGRADER_CONFIG, "staticUpgrader" + Game.time.toString(), {role: 'staticUpgrader'});
            console.log('Spawning new staticUpgrader: ' + newName);
        }
    }
};

module.exports = manageSpawn;