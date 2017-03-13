/**
 * Created by joshjahans on 11/03/2017.
 */
import { connect } from 'react-redux'
import HeaderBar from './HeaderBar'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => ({
  dispatch,
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HeaderBar)
