goog.provide('z.common.data.ClientEndTurn');

/**
 * @param {!mugd.utils.guid} actorId
 * @param {number} turn
 * @param {!Array.<!z.common.entities.Project>} projects
 * @constructor
 */
z.common.data.ClientEndTurn = function (actorId, turn, projects) {
  this.actorId = actorId;
  this.turn = turn;
  this.projects = projects;
};

/**
 * @param {!z.common.protocol.clientEndTurn} protocol
 * @return {!z.common.data.ClientEndTurn}
 */
z.common.data.ClientEndTurn.fromProtocol = function (protocol) {
  return new z.common.data.ClientEndTurn(
      protocol['actorId'],
      protocol['turn'],
      goog.array.map(protocol['projects'], function (projectData) {
        return projectData.fromProtocol()
      })
  );
};

z.common.data.ClientEndTurn.prototype.toProtocol = function () {
  return {
    'actorId': this.actorId,
    'turn': this.turn,
    'projects': goog.array.map(this.projects, function (project) {
      return z.common.data.ProjectData.toProtocol(project)
    })
  };
};