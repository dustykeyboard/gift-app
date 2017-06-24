import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'

import People from '../components/People'
import { samplePeople } from '../sampleData'

const mapStateToProps = (state) => {
  const { people } = state

  return { people: (people ? people : samplePeople) }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewList: (personUrl) => {
      dispatch(push(`/person/${personUrl}`))
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(People))
