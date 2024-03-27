import React from 'react';

type TableProps = {
  headers: string[];
  rows: string[][];
};

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <>
      {
        headers && rows && headers.length > 0 && rows.length > 0 && (
          <table>
            <thead>
              <tr>
                {headers.map((header: any, index: number) => (
                  <th key={index}>{header.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((item: any, rowIndex: number) => (
                <tr key={rowIndex}>
                  {item.row?.map((cell: any, cellIndex: number) => (
                    <td key={cellIndex}>{cell.cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </>
  );
};

export default Table;