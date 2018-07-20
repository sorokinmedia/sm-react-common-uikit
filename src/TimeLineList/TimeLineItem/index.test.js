import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import TimeLineItem from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		data: { message: <div>message</div>, created_at: '12312124' },
		wrapClassName: 'wrap',
		leftIconClass: 'left-icon',
		leftIconContent: 1,
		itemHeader: 'header',
		itemButton: 'button',
		...customProps
	}
	const container = shallow(<TimeLineItem {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('TimeLineItem component', () => {

	const { container } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should have li tag first with class wrapClassName', () => {
		expect(container.first().type()).toEqual('li')
		expect(container.first().props().className).toEqual('wrap')
	})

	it('should have i tag with specified class and test', () => {
		expect(container.find('.wrap > i.left-icon').exists()).toEqual(true)
		expect(container.find('.wrap > i.left-icon').text()).toBe('1')
	})

	it('should have div with className timeline-item', () => {
		expect(container.find('.wrap > .timeline-item').exists()).toEqual(true)
	})

	it('should have span with class time', () => {
		expect(container.find('.wrap > .timeline-item span.time').exists()).toEqual(true)
	})

	it('should span.time have created_at inside ', () => {
		expect(container.find('li.wrap > .timeline-item span.time').text()).toEqual('12312124')
	})

	it('should have h3 with className timeline-header', () => {
		expect(container.find('h3.timeline-header').exists()).toEqual(true)
		expect(container.find('h3.timeline-header').text()).toEqual('header')
	})

	it('should have timeline-body', () => {
		expect(container.find('.timeline-body').exists()).toEqual(true)
		expect(container.find('.timeline-body').text()).toEqual('message')
	})

	it('should have timeline-footer', () => {
		expect(container.find('.timeline-footer').exists()).toEqual(true)
		expect(container.find('.timeline-footer').text()).toEqual('button')
	})

})
