/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let dover;
        let calais;

        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            };
                
            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
            };
            
            itinerary = {
                ports: [dover, calais]
            }; 

            ship = new Ship(itinerary);
        });

        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });
    
        it('has a starting port', () => {
            expect(ship.currentPort).toBe(dover);
        });

        it('can set sail', () => {
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        });

        it('gets added to port on instantiation', () => {
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        });

        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(calais);
            expect(calais.addShip).toHaveBeenCalledWith(ship);
        });
    
        it('cannot set sail further than its itinerary', () => {
            ship.setSail();
            ship.dock();
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    });
});