
function Ship(currentPort) {
    this.currentPort = currentPort;
    this.previousPort = null;
};

Ship.prototype.setSail = function() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
};

Ship.prototype.dock = function(port) {
    this.currentPort = port;
};
module.exports = Ship