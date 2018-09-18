import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import HeadTab from './HeadTab/index'
import TabPane from './TabPane/index'
import { scrollToByPos } from './scrollToByName'

class NavTabs extends Component {

	constructor(props) {
		super(props)

		this.state = {
			active: props.headTabs[0].key
		}
		this.refTabs = createRef()
	}

	componentDidMount() {
		window.addEventListener('popstate', () => {
			const { href } = location
			const key = href.slice(href.indexOf('#') + 1, href.length)
			return this.setState({
				active: (href.indexOf('#') > 0 && key.length ? key : this.state.active)
			})
			//	scrollToByPos(this.refTabs.offsetTop)
		})
		const { href } = location
		const key = href.slice(href.indexOf('#') + 1, href.length)
		// eslint-disable-next-line react/no-did-mount-set-state
		this.setState({
			active: (href.indexOf('#') > 0 && key.length ? key : this.state.active)
		})
	}

	componentWillUnmount() {
		window.removeEventListener('popstate')
	}

	handleNavTabClick = (key) => {
		this.setState({ active: key })
	}

	render() {
		const { headTabs, tabPanes, className } = this.props
		const { active } = this.state
		const headView = headTabs.map(elem => (
			<HeadTab
				aHref={`#${elem.key}`}
				tabName={elem.title}
				handleTabClick={() => this.handleNavTabClick(elem.key)}
				isActive={elem.key === active}
				key={elem.key}
				tabClass=" "
			/>))
		const contentView = (
			<TabPane
				content={tabPanes.find(elem => elem.key === active).content}
			/>)

		return (
			<div className={`nav-tabs-custom ${className}`}>
				<ul className="nav nav-tabs" ref={this.refTabs}>
					{headView}
				</ul>
				{contentView}
			</div>)
	}
}

NavTabs.propTypes = {
	headTabs: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		key: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	})),
	tabPanes: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		content: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
			PropTypes.object
		])
	})),
	className: PropTypes.string
}

NavTabs.defaultProps = {
	className: ''
}

export default NavTabs
