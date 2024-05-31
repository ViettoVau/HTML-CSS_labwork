import React, { useState } from 'react';

const TableComponent = ({ data }) => {
    const columnNames = data.length > 0 ? Object.keys(data[0]) : [];

    const [visibleColumns, setVisibleColumns] = useState(
        columnNames.reduce((acc, column) => ({ ...acc, [column]: true }), {})
    );
    console.log("visible:",visibleColumns);

    const CheckboxChange = (column) => {
        setVisibleColumns(prevState => {
          console.log("prevState:", prevState);
          return {
            ...prevState,
            [column]: !prevState[column]
          };
        });
      };

    return (
        <div>
            <div>
                {columnNames.map(column => (
                    <label key={column}>
                        <input
                            type="checkbox"
                            checked={visibleColumns[column]}
                            onChange={() => CheckboxChange(column)}
                        />
                        {column}
                    </label>
                ))}
            </div>
            <table border="1">
                <thead>
                    <tr>
                        {columnNames.map(column => (
                            visibleColumns[column] && <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columnNames.map(column => (
                                visibleColumns[column] && <td key={column}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
