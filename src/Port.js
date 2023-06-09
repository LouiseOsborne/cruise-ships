
function Port(portName) {
    this.portName = portName;
    this.ships = [];
};

Port.prototype.addShip = function(ship) {
    this.ships.push(ship);
};

Port.prototype.removeShip = function(ship) {
    const ships = this.ships;
    const shipIndex = ships.indexOf(ship);

    ships.splice(shipIndex, 1);
};
module.exports = Port;