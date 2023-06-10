/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
    describe('with ports and ships', () => {
    let port;
    let ship;

        beforeEach(() => {
            port = new Port('Dover');
            ship = {};
        });

        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });

        it('has a name', () => {
            expect(port.portName).toBe('Dover');
        });

        it('can add a ship', () => {
            port.addShip(ship);
    
            expect(port.ships).toContain(ship);
        });

        it('can remove a ship', () => {
            const titanic = {};
            const queenMary = {};
    
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);
    
            expect(port.ships).toEqual([titanic]);
        });
    });
});