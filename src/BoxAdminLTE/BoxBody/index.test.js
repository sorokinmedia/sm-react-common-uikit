import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import BoxBody from './index'

configure({ adapter: new Adapter() })
let spy

function Body() {
	return <div className="bodies">body</div>
}

function setup(customProps, lifeCycle = false) {
	const props = {
		body: <Body />,
		link: { url: 'http', text: 'text' },
		...customProps
	}
	const container = shallow(<BoxBody {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}


describe('BoxBody component', () => {

	const { container } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})


	it('should have specified first tag and class', () => {
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('box-body')
	})
	it('should have Body element', () => {
		expect(container.find('.box-body Body').dive().text()).toEqual('body')
	})

	it('should p tag with specified class', () => {
		expect(container.find('.box-body p.pull-right a').exists()).toEqual(true)
		expect(container.find('.box-body p.pull-right a').prop('href')).toEqual('http')
		expect(container.find('.box-body p.pull-right a').text()).toEqual('text')
		expect(container.find('.box-body p.pull-right a i').hasClass('fa fa-arrow-right')).toEqual(true)
	})
})
