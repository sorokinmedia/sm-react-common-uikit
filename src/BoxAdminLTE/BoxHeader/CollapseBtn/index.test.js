import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import CollapseBtn from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		sign: 'some',
		...customProps
	}
	const container = shallow(<CollapseBtn {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('CollapseBtn component', () => {

	const { container } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should have specified first tag and class and props', () => {
		expect(container.first().type()).toEqual('button')
		expect(container.first().props().className).toEqual('btn btn-box-tool')
		expect(container.first().props().type).toEqual('button')
		expect(container.first().props().id).toEqual('btn-collapse-sign')
		expect(container.first().props()['data-widget']).toEqual('collapse')
	})

	it('should have i tag', () => {
		expect(container.find('button i.fa.fa-some').exists()).toEqual(true)
	})

})
