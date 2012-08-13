goog.provide("z.rulebook.Rulebook");

goog.require("z.rulebook.projects.SpikedPit");

z.rulebook.Rulebook = function(){
};

z.rulebook.Rulebook.prototype.possibleProjects = function(terrain){
    if(terrain === "grass"){
        return new z.rulebook.projects.SpikedPit();
    }
};