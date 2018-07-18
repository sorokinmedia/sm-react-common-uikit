import Box from './Box'
import BoxAdminLTE from './BoxAdminLTE'
import Clearfix from './Clearfix'
import Error from './Error'

import * as exports from './index'
import Input from './Input'
import List from './List'
import NavTabs from './NavTabs'
import OrderLink from './OrderLink'
import Plane from './Plane'
import WrappedSpoiler from './Spoiler'
import TableAdminLTE from './TableAdminLTE'
import TimeLineList from './TimeLineList'

jest.mock('./Box', () => {})
jest.mock('./BoxAdminLTE', () => {})
jest.mock('./Error', () => {})
jest.mock('./Clearfix', () => {})
jest.mock('./Input', () => {})
jest.mock('./List', () => {})
jest.mock('./NavTabs', () => {})
jest.mock('./OrderLink', () => {})
jest.mock('./Plane', () => {})
jest.mock('./Spoiler', () => {})
jest.mock('./TableAdminLTE', () => {})
jest.mock('./TimeLineList', () => {})

describe('expots', () => {
	it('should exports components', () => {
		expect(exports).toEqual(expect.objectContaining({
			Box,
			BoxAdminLTE,
			Error,
			Clearfix,
			Input,
			List,
			NavTabs,
			OrderLink,
			Plane,
			WrappedSpoiler,
			TableAdminLTE,
			TimeLineList
		}))
	})
})
