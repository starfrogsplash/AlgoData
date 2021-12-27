
class GraphNode {
    name: string
    value: number
    children: GraphNode[]

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
        this.children = [];
      }
    
      addChild(name: string, value: number) {
        this.children.push(new GraphNode(name, value));
        return this;
      }
}


const sumValuesFromParent = (graph: GraphNode, parent: string) => {

// let sum = 0

   if(graph.name === parent){
    return { name:graph.name, value: graph.value }
}
      for(const child of graph.children){
          const node: any = sumValuesFromParent(child, parent)
    
      }
  
   return false
}


export {
    sumValuesFromParent
}