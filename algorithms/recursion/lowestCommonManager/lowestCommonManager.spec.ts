import treeify from "treeify";
import { Node, getLowestCommonManager } from './lowestCommonManager'


describe('returns lowest common manager between 2 nodes', () => {

    it('returns manager B', () => {
        const graph = new Node('A')
        graph.addChild("B").addChild("C").addChild("D")
        graph.directReports[0].addChild("E").addChild("F");

        // const code = treeify.asTree(graph, true, true);
        // console.log("result==", code);

       // console.log('graph===', JSON.stringify(graph, null, 2))
        const nodeF = graph.directReports[0].directReports[1]
        const nodeE = graph.directReports[0].directReports[0]

        expect(getLowestCommonManager(graph, nodeE, nodeF)).toEqual(graph.directReports[0]);
    })

    it('returns root A', () => {
        const graph = new Node('A')
        graph.addChild("B").addChild("C").addChild("D")
        graph.directReports[0].addChild("E").addChild("F");

      //  console.log('graph===', JSON.stringify(graph, null, 2))
        const nodeC = graph.directReports[1]
        const nodeF = graph.directReports[0].directReports[1]
    
        expect(getLowestCommonManager(graph, nodeC, nodeF)).toEqual(graph);
    })
        
})





