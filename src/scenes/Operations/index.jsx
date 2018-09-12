import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import { simpleAction, secondAction } from '../../services/operations/actions';
import {fetchOperations} from "../../services/operations/actions";

import OperationsTable from './components/OperaionsTable/OperationsTable';


class Operations extends Component {
    state = {
      isPlannedShown: true,
    };
  componentDidMount() {
    this.props.fetchOperations();
  }
  shouldComponentUpdate() {
    return this.props.doneOperations.length > 0 && this.props.plannedOperations.length > 0;
  }
  toggleOperationsType = (toggleTo) => {
    toggleTo.toLowerCase() === 'planned' && !this.state.isPlannedShown ? this.setState({ isPlannedShown: !this.state.isPlannedShown }) : '';
    toggleTo.toLowerCase() === 'done' && this.state.isPlannedShown ? this.setState({ isPlannedShown: !this.state.isPlannedShown }) : '';
  };

  render() {

    return (
      <section className="operations">
        <div className="container container-operations">
          <h2 className="">Операции на поле 112</h2>
          <div className="operations__toggle">
            <div className="operations__toggle__item"
                 onClick={() => { this.toggleOperationsType('planned') }}
                 // v-bind:className="{isActive: isPlannedShown}"
                 // v-on:click="toggleOperationsType('planned')"
            >
              Запланированные операции
            </div>
            <div className="operations__toggle__item"
                 onClick={() => { this.toggleOperationsType('done') }}
              // v-bind:class="{isActive: !isPlannedShown}"
                 // v-on:click="toggleOperationsType('done')"
            >
              Выполненные операции

            </div>
          </div>
          <OperationsTable/>
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

Operations.propTypes = {
  plannedOperations: PropTypes.array,
  doneOperations: PropTypes.array,
};


const mapStateToProps = ({ operations }) => {
  const { doneOperations, plannedOperations, isFetching } = operations;
  return { doneOperations, plannedOperations, isFetching };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: (location) => push(location),
  fetchOperations: () => fetchOperations(),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Operations)