

const pathFinder = (path: any, target: string, prefix= ''): string | null => {

    let result = null

    for (let key in path) {
        if (typeof path[key] === 'object'){
            result =  pathFinder(path[key], target, prefix ? `${prefix}.${key}` : `${key}`)

            if(result) return result

        }else if (path[key] === target){
            return`${prefix}.${key}.${path[key]}`
        }
    }

    return result
}


// const pathFinder = (path: any, target: string): any =>
//     Object.entries(path).reduce((accum, [key, node]) =>
//         typeof node === 'object' ? `${accum}${pathFinder(node, target)}` : node === target ? `${accum}.${key}.${node}` : accum, '');

export {
    pathFinder
}