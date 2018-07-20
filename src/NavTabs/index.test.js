import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import NavTabs from './index'

configure({ adapter: new Adapter() })
let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		headTabs: [
			{ title: 'first', key: 'f1' },
			{ title: 'second', key: 2 }
		],
		tabPanes: [
			{ key: 'f1', content: 'content' },
			{ key: 2, content: 'second content' }
		],
		className: 'class',
		...customProps
	}
	const container = shallow(<NavTabs {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('NavTabs component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toEqual(true)
	})
	describe('specified block structure', () => {

		it('should have specified first tag and class', () => {
			const { container } = setup()
			expect(container.first().type()).toEqual('div')
			expect(container.first().props().className).toEqual('nav-tabs-custom class')
		})

		it('should have ul', () => {
			const { container } = setup()
			expect(container.find('.nav-tabs-custom ul.nav.nav-tabs').exists()).toEqual(true)
			expect(container.find('.nav-tabs-custom ul.nav.nav-tabs HeadTab').exists()).toEqual(true)
			expect(container.find('.nav-tabs-custom ul.nav.nav-tabs HeadTab').first().props().tabName).toEqual('first')
			expect(container.find('.nav-tabs-custom ul.nav.nav-tabs HeadTab').last().props().tabName).toEqual('second')
		})
	})

	it('should call handleNavTabClick', () => {

		const headTabs = [
			{ title: 'first', key: 'keyfirst' },
			{ title: 'second', key: 'keysecond' }
		]
		const tabPanes = [
			{ key: 'keyfirst', content: 'contents' },
			{ key: 'keysecond', content: 'second content' }
		]

		mount(<NavTabs headTabs={headTabs} tabPanes={tabPanes} />)
		spy = jest.spyOn(NavTabs.prototype, 'componentDidMount')
		const { container } = setup()
		expect(NavTabs.prototype.componentDidMount).toHaveBeenCalled()
		NavTabs.prototype.componentDidMount.mockClear()
	})

})
