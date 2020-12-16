const enhancer = require('./enhancer.js');


// test away!
describe('sanity check', () => {
    it('works', () => {
        expect(2 + 2).toBe(4)
    })
    it('everything working', () => {
        expect({}).not.toBe({})
        expect({}).toEqual({})
    })
})

describe('functions are available', () => {
    it('success function exists', () => {
        expect(enhancer.success).toBeDefined()
    })
    it('fail function exists', () => {
        expect(enhancer.fail).toBeDefined()
    })
    it('repair function exists', () => {
        expect(enhancer.repair).toBeDefined()
    })
    it('get function exists', () => {
        expect(enhancer.get).toBeDefined()
    })
})

describe('Using Functions', () => {
    let item
    beforeEach(() => {
        item = {
            name: "Long Sword",
            durability: 80,
            enhancement: 16,
        }
    })
    it('item is repaired', () => {
        expect(enhancer.repair(item)).toEqual({
            name: 'Long Sword',
            durability: 100,
            enhancement: 16
        })
    })
    it('item is enhanced', () => {
        expect(enhancer.success(item)).toEqual({
            name: 'Long Sword',
            durability: 80,
            enhancement: 17
        })
    })
    it('item is failed', () => {
        expect(enhancer.fail(item)).toEqual({
            name: 'Long Sword',
            durability: 70,
            enhancement: 16
        })
    })
})