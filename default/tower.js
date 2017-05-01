module.exports =
{
    tower1: function(creep)
    {
        var tower = Game.getObjectById('590541c1ab5a3f431d273f18');
        if(tower) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL && structure.hits < 120000)// < 20000)// && structure.structureType != STRUCTURE_WALL)//)//
                }
            });
            
            
            if(closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }
    
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                tower.attack(closestHostile);
            }
        }
    }
}