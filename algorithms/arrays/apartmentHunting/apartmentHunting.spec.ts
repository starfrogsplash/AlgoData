import {apartmentHunting, apartmentHuntingB} from './apartmentHunting'

it('ass', () => {

    const blocks = [
        {
            "gym": false,
            "school": true,
            "store": false
        },
        {
            "gym": true,
            "school": false,
            "store": false
        },
        {
            "gym": true,
            "school": true,
            "store": false
        },
        {
            "gym": false,
            "school": true,
            "store": false
        },
        {
            "gym": false,
            "school": true,
            "store": true
        }
    ]

    const req = ["gym","school", "store" ]


    // expect(apartmentHunting(blocks, req)).toEqual(3)
    expect(apartmentHuntingB(blocks, req)).toEqual(3)
})