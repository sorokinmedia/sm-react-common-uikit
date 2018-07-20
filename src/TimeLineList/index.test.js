import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import TimeLineList from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		showStartPoint: true,
		map: 'map',
		...customProps
	}
	const container = shallow(<TimeLineList {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('TimeLineList component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have front-timeline class', () => {
		const { container } = setup()
		expect(container.find('ul.front-timeline').hasClass('timeline')).toEqual(true)
	})
	it('should have li inside ul ', () => {
		const { container } = setup()
		expect(container.find('ul li i').exists()).toEqual(true)
	})
	it('should have class start within i', () => {
		const { container } = setup({
			startPointClass: 'start'
		})
		expect(container.find('ul li i').hasClass('start')).toEqual(true)
	})
	it('should have default class  start within i', () => {
		const { container } = setup()
		expect(container.find('ul li i').hasClass('fa fa-clock-o bg-gray')).toEqual(true)
	})

})
