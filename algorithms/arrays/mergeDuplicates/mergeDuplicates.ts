interface addresses {
    name: string;
    items: number;
}

const mergeDuplicates = (addresses: addresses[]) => {
    const entries: addresses[] = []
    addresses.forEach(record => {
        let duplicate = entries.find(res => res.name === record.name)
        if(duplicate){
            duplicate = { ...duplicate, items: record.items + duplicate.items}
            const indexOfDuplicate = entries.findIndex(item => item.name === record.name )
            entries[indexOfDuplicate] = duplicate
        }else{
            entries.push({...record})
        }
    })

    // console.log(entries)
    return entries
}

export {
    mergeDuplicates
}
