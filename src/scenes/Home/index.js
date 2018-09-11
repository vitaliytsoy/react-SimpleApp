import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { simpleAction, secondAction } from '../../services/actions/index';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={() => this.props.changePage('/about-us')}>Go to about page via redux</button>
        <button onClick={() => this.props.changeString('AHAHAHA')}>BUTTON</button>
      </div>
    );
  }
}

Home.propTypes = {
  result: PropTypes.string,
  fakeVar: PropTypes.number,
};


const mapStateToProps = ({ SimpleReducer }) => {
  console.log(SimpleReducer);
  const { fakeVar, result } = SimpleReducer;
  return { fakeVar, result };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: (location) => push(location),
  changeString: (payload) => simpleAction(payload),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)