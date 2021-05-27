import React from 'react';
import Day from "../Day/Day";

/**
 * Days List Component
 *
 * @param {Array} list: ...
 */
const DayList = ({ list = [] }) => {
    return (
        <div className="days-list">
            {list.map((item) => (
                <Day />
            ))}
        </div>
    );
};

export default DayList;
