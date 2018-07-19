import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { Spoiler } from '../Spoiler'
import toggleOpen from './toggleOpen'

configure({ adapter: new Adapter() })

describe('ToggleOpen component', () => {
	const WrappedComponent = toggleOpen(Spoiler, true)
	const container = (shallow(<WrappedComponent />))
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should set default state', () => {
		expect(container.state('isOpen')).toEqual(true)
	})

	it('toggleOpen change state', () => {
		container.props().toggleOpen()
		expect(container.state('isOpen')).toEqual(false)
	})
})
