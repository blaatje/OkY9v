module.exports =
{
    pickup_1: function(creep)
    {
        if(creep.carry.energy == 0 && creep.ticksToLive > TTL_failsafe) 
        {
            creep.moveTo(Pickup_Harvester_1);//, {visualizePathStyle: {stroke: '#ffaa00'}});
            var target = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
            creep.pickup(target);
            var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
            return true;
        }
        else
        {
            return false;
        }
    },
    
    pickup_2: function(creep)
    {
        if(creep.carry.energy == 0 && creep.ticksToLive > TTL_failsafe) 
        {
            creep.moveTo(Pickup_Harvester_2);//, {visualizePathStyle: {stroke: '#ffaa00'}});
            var target = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
            creep.pickup(target);
            var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
            return true;
        }
        else
        {
            return false;
        }
    },
    
    construct: function(creep)
    {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) 
        {
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);//, {visualizePathStyle: {stroke: '#ffffff'}});
            }
            return true;
        }
        else
        {
            return false;
        }
    },
    
    fillSpawner: function(creep)
    {
        var targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) && (structure.energy < structure.energyCapacity);
                    }
        });
        if(targets) 
        {
            if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(targets);//, {visualizePathStyle: {stroke: '#ffffff'}});
            }
            
            return true;
        }
        else
        {
            return false;
        }
        
    },
    
    fillContainer: function(creep)
    {
        var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER) && (_.sum(structure.store) < structure.storeCapacity);
                    }
        });
        if(creep.room.name != MAINROOM)
            {
                var exitDir = Game.map.findExit(creep.room.name, MAINROOM);
                var Exit = creep.pos.findClosestByPath(exitDir);
                creep.moveTo(Exit);
            }
        else
            {
            if(targets.length > 0) 
            {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(targets[0]);//, {visualizePathStyle: {stroke: '#ffffff'}});
                }
                
                return true;
            }
            else
            {
                return false;
            }
        }
    },
    
    fillTower: function(creep)
    {
        var targets = creep.room.find(FIND_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_TOWER) && structure.energy < 0.5 * structure.energyCapacity;
            }
        });
        if(targets.length > 0) 
        {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(targets[0]);//, {visualizePathStyle: {stroke: '#ffffff'}});
            }
            return true;
        }
        else
        {
            return false;
        }
    },
    
    upgrade: function(creep)
    {
        if(creep.room.name != MAINROOM)
            {
                var exitDir = Game.map.findExit(creep.room.name, MAINROOM);
                var Exit = creep.pos.findClosestByPath(exitDir);
                creep.moveTo(Exit);
            }
        else
        {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(creep.room.controller);//, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    },
    
    staticHarvest: function(creep)
    {
        var source = Game.getObjectById(creep.memory.mine);
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);//, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
        var target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: i => i != creep});
        creep.transfer(target, RESOURCE_ENERGY);
        if(creep.carry.energy == creep.carryCapacity){
            creep.drop(RESOURCE_ENERGY,10);
            //console.log('ERROR, HARVESTER FULL');
        }

    },
    
    harvestSouth: function(creep)
    {
        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
	    }
	    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.upgrading = true;
	    }
        if(!creep.memory.upgrading && creep.ticksToLive > TTL_failsafe) 
        {
            if(creep.room.name != SOUTHROOM)
            {
                var exitDir = Game.map.findExit(creep.room.name, SOUTHROOM);
                var Exit = creep.pos.findClosestByPath(exitDir);
                creep.moveTo(Exit);
            }
            else
            {
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);//, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            return true;
        }
        else
        {
            return false;
        }
        
    },
    
    reserveSouth: function(creep)
    {
        if(creep.room.name != SOUTHROOM)
        {
            var exitDir = Game.map.findExit(creep.room.name, SOUTHROOM);
            var Exit = creep.pos.findClosestByPath(exitDir);
            creep.moveTo(Exit);
        }
        else
        {
            if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(creep.room.controller);
            }
        }
    },
    
    fight: function(creep,target)
    {
        if(target == 'creeps')
        {
            var targets = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
        }
        else if(target == 'spawn')
        {
            var targets = creep.pos.findClosestByPath(FIND_HOSTILE_SPAWNS);
        }
        else if(target == 'buildings')
        {
            var targets = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES);
        }
        //console.log(targets);
		if (targets) 
		{
		    //console.log('CHAAAARGGEEEE!!!');
			creep.moveTo(targets);
			creep.attack(targets);
			return true;
		}
		else
		{
		    return false;
		}
    },
    
    changeRoom:function(creep,gotoRoom)
    {
        if(creep.room.name != gotoRoom)
        {
            var exitDir = Game.map.findExit(creep.room.name, gotoRoom);
            var Exit = creep.pos.findClosestByPath(exitDir);
            creep.moveTo(Exit, {visualizePathStyle: {stroke: '#ff0000'}});
            //console.log('GO SOUTH');
            return true;
        }
        else
        {
            if(creep.pos.y == 0)
            {
                creep.move(BOTTOM);
            }
            else if(creep.pos.y == 49)
            {
                creep.move(TOP);
            }
            else if(creep.pos.x == 0)
            {
                creep.move(RIGHT);
            }
            else if(creep.pos.x == 49)
            {
                creep.move(LEFt);
            }
            return false;
        }
    }
}

