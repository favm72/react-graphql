import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-17-updated"
import Routes from "./Routes"
import Header from "./Header"
import Footer from "./Footer"

configure({adapter: new Adapter()})

describe("Routes", () => {

    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Routes />)
    })

    it("should have a header", () => {        
        expect(wrapper.find(Header)).toHaveLength(1)
    })

    it("should have a Footer", () => {        
        expect(wrapper.find(Footer)).toHaveLength(1)
    })   
})
