import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import List from './index'

configure({ adapter: new Adapter() })
const spy = jest.fn()

function setup(customProps, lifeCycle = false) {
	const props = {
		items: [{ id: 1 }],
		itemFunc: spy,
		...customProps
	}
	const container = shallow(<List {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('List component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have a tag first', () => {
		const { container } = setup()
		expect(container.first().type()).toEqual('ul')
	})
	it('should have specified classname', () => {
		const { container } = setup({ className: 'style class' })
		expect(container.first().props().className).toEqual('style class')
	})

	it('ul should have specified style', () => {
		const { container } = setup({ styles: { color: 'red' } })
		expect(container.first().props().style).toEqual({ color: 'red' })
	})

	it('li should have specified style', () => {
		const { container } = setup({ liStyles: { color: 'red' } })
		expect(container.find('ul li').props().style).toEqual({ color: 'red' })
	})

	it('should call itemFunc inside li', () => {
		expect(spy).toHaveBeenCalled()
	})

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
	// 	jest.spyOn(List.prototype, 'componentDidMount');
	// 	shallow(<List />)
	// 	expect(List.prototype.componentDidMount).toHaveBeenCalled();
	// 	List.prototype.componentDidMount.mockClear()
	// });
	//
	//
	// it('should show alert message', () => {
	// 	const { container } = setup({ showList: 'error message' }, true)
	// 	const instance = container.instance();
	// 	spy = jest.spyOn(instance, 'showErrorList')
	// 	instance.msg.show = jest.fn()
	// 	instance.componentDidMount();
	// 	expect(spy).toHaveBeenCalled();
	// });
	//
	// it('should componentDidUpdate called', () => {
	// 	const { container } = setup({})
	// 	const instance = container.instance();
	// 	instance.showErrorList = jest.fn(() => true)
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
})
