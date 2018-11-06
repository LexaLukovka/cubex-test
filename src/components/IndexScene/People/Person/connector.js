import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as people from '../../../../redux/people/action'

const initMapStateToProps = () => ({})

const initMapDispatchToProps = dispatch => ({
  actions: {
    people: bindActionCreators(people, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
