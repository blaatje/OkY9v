module.exports =
{
    test1: function(creep)
    {
        var creep = Game.creeps.soldier18945629;

		var source = creep.pos.findClosestByRange(FIND_SOURCES, {
			filter: function(source)
			{
				if(Memory.sources[source.id] == undefined)
					return true;

				if(Game.getObjectById(Memory.sources[source.id].miner) == null)
					return true;

				return false;
			}
        });
        
        if(Memory.sources[source.id] == undefined)
			Memory.sources[source.id] = { id: source.id };
		Memory.sources[source.id].miner = creep.id;
        Memory.sources[source.id].loc = source.pos;
        console.log(source);
        return(true);
    }
}


