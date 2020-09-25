import React from 'react';
import './Calendar.css';
import * as calendar from './CalendarModules';
import * as CalendarModules from './CalendarModules';
import classnames from 'classnames';


export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['M', 'T', 'W', 'T' , 'F', 'S', 'SN'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => {
        this.setState({ selectedDate: date });

        this.props.onChange(date);
    };

    render() {
        const { weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar">
                <table>
                    <thead>
                    <tr>

                        {weekDayNames.map(name =>
                            <th key={name}>{name}</th>
                        )}
                    </tr>
                    </thead>


                    <tbody>
                    {monthData.map((week, index) =>
                        <tr key={index} className="week">
                            {week.map((date, index) => date ?
                                <td
                                    key={index}
                                    className={classnames('day', {
                                        'today': CalendarModules.areEqual(date, currentDate),
                                        'selected': CalendarModules.areEqual(date, selectedDate)
                                    })}
                                    onClick={() => this.handleDayClick(date)}
                                >{date.getDate()}</td>
                                :
                                <td key={index} />
                            )}
                        </tr>
                    )}
                    </tbody>


                </table>

                <h2 className='Date'> SEPTEMBER </h2>
            </div>
        );
    }
}
