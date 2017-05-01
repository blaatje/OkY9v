var roleTasks = require('role.tasks');

module.exports =
{
    findSource: function(creep)
    {
		var source = creep.pos.findClosestByRange(FIND_SOURCES, {
			filter: function(source)
			{
				if(Memory.sources[source.id] == undefined || Memory.sources[source.id].miner == undefined || Memory.sources[source.id].miner == creep.id)
				{
					return true;
                }
				if(Game.getObjectById(Memory.sources[source.id].miner) == null)
				{
                    return true;
				}
				else
				{
				    return false;
				}
			}
        });
        return source;
    },
    
    assignSource: function(creep)
    {
        source = this.findSource(creep);
        if(source)
        {
            if(Memory.sources[source.id] == undefined)
            {
    			Memory.sources[source.id] = { id: source.id };
            }
    		Memory.sources[source.id].miner = creep.id;
    		creep.memory.mine = source.id
        }
    },
    
    harvester: function(creep)
    {
        if(creep.memory.mine == undefined)
        {
            if(!this.assignSource(creep))
            {
                console.log('Error, too many harvesters')
            }
        }
        roleTasks.staticHarvest(creep);
    }
}



       