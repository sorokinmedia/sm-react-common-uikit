import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Input from './index'

configure({ adapter: new Adapter() })
const spy = jest.fn()

function setup(customProps, lifeCycle = false) {
	const props = {
		onChange: spy,
		...customProps
	}
	const container = shallow(<Input {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('Input component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have form tag', () => {
		const { container } = setup()
		expect(container.find('form').exists()).toEqual(true)
		expect(container.find('form input').exists()).toEqual(true)
	})

	it('should call onBlur', () => {
		const { container } = setup({ inputProps: { onBlur: jest.fn(), value: 'some value' } })
		const instance = container.instance()
		const clickSpy = jest.spyOn(instance.props, 'onChange')
		const onBlurSpy = jest.spyOn(instance, 'onBlur')
		instance.forceUpdate()
		container.update()
		container.find('form input').simulate('blur')
		expect(onBlurSpy).toHaveBeenCalled()
		expect(clickSpy).toHaveBeenCalled()
	})

	it('should call onKeyDown', () => {
		const { container } = setup()
		const instance = container.instance()
		const onChangeSpy = jest.spyOn(instance, 'onKeyDown')
		instance.forceUpdate()
		container.update()
		container.find('form input').simulate(
			'change',
			{ nativeEvent: { target: { value: 'some' } } }
		)
		expect(onChangeSpy).toHaveBeenCalled()
		expect(container.state('value')).toEqual('some')
	})

	it('should set state inside componentDidMount', () => {
		const { container } = setup({ value: 'initial value' })
		expect(container.state('value')).toEqual('initial value')
	})

	it('should getDerivedStateFromProps work properly', () => {
		const givenProps = { value: '' }
		const givenState = { value: 'value' }
		const result = Input.getDerivedStateFromProps(givenProps, givenState)
		expect(result).toEqual({ value: 'value' })
	})

})
