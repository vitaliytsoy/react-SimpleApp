import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class OperationsTable extends Component {
  store = {
    types: {
      0: 'Боронование зяби и паров',
      1: 'Вспашка с оборотом пласта',
      2: 'Протравливание семян',
      3: 'Авиаобработка',
      4: 'Остальное',
      5: 'Сбор урожая',
    },
    assessments: {
      0: 'Плохо',
      1: 'Удволетворительно',
      2: 'Отлично',
      3: 'Нет оценки',
    },
  };
  mapToValues = (operations) => {
    let deepClonedOperations = _.cloneDeep(operations);
    return deepClonedOperations.map((item) => {
      item.date = new Date(item.date.year, item.date.month, item.date.day);
      item.type = this.store.types[item.type];
      item.assessment = this.store.assessments[item.assessment];
      // Check if value exist
      if (item.type == null) item.type = 'Неизвестная операция';
      if (item.assessment == null) item.assessment = this.store.assessments[3];
      return item;
    });
  };
  getFormattedDate = (date) => {
    return date.toLocaleString('ru-RU', {
      year: 'numeric',
      day: '2-digit',
      month: 'short',
    }).toUpperCase().replace(new RegExp('\\.|Г.', 'g'), '');
  };

  render() {
    const operationsToShow = this.mapToValues(this.props.operations);

    return (
      <table className="operations__table" cellSpacing="0">
        {/*<tr v-bind:class="[operationsSortedBy.type, operationsSortedBy.isIncremental ? 'up' : 'down']">*/}
          {/*<th v-on:click="setSortType('date')">Дата</th>*/}
          {/*<th v-on:click="setSortType('type')">Операция</th>*/}
          {/*<th v-on:click="setSortType('area')">Площадь</th>*/}
          {/*<th v-on:click="setSortType('assessment')">Качество</th>*/}
        {/*</tr>*/}
        <tbody>
          <tr className={
            (this.props.sortBy.type.toLowerCase() === 'date' ? 'date ' : '') +
            (this.props.sortBy.type.toLowerCase() === 'type' ? 'type ' : '') +
            (this.props.sortBy.type.toLowerCase() === 'area' ? 'area ' : '') +
            (this.props.sortBy.type.toLowerCase() === 'assessment' ? 'assessment ' : '') +
            (this.props.sortBy.isIncremental ? 'up' : 'down')
          }>
            <th onClick={() => this.props.setSortType('date')}>Дата</th>
            <th onClick={() => this.props.setSortType('type')}>Операция</th>
            <th onClick={() => this.props.setSortType('area')}>Площадь</th>
            <th onClick={() => this.props.setSortType('assessment')}>Качество</th>
          </tr>
          {
            operationsToShow.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{this.getFormattedDate(item.date)}</td>
                  <td>{item.type}</td>
                  <td>{item.area}</td>
                  <td className={
                    (item.assessment.toLowerCase() === 'отлично' ? 'assessment-green ' : '') +
                    (item.assessment.toLowerCase() === 'удволетворительно' ? 'assessment-yellow ' : '') +
                    (item.assessment.toLowerCase() === 'плохо' ? 'assessment-red ' : '') +
                    (item.assessment.toLowerCase() === 'нет оценки' ? 'assessment-gray ' : '')
                  }>
                    {item.assessment}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

OperationsTable.propTypes = {
  operations: PropTypes.array,
  sortBy: PropTypes.object,
  setSortType: PropTypes.func,
};