
class GraphNode {
    name: string
    children: GraphNode[]

    constructor(name: string) {
        this.name = name;
        this.children = [];
      }
}


const findNode = (graph: GraphNode, value: string): string | boolean => {

        if(graph.name === value){
            return graph.name
        }

        for(const child of graph.children){
            const foundName = findNode(child, value)
            if( foundName){
                return foundName
            } 
        }

return false
}


const findNodeStack = (graph: GraphNode, value: string): string | boolean => {
const stack = []
    stack.push(graph);

    while (stack.length > 0) {
        const current = stack.pop();

        if (current && current.name === value) {
            return current.name;
        }

        if (current) {
            stack.push(...current.children);
        }
    }

return false
}


const findNode2 = (graph: GraphNode, value: string): string | boolean =>
    // @ts-ignore
    graph.name === value ?
        graph.name :
        graph.children.reduce<string | boolean>((accum, child) => accum ? accum : findNode2(child, value), false);



export {
    findNode,
    findNode2,
    findNodeStack
}