import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import ToggleOpen from './toggleOpen'

configure({ adapter: new Adapter() })

describe('ToggleOpen component', () => {

	it('should render the component', () => {
		const container = (mount(<ToggleOpen />))
		console.log(container.debug())
		expect(container.exists()).toBe(true)
	})

	it('should ', () => {
	})

//	it('should have a tag first with class order-link', () => {
//		const { container } = setup()
//		expect(container.first().type()).toEqual('a')
//		expect(container.first().props().className).toEqual('order-link')
//	})

// 	it('should have state order equals to null', () => {
// 	const { container } = setup()
// 	expect(container.state('order')).toEqual(null)
// })
// describe('after handleClick', () => {
// 	const { container } = setup({ onClick: jest.fn() })
// 	const instance = container.instance()
// 	const clickSpy = jest.spyOn(instance.props, 'onClick')
// 	spy = jest.spyOn(instance, 'handleClick')
// 	instance.forceUpdate()
// 	container.update()
// 	container.find('.order-link').simulate('click', {
// 		preventDefault() {
// 		}
// 	})
// 	it('should call handleClick', () => {
// 		expect(spy).toHaveBeenCalled()
// 	})

// 	it('should call onClick prop when called handleClick', () => {
// 		expect(clickSpy).toHaveBeenCalled()
// 	})

// })
	// it('should have specified class', () => {
	//	expect(container.first().props().className).toEqual('box box-solid')
	//	expect(container.find('.box-body').hasClass('some class')).toEqual(true)
	// })
	// it('should componentDidMount called', () => {
	// 	jest.spyOn(ToggleOpen.prototype, 'componentDidMount');
	// 	shallow(<ToggleOpen />)
	// 	expect(ToggleOpen.prototype.componentDidMount).toHaveBeenCalled();
	// 	ToggleOpen.prototype.componentDidMount.mockClear()
	// });
	//
	//
	// it('should show alert message', () => {
	// 	const { container } = setup({ showToggleOpen: 'error message' }, true)
	// 	const instance = container.instance();
	// 	spy = jest.spyOn(instance, 'showErrorToggleOpen')
	// 	instance.msg.show = jest.fn()
	// 	instance.componentDidMount();
	// 	expect(spy).toHaveBeenCalled();
	// });
	//
	// it('should componentDidUpdate called', () => {
	// 	const { container } = setup({})
	// 	const instance = container.instance();
	// 	instance.showErrorToggleOpen = jest.fn(() => true)
	// 	container.setProps({
	// 		updateResponse: { error: 'Error message' },
	// 		clearResponse: jest.fn()
	// 	});
	// 	expect(instance.componentDidUpdate).toHaveBeenCalled()
	// });
	//
	// it('should the component has div with the required class', () => {
	// 	expect(container.find('.modal-backdrop')).toBeTruthy()
	// });
	//
	// it('should backdrop clicked once', () => {
	// 	const instance = container.instance();
	// 	const spy = jest
	// 		.spyOn(instance, 'handleAreaClick')
	// 		.mockImplementation(() => true)
	// 	container.instance().forceUpdate()
	// 	container.update()
	// 	container.find('.modal-backdrop').simulate('click');
	// 	expect(spy).toHaveBeenCalled()
	// });

	// it('should have help block div with cancel button', () => {
	// 	const { container } = setup()
	// 	expect(container.exists('.comments-form')).toBe(true)
	// 	expect(container.find('.help-block').text()).toEqual('Комментарий для john (Отменить)')
	// 	expect(container.find('.help-block a').prop('onClick')()).toEqual('cancelReplyFunc')
	// })
	//	it('should getDerivedStateFromProps work properly', () => {
	//	const givenProps = { value: '' }
	//	const givenState = { value: 'value' }
	//	const result = ToggleOpen.getDerivedStateFromProps(givenProps, givenState)
	//	expect(result).toEqual({ value: 'value' })
	// })
})
