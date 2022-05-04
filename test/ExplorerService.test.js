const ExplorerService = require("./../lib/services/ExplorerService")
describe("Test para explorer service", () => {
    test(" Mostrar todos los explorer en mission: node", () =>{
          const explorers = [{mission: "node"}]
          const explorersInNode = ExplorerService.FilterByMission(explorers, "node") 
          expect(explorersInNode.length).toBe(1)
    });
     test("Mostrar la cantidad de exploresrs en node", () => {

        const explorers = [{mission: "node"}]   
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers,"node")
        expect(explorersInNode).toBe(1)
      });
    test("Mostrar los usernames de los explorers que esten en Node", () => { 
    const explorers = [{githubUsername: "Aneth", mission: "node"}]
    const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
    expect(explorersInNode).toBe(1)
  

});
});