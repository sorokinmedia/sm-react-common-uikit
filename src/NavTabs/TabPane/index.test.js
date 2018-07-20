import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import TabPane from './index'

configure({ adapter: new Adapter() })

function Element() {
	return <div className="element">Element</div>
}

function setup(customProps, lifeCycle = false) {
	const props = {
		...customProps
	}
	const container = shallow(<TabPane {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('TabPane component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have specified first tag and class', () => {
		const { container } = setup()
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('tab-content')
	})
	it('should have string inside tab-content', () => {
		const { container } = setup({ content: 'content' })
		expect(container.first().text()).toEqual('content')
	})
	it('should have number inside tab-content', () => {
		const { container } = setup({ content: 123 })
		expect(container.first().text()).toEqual('123')
	})
	it('should have component inside tab-content', () => {
		const { container } = setup({ content: <Element /> })
		expect(container.find(Element).exists()).toEqual(true)
	})
})
