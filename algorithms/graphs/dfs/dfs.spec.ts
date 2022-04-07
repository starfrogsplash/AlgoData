import {Node} from './dfs'

describe('dfs', () => {
    it("returns 'F', 'E', 'D', 'C', 'B', 'A'", () => {
        const graph = new Node('A')
        graph.addChild("B").addChild("C").addChild("D");
        graph.children[0].addChild("E").addChild("F");
        expect(graph.depthFirstSearch([])).toEqual(['A', 'B', 'E', 'F', 'C', 'D'])
    })

})