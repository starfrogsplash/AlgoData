import {mergeDuplicates} from './mergeDuplicates'

describe('merge duplicate entries and combine the values of properties', () => {
    it('combines duplicates', () => {
        const addresses = [{name: 'Paul', items: 1}, {name: 'John', items: 2}, {name: 'John', items: 1}];
        const result = [{name: 'Paul', items: 1}, {name: 'John', items: 3}]
        expect(mergeDuplicates(addresses)).toEqual(result);
    })
})