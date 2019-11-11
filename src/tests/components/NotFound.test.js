import React from 'react' 
import { shallow } from 'enzyme'
import NotFound from '../../components/NotFound'

test('should render header correctly', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
})

