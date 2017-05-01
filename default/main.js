var globals = require('global');
var tower = require('tower');
var manageSpawn = require('manage.spawn');
var roleManager = require('role.manager');
var test = require('test');

//var manageLog = require('manage.log');

                    const profiler = require('screeps-profiler');
                    
                    // This line monkey patches the global prototypes.
                    profiler.enable();
                    module.exports.loop = function() {
                      profiler.wrap(function() {

//module.exports.loop = function() {
    globals.run();
    tower.tower1();
    roleManager.divider();
    manageSpawn.run();
    //test.test1();
    });
}


//manageLog.rollingAverage();