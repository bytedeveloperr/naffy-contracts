const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Naffy", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Naffy = await ethers.getContractFactory("Naffy")
    const naffy = await Naffy.deploy("Hello, world!")
    await naffy.deployed()

    expect(await naffy.greet()).to.equal("Hello, world!")

    const setGreetingTx = await naffy.setGreeting("Hola, mundo!")

    // wait until the transaction is mined
    await setGreetingTx.wait()

    expect(await naffy.greet()).to.equal("Hola, mundo!")
  })
})
