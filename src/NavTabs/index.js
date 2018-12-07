import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import HeadTab from './HeadTab/index'
import { scrollToByPos } from './scrollToByName'
import TabPane from './TabPane/index'

class NavTabs extends Component {

	constructor(props) {
		super(props)

		this.state = {
			active: props.headTabs[0].key
		}
		this.refTabs = createRef()
	}

	popstateListener = () => {
		const { href } = location
		const key = href.slice(href.indexOf('#') + 1, href.length)
		this.handleNavTabClick(key)
		scrollToByPos(this.refTabs.offsetTop)
	};

	componentDidMount() {
		window.addEventListener('popstate', this.popstateListener)
		const { href } = location
		const key = href.slice(href.indexOf('#') + 1, href.length)
		// eslint-disable-next-line react/no-did-mount-set-state
		this.setState({
			active: (href.indexOf('#') > 0 && key.length ? key : this.state.active)
		})
	}

	componentWillUnmount() {
		window.removeEventListener('popstate', this.popstateListener)
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
