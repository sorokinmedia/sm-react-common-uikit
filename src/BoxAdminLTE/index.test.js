import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import BoxAdminLTE from './index'

configure({ adapter: new Adapter() })
let spy

function Element() {
	return <div>element</div>
}

function setup(customProps, lifeCycle = false) {
	const props = {
		className: 'class',
		title: 'title',
		body: <Element />,
		...customProps
	}
	const container = shallow(<BoxAdminLTE {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('BoxAdminLTE component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})


	it('should have specified first tag and class', () => {
		const { container } = setup({ isCollapsed: true })
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('box-admin-lte box box-solid class collapsed-box')
	})

	it('should have BoxHeader within', () => {
		BoxAdminLTE.prototype.handleBoxToggle = jest.fn()
		const { container, props } = setup({
			isCollapsed: true,
			pullRight: <Element />,
			header: <Element />
		})
		expect(container.find('.box-admin-lte BoxHeader').exists()).toEqual(true)
		expect(container.find('.box-admin-lte BoxHeader').prop('title')).toEqual(props.title)
		expect(container.find('.box-admin-lte BoxHeader').prop('sign')).toEqual('plus')
		expect(container.find('.box-admin-lte BoxHeader').prop('header')).toEqual(props.header)
		const instance = container.instance()
		const clickSpy = jest.spyOn(instance, 'handleBoxToggle')
		instance.handleBoxToggle()
		instance.forceUpdate()
		container.update()
		expect(clickSpy).toHaveBeenCalled()
	})
})
