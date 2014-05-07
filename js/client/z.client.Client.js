goog.provide('z.client.Client');

goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('goog.events.EventTarget');

goog.require('z.client');
goog.require('z.service');
goog.require('z.common');

goog.require('z.client.ui.widget.MapWidget');
goog.require('z.client.ui.widget.GameSessionWidget');
goog.require('z.client.ui.widget.ContextMenuWidget');
goog.require('z.client.ui.widget.MessageLogWidget');

goog.require('z.client.ActionFactory');
goog.require('z.client.GameSession');
goog.require('z.client.User');
goog.require('z.client.WorldProxy');

goog.require('z.client.facet.Gem');
goog.require('z.client.facet.MapFacet');
goog.require('z.client.facet.ContextMenuFacet');
goog.require('z.client.facet.ToolbarFacet');
goog.require('z.client.facet.InfoFacet');
goog.require('z.client.facet.MessageLogFacet');
goog.require('z.client.facet.ProjectListFacet');
goog.require('z.client.facet.ActorFacet');

goog.require('z.client.actions.EndTurn');

goog.require('z.common.rulebook.Rulebook');
goog.require('z.common.rulebook.CharacterGenerator');
goog.require('z.service.world.CharacterFactory');

goog.require('z.common.EntityRepository');

goog.require('z.common.entities.Project');
goog.require('z.common.entities.Actor');
goog.require('z.common.entities.Tile');
goog.require('z.common.entities.Project');

goog.require('mugd.injector.Injector');


/**
 * @param {!string} targetId
 * @extends {goog.events.EventTarget}
 * @constructor
 */
z.client.Client = function (targetId) {
  this.login();
  this.targetElement = goog.dom.getElement(targetId);
};

goog.inherits(z.client.Client, goog.events.EventTarget);

z.client.Client.prototype.run = function () {
  // todo: 1. Show main menu
  // todo: 2. Choose game state
  // todo: 3. Start game.
  var self = this;
  goog.net.XhrIo.send('../ruleset/main.json', function (r) {
    var ruleset = r.target.getResponseJson();
    console.log('ruleset', ruleset);
    goog.net.XhrIo.send('../ruleset/textures.json',
      function (t) {
        var textures = t.target.getResponseJson();
        console.log('textures', textures);
        self.startNewGame(ruleset, textures);
      }
    );
  });
};

z.client.Client.prototype.login = function () {
  // todo: 0. login user
  this.user = new z.client.User();
  this.user.name = 'John Doe';
};

z.client.Client.prototype.startNewGame = function (ruleset, textures) {

  var injector = new mugd.injector.Injector();
  injector.addResource(z.common.Resources.RULESET, ruleset);
  injector.addProvider(z.common.Resources.REPOSITORY, z.common.EntityRepository);
  injector.addProvider(z.common.Resources.WORLD, z.client.WorldProxy);
  injector.addProvider(z.common.Resources.RULEBOOK, z.common.rulebook.Rulebook);
  injector.addResource(z.client.Resources.TEXTURES, textures);
  injector.addResource(z.client.Resources.IMAP, IsogenicMap);
  injector.addResource(z.client.Resources.WORLD_SERVICE, z.client.Client.initWorldService);
  injector.addProvider(z.client.Resources.MAP_WIDGET, z.client.ui.widget.MapWidget);
  injector.addProvider(z.client.Resources.GAME_SESSION_WIDGET, z.client.ui.widget.GameSessionWidget);
  injector.addProvider(z.client.Resources.CONTEXT_MENU_WIDGET, z.client.ui.widget.ContextMenuWidget);
  injector.addProvider(z.client.Resources.MESSAGE_LOG_WIDGET, z.client.ui.widget.MessageLogWidget);
  injector.addProvider(z.client.Resources.GEM, z.client.facet.Gem);
  injector.addProvider(z.client.Resources.ACTION_FACTORY, z.client.ActionFactory);
  injector.addProvider(z.client.Resources.MAP_FACET, z.client.facet.MapFacet);
  injector.addProvider(z.client.Resources.CONTEXT_MENU_FACET, z.client.facet.ContextMenuFacet);
  injector.addResource(z.client.Resources.GAME_DOM_ELEMENT, this.targetElement);
  injector.addResource(z.client.Resources.CURRENT_TARGET, ko.observable());
  injector.addResource(z.client.Resources.CURRENT_ACTION, ko.observable());
  injector.addProvider(z.client.Resources.TOOLBAR_FACET, z.client.facet.ToolbarFacet);
  injector.addProvider(z.client.Resources.INFO_FACET, z.client.facet.InfoFacet);
  injector.addProvider(z.client.Resources.MESSAGE_LOG_FACET, z.client.facet.MessageLogFacet);
  injector.addProvider(z.client.Resources.END_TURN_ACTION, z.client.actions.EndTurn);
  injector.addProvider(z.client.Resources.PROJECT_LIST_FACET, z.client.facet.ProjectListFacet);

  injector.addProvider(z.client.Resources.PLAYER_FACET, z.client.facet.ActorFacet);
  injector.addFactory(z.common.rulebook.category.PROJECT, z.common.entities.Project);
  injector.addFactory(z.common.rulebook.category.TILE, z.common.entities.Tile);
//  injector.addFactory(z.common.rulebook.category.ITEM, function(){throw 'not implemented] = item'});
//  injector.addFactory(z.common.rulebook.category.CHARACTER, function(){throw 'not implemented] = character'});
//  injector.addFactory(z.common.rulebook.category.ASSET, function(){throw 'not implemented] = asset'});
  injector.addFactory(z.common.rulebook.category.ACTOR, z.common.entities.Actor);

//  injector.addFactory(z.common.rulebook.category.TECH, function(){throw 'not implemented] = tech'});
  this.session = injector.Compose(z.client.GameSession).New();

  this.session.start();

};

z.client.Client.initWorldService = function (ruleset) {
  // TODO: add server
  var injector = new mugd.injector.Injector();
  injector.addResource(z.common.Resources.RULESET, ruleset);
  injector.addProvider(z.common.Resources.WORLD, z.service.world.World);
  injector.addProvider(z.common.Resources.RULEBOOK, z.common.rulebook.Rulebook);
  injector.addProvider(z.common.Resources.CHARACTER_GENERATOR, z.service.world.CharacterGenerator);
  // TODO: create these classes
  injector.addProvider(z.common.Resources.CHARACTER_FACTORY, z.service.world.CharacterFactory);
  injector.addProvider(z.common.Resources.REPOSITORY, z.common.EntityRepository);
  injector.addProvider(z.service.Resources.TERRAIN_GENERATOR, z.service.world.RandomTerrainGenerator);
  injector.addResource(z.service.Resources.TERRAIN_SEED, 'ASDGW3E45RG');

  injector.addFactory(z.common.rulebook.category.PROJECT, z.common.entities.Project);
  injector.addFactory(z.common.rulebook.category.TILE, z.common.entities.Tile);
//  injector.addFactory(z.common.rulebook.category.ITEM, function(){throw 'not implemented] = item'});
//  injector.addFactory(z.common.rulebook.category.CHARACTER, function(){throw 'not implemented] = character'});
//  injector.addFactory(z.common.rulebook.category.ASSET, function(){throw 'not implemented] = asset'});
  injector.addFactory(z.common.rulebook.category.ACTOR, z.common.entities.Actor);
//  injector.addFactory(z.common.rulebook.category.TECH, function(){throw 'not implemented] = tech'});

  return injector.getResource(z.common.Resources.WORLD);
};

