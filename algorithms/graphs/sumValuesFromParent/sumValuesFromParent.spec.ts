import { sumValuesFromParent } from "./sumValuesFromParent";

class graphNode {
    name: string
    value: number
    children: graphNode[]

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
        this.children = [];
      }
    
      addChild(name: string, value: number) {
        this.children.push(new graphNode(name, value));
        return this;
      }
}


xit('returns 21', () => {

    const graph = new graphNode('A', 2)
    graph.addChild('B', 3).addChild('C', 4)
    graph.children[0].addChild('E', 5).addChild('F', 6)

    graph.children[0].children[1].addChild('G', 7)

    const visualGraph = JSON.stringify(graph, null, 2)

    // console.log(visualGraph)

    expect(sumValuesFromParent(graph, 'B')).toEqual(21)
})