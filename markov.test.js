const markov = require('./markov.js')


test('Test that markov generates chain', ()=>{
    mark = new markov.MarkovMachine("Test Text used only for testing")
    mark.makeChains()
    expect(mark.makeText(20)).toContain("testing")
})