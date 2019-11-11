import LoadingPage from '../../components/LoadingPage'
import { shallow } from 'enzyme'
import React from 'react'

test('should correctly render loading page', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})

