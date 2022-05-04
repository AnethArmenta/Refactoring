const ExplorerService = require("./../lib/services/ExplorerService")
describe("Test para explorer service", () => {
    test("Requerimiento 1: Mostrar todos os explorer en mission: node", () =>{
          const explorers = [{mission: "node"}]
          const explorersInNode = ExplorerService.FilterByMission(explorers, "node") 
          expect(explorersInNode.length).toBe(1)
          

    });
});