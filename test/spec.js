import * as chai from 'chai'
import Rolling from '../src/index.js'
const should = chai.should()

describe('roll-reduce', () => {

  it('should push values', () => {
    const rolling = Rolling()
    rolling.should.have.property('push')
    rolling.push(0)
    rolling.push(1)
    rolling.push(2)
  })

  it('should have a length', () => {
    const rolling = Rolling()
    rolling.push(0)
    rolling.push(1)
    rolling.push(2)
    rolling.length().should.equal(3)
  })

  it('should limit the length to the given size', () => {
    const rolling = Rolling(3)
    rolling.push(0)
    rolling.push(1)
    rolling.push(2)
    rolling.push(3)
    rolling.push(4)
    rolling.length().should.equal(3)
  })

  it('should calculate the rolling sum', () => {
    const sum = (x, y) => x + y
    const rolling = Rolling(3, sum)
    rolling.push(1)
    rolling.reduce().should.equal(1)
    rolling.push(2)
    rolling.reduce().should.equal(3)
    rolling.push(3)
    rolling.reduce().should.equal(6)
    rolling.push(4)
    rolling.reduce().should.equal(9)
    rolling.push(5)
    rolling.reduce().should.equal(12)
  })

  it('should have sum built-in', () => {
    const rolling = Rolling(3)
    rolling.push(1)
    rolling.sum().should.equal(1)
    rolling.push(2)
    rolling.sum().should.equal(3)
    rolling.push(3)
    rolling.sum().should.equal(6)
    rolling.push(4)
    rolling.sum().should.equal(9)
    rolling.push(5)
    rolling.sum().should.equal(12)
  })

  it('should have average built-in', () => {
    const rolling = Rolling(3)
    rolling.push(1)
    rolling.average().should.equal(1)
    rolling.push(2)
    rolling.average().should.equal(1.5)
    rolling.push(3)
    rolling.average().should.equal(2)
    rolling.push(4)
    rolling.average().should.equal(3)
    rolling.push(5)
    rolling.average().should.equal(4)
  })

})
