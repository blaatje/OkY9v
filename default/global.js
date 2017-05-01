var globals = {

    /** @param {Creep} creep **/
    run: function() {
        global.BUILDER_AMOUNT = 1;
        global.BUILDER_CONFIG = [WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];
        
        global.CARRIER_AMOUNT = 1;
        global.CARRIER_CONFIG = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        
        global.CARRIERT_AMOUNT = 1;
        global.CARRIERT_CONFIG = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        
        global.HARVESTER_AMOUNT = 1;
        global.HARVESTER_CONFIG = [WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE];

        global.UPGRADER_AMOUNT = 1;
        global.UPGRADER_CONFIG = [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
        
        global.SOUTHRESERVERS_AMOUNT = 0;
        global.SOUTHRESERVERS_CONFIG = [CLAIM,,CLAIM,MOVE,MOVE];
        
        global.STATICUPGRADER_AMOUNT = 3;
        global.STATICUPGRADER_CONFIG = [WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE];
        
        global.TTL_failsafe = 30;
        
        global.Pickup_Harvester_1 = (new RoomPosition(22,20,'E71N33'));
        global.Pickup_Harvester_2 = (new RoomPosition(19,42,'E71N33'));
        
        global.Pickup_Ground_1 = (new RoomPosition(21,19,'E71N33'));
        global.Pickup_Ground_2 = (new RoomPosition(18,43,'E71N33'));
        global.CONTAINER_1 = (new RoomPosition(29,41,'E71N33'));
        
        global.MAINROOM = ('E71N33');
        global.SOUTHROOM = ('E71N32');
        global.ATTACKROOM = ('E73N34');
        
        global.CONTAINER_1 = (new RoomPosition(18,42,'E71N33'));
        //console.log('');
    }
};

module.exports = globals;

var test = {
    run: function() {
        console.log('test');
    }
}
//module.exports = test;
//Game.spawns['Spawn1'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,ATTACK,MOVE,MOVE,ATTACK,MOVE,ATTACK], "soldier" + Game.time.toString(), {role: 'soldier'});