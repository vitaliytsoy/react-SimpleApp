import React, { Component } from 'react';

export default class OperatinsTable extends Component {
  render() {
    return (
      <table className="operations__table" cellSpacing="0">
        {/*<tr v-bind:class="[operationsSortedBy.type, operationsSortedBy.isIncremental ? 'up' : 'down']">*/}
          {/*<th v-on:click="setSortType('date')">Дата</th>*/}
          {/*<th v-on:click="setSortType('type')">Операция</th>*/}
          {/*<th v-on:click="setSortType('area')">Площадь</th>*/}
          {/*<th v-on:click="setSortType('assessment')">Качество</th>*/}
        {/*</tr>*/}
        <tbody>
          <tr className="date">
            <th>Дата</th>
            <th>Операция</th>
            <th>Площадь</th>
            <th>Качество</th>
          </tr>
          <tr>
            <td>01 ИЮЛ 2018</td>
            <td>Вспахивание земли</td>
            <td>46.7</td>
            <td>Отлично</td>
          </tr>
        </tbody>
        {/*<tr v-for="operation in operationsToShow" v-bind:key="operation.id">*/}
          {/*<td>{{getFormattedDate(operation.date)}}</td>*/}
          {/*<td>{{operation.type}}</td>*/}
          {/*<td>{{operation.area}}</td>*/}
          {/*<td className="assessment-red"*/}
              {/*v-if="operation.assessment.toLowerCase() === 'плохо'">*/}
            {/*{{operation.assessment}}*/}
          {/*</td>*/}
          {/*<td className="assessment-yellow"*/}
              {/*v-else-if="operation.assessment.toLowerCase() === 'удволетворительно'">*/}
            {/*{{operation.assessment}}*/}
          {/*</td>*/}
          {/*<td className="assessment-green"*/}
              {/*v-else-if="operation.assessment.toLowerCase() === 'отлично'">*/}
            {/*{{operation.assessment}}*/}
          {/*</td>*/}
          {/*<td className="assessment-gray"*/}
              {/*v-else-if="operation.assessment.toLowerCase() === 'нет оценки'">*/}
            {/*{{operation.assessment}}*/}
          {/*</td>*/}
        {/*</tr>*/}
      </table>
    );
  }
}