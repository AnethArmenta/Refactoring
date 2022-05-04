const FizzbuzzService = require("./../lib/services/FizzbuzzService")
describe("Test para Fizzbuzz Service", () => {
    test("Refactorizar Fizz", () =>{
          const explorers = {name: "Woopa1", score:1}
          const explorersInNode = FizzbuzzService.applyValidationInExplorer(explorers) 
          expect(explorersInNode).toMatchObject({"name": "Woopa1", "score":1})
        
    });
});