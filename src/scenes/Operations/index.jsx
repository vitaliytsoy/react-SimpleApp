import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {fetchOperations, setSortType} from "../../services/operations/actions";
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
    console.log(this.props);
    return (
      <section className="operations">
        <div className="container container-operations">
          <h2 className="" onClick={ () => { this.props.setSortType( 'type' ) } }>Операции на поле 112</h2>
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
          {
            this.state.isPlannedShown ? (
              <OperationsTable operations={this.props.plannedOperations}
                               sortBy={this.props.sortBy}
                               setSortType={this.props.setSortType}/>
            ) : (
              <OperationsTable operations={this.props.doneOperations}
                               sortBy={this.props.sortBy}
                               setSortType={this.props.setSortType}/>
            )
          }
          </div>
      </section>
    );
  }
}

Operations.propTypes = {
  plannedOperations: PropTypes.array,
  doneOperations: PropTypes.array,
  fetchOperations: PropTypes.func,
  setSortType: PropTypes.func,
  changePage: PropTypes.func,
};


const mapStateToProps = ({ operations }) => {
  const { doneOperations, plannedOperations, sortBy, isFetching } = operations;
  return { doneOperations, plannedOperations, sortBy, isFetching };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: (location) => push(location),
  fetchOperations: () => fetchOperations(),
  setSortType: (payload) => setSortType(payload),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Operations)