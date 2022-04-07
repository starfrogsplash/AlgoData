interface OrgInfo {
    lowestCommonManager: Node | null
    numImportantReports: number
}

class Node {
    name: string
    directReports: Node[]
    constructor(name: string) {
        this.name = name
        this.directReports = []
    }

    addChild = (name: string): this => {
        this.directReports.push(new Node(name))
        return this
    }
}

const getLowestCommonManager = (topManager: Node, reportOne: Node, reportTwo: Node) => {
    return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}

const getOrgInfo = (manager: Node, reportOne: Node, reportTwo: Node): OrgInfo => {
    let numImportantReports = 0
    for (const directReport of manager.directReports) {
        const orgInfo = getOrgInfo(directReport, reportOne, reportTwo)
        if (orgInfo.lowestCommonManager) return orgInfo;
        numImportantReports += orgInfo.numImportantReports;
    }
    if (manager === reportOne || manager === reportTwo) numImportantReports++;
    const lowestCommonManager = numImportantReports === 2 ? manager : null;
    return { lowestCommonManager, numImportantReports };
}


export {
    Node,
    getLowestCommonManager
}
