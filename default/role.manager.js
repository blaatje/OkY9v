var roleHarvester = require('role.harvester');
var roleHarvester2 = require('role.harvester2');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleCarrier = require('role.carrier');
var roleCarrier2 = require('role.carrier2');
var roleTasks = require('role.tasks');
var manageMining = require('manage.mining');

module.exports =
{
    divider: function(creep)
    {
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if(creep.memory.role == 'harvester1') {
                manageMining.harvester(creep);
            }
            if(creep.memory.role == 'upgrader') {
                this.upgrader(creep);
            }
            if(creep.memory.role == 'builder') {
                this.builder(creep);
            }
            if(creep.memory.role == 'carrier1') {
                this.carrier1(creep);
            }
            if(creep.memory.role == 'carrier2') {
                this.carrier2(creep);
            }
            if(creep.memory.role == 'carrierTower'){
                this.carrierTower(creep);
            }
            if(creep.memory.role == 'harvester2') {
                manageMining.harvester(creep);//roleHarvester2.run(creep);
            }
            if(creep.memory.role == 'southReserver'){
                this.southReserver(creep);
            }
            if(creep.memory.role == 'staticUpgrader'){
                this.staticUpgrader(creep);
            }
            if(creep.memory.role == 'soldier'){
                this.soldier(creep);
            }
        }
    },
    
    builder: function(creep)
    {
        if(roleTasks.pickup_1(creep))
        {
            creep.memory.task = 'pickup';//console.log('pickup');
        }
        else if(roleTasks.construct(creep))
        {
            creep.memory.task = 'construct';//console.log('construct');
        }
        else if(roleTasks.fillContainer(creep))
        {
            creep.memory.task = 'fillContainer';//console.log('construct');
        }
        else
        {
            roleTasks.upgrade(creep);
            creep.memory.task = 'upgrade';//console.log('upgrade');
        }
    },
    
    carrier1: function(creep)
    {
        if(roleTasks.pickup_1(creep))
        {
            creep.memory.task = 'pickup';//console.log('pickup');
        }
        else if(roleTasks.fillSpawner(creep))
        {
            creep.memory.task = 'fillSpawner';//console.log('construct');
        }
        else if(roleTasks.fillContainer(creep))
        {
            creep.memory.task = 'fillContainer';//console.log('construct');
        }
        else if(roleTasks.construct(creep))
        {
            creep.memory.task = 'construct';//console.log('construct');
        }
        else
        {
            roleTasks.upgrade(creep);
            creep.memory.task = 'upgrade';//console.log('upgrade');
        }
    },
    
    carrier2: function(creep)
    {
        if(roleTasks.pickup_2(creep))
        {
            creep.memory.task = 'pickup';//console.log('pickup');
        }
        else if(roleTasks.fillSpawner(creep))
        {
            creep.memory.task = 'fillSpawner';//console.log('construct');
        }
        else if(roleTasks.fillContainer(creep))
        {
            creep.memory.task = 'fillContainer';//console.log('construct');
        }
        else if(roleTasks.construct(creep))
        {
            creep.memory.task = 'construct';//console.log('construct');
        }
        else
        {
            roleTasks.upgrade(creep);
            creep.memory.task = 'upgrade';//console.log('upgrade');
        }
    },
    
    carrierTower: function(creep)
    {
         if(roleTasks.pickup_1(creep))
        {
            creep.memory.task = 'pickup';//console.log('pickup');
        }
        else if(roleTasks.fillTower(creep))
        {
            creep.memory.task = 'fillTower';//console.log('fillTower');
        }
        else if(roleTasks.fillSpawner(creep))
        {
            creep.memory.task = 'fillSpawner';//console.log('construct');
        }
        else if(roleTasks.fillContainer(creep))
        {
            creep.memory.task = 'fillContainer';//console.log('construct');
        }
        else if(roleTasks.construct(creep))
        {
            creep.memory.task = 'construct';//console.log('construct');
        }
        else
        {
            roleTasks.upgrade(creep);
            creep.memory.task = 'upgrade';//console.log('upgrade');
        }
    },
    
    upgrader: function(creep)
    {
        if(roleTasks.harvestSouth(creep))
        {
            creep.memory.task = 'harvest';//console.log('pickup');
        }
        //else if(roleTasks.construct(creep))
        //{
        //    creep.memory.task = 'construct';//console.log('construct');
        //}
        else if(roleTasks.fillContainer(creep))
        {
            creep.memory.task = 'fillContainer';//console.log('upgrade');
        }
        else
        {
            roleTasks.upgrade(creep);
            creep.memory.task = 'upgrade';//console.log('upgrade');
        }
        
    },
    
    staticUpgrader: function(creep)
    {
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_CONTAINER);
                }
        });
        //console.log(targets);
        if(creep.carry.energy < 10)
        {
            if(creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
            {
                
                creep.moveTo(targets[0]);
            }
        }
        roleTasks.upgrade(creep);
        //creep.upgradeController(creep.room.controller);
    },
    
    harvester: function(creep)
    {
       roleTasks.staticHarvest(creep);
       
    },
    
    southReserver: function(creep)
    {
        roleTasks.reserveSouth(creep);
    },
    
    soldier: function(creep)
	{
	    if(!roleTasks.changeRoom(creep,ATTACKROOM))
	    {
	        var target = 'creeps';
	        roleTasks.fight(creep,target);
	    }
	}
}