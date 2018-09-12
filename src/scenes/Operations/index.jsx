import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { simpleAction, secondAction } from '../../services/operations/actions';


class Home extends Component {
  render() {
    return (
      <section className="operations">
        <div className="container container-operations">
          <h2 className="">Операции на поле 112</h2>
          <div className="operations__toggle">
            <div className="operations__toggle__item"
                 // v-bind:className="{isActive: isPlannedShown}"
                 // v-on:click="toggleOperationsType('planned')"
            >
              Запланированные операции
            </div>
            <div className="operations__toggle__item"
                 // v-bind:class="{isActive: !isPlannedShown}"
                 // v-on:click="toggleOperationsType('done')"
            >
              Выполненные операции
            </div>
          </div>
          {/*// <v-operations-table v-if="isPlannedShown"*/}
          {/*//                     :operations="plannedOperations"*/}
          {/*//                     :setSortType="setOperationsSortedBy">*/}
          {/*// </v-operations-table>*/}
          {/*// <v-operations-table v-else*/}
          {/*//                     :operations="doneOperations"*/}
          {/*//                     :setSortType="setOperationsSortedBy">*/}
          {/*// </v-operations-table>*/}
          </div>
      </section>
    );
  }
}

Home.propTypes = {
  result: PropTypes.string,
  fakeVar: PropTypes.number,
};


const mapStateToProps = ({ operations }) => {
  console.log(operations);
  const { fakeVar, result } = operations;
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