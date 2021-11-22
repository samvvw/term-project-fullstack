import { useState, useMemo } from 'react'
import { useTable } from 'react-table'
import { TableWrapper, TableContainer } from './ProductionLogsTable.styles'

export function ProductionLogsTable({ tableData }) {
    const [columns, setColumns] = useState([
        {
            Header: 'Info',
            columns: [
                {
                    Header: 'Date',
                    accessor: (row) =>
                        new Date(Date.parse(row.date))
                            .toISOString()
                            .split('T')[0],
                },
                {
                    Header: 'Manager',
                    accessor: (row) => row.millManager,
                },
            ],
        },
        {
            Header: 'First Shift',
            columns: [
                {
                    Header: 'Material Type',
                    id: 'first-shift-material-type',
                    accessor: (row) =>
                        (row.shiftProduction.firstShift.materialType.starched
                            ? 'T-'
                            : 'W-') +
                        row.shiftProduction.firstShift.materialType.weight,
                },
                {
                    Header: 'Production',
                    id: 'first-shift-production',
                    accessor: (row) =>
                        row.shiftProduction.firstShift.materialProduced,
                },
                {
                    Header: 'Raw Material',
                    id: 'first-shift-raw-material',
                    accessor: (row) =>
                        row.shiftProduction.firstShift.rawMaterialConsumed,
                },
                {
                    Header: 'Fiber Loss',
                    id: 'first-shift-fiber-loss',
                    accessor: (row) =>
                        `${
                            Math.round(
                                row.shiftProduction.firstShift.fiberLoss * 100
                            ) / 100
                        }%`,
                },
            ],
        },
        {
            Header: 'Second Shift',
            columns: [
                {
                    Header: 'Material Type',
                    id: 'second-shift-material-type',
                    accessor: (row) =>
                        (row.shiftProduction.secondShift.materialType.starched
                            ? 'T-'
                            : 'W-') +
                        row.shiftProduction.secondShift.materialType.weight,
                },
                {
                    Header: 'Production',
                    id: 'second-shift-production',
                    accessor: (row) =>
                        row.shiftProduction.secondShift.materialProduced,
                },
                {
                    Header: 'Raw Material',
                    id: 'second-shift-raw-material',
                    accessor: (row) =>
                        row.shiftProduction.secondShift.rawMaterialConsumed,
                },
                {
                    Header: 'Fiber Loss',
                    id: 'second-shift-fiber-loss',
                    accessor: (row) =>
                        `${
                            Math.round(
                                row.shiftProduction.secondShift.fiberLoss * 100
                            ) / 100
                        }%`,
                },
            ],
        },
        {
            Header: 'Third Shift',
            columns: [
                {
                    Header: 'Material Type',
                    id: 'third-shift-material-type',
                    accessor: (row) =>
                        (row.shiftProduction.thirdShift.materialType.starched
                            ? 'T-'
                            : 'W-') +
                        row.shiftProduction.thirdShift.materialType.weight,
                },
                {
                    Header: 'Production',
                    id: 'third-shift-production',
                    accessor: (row) =>
                        row.shiftProduction.thirdShift.materialProduced,
                },
                {
                    Header: 'Raw Material',
                    id: 'third-shift-raw-material',
                    accessor: (row) =>
                        row.shiftProduction.thirdShift.rawMaterialConsumed,
                },
                {
                    Header: 'Fiber Loss',
                    id: 'third-shift-fiber-loss',
                    accessor: (row) =>
                        `${
                            Math.round(
                                row.shiftProduction.thirdShift.fiberLoss * 100
                            ) / 100
                        }%`,
                },
            ],
        },
        {
            Header: 'Daily Totals',
            columns: [
                {
                    Header: 'Total Production',
                    id: 'daily-total-production',
                    accessor: (row) => row.shiftProduction.totalProduction,
                },
                {
                    Header: 'Total Raw Material',
                    id: 'daily-total-raw-material',
                    accessor: (row) => row.shiftProduction.totalRawMaterial,
                },
                {
                    Header: 'Total Fiber Loss',
                    id: 'daily-total-fiber-loss',
                    accessor: (row) =>
                        `${
                            Math.round(
                                row.shiftProduction.totalFiberLoss * 100
                            ) / 100
                        }%`,
                },
            ],
        },
        {
            Header: 'Coal',
            columns: [
                {
                    Header: 'Total',
                    id: 'total-coal',
                    accessor: (row) => row.coalUsed,
                },
                {
                    Header: 'kg per ton',
                    id: 'coal-kg-per-ton',
                    accessor: (row) =>
                        Math.round(
                            (row.shiftProduction.totalProduction /
                                row.coalUsed) *
                                100
                        ) / 100,
                },
            ],
        },
        {
            Header: 'Electricity',
            columns: [
                {
                    Header: 'Total',
                    id: 'total-electricity',
                    accessor: (row) => row.electricityConsumed,
                },
                {
                    Header: 'Kw per ton',
                    id: 'kw-per-ton',
                    accessor: (row) =>
                        Math.round(
                            (row.shiftProduction.totalProduction /
                                row.electricityConsumed) *
                                1000
                        ) / 1000,
                },
            ],
        },
        {
            Header: 'Chemicals',
            columns: [
                {
                    Header: 'Starch',
                    id: 'total-starch',
                    accessor: (row) => row.starchConsumed,
                },
                {
                    Header: 'Polycationic',
                    id: 'total-polycationic',
                    accessor: (row) => row.polycationicConsumed,
                },
                {
                    Header: 'AKD',
                    id: 'total-akd',
                    accessor: (row) => row.akdConsumed,
                },
                {
                    Header: 'Antifoam',
                    id: 'total-antifoam',
                    accessor: (row) => row.antifoamConsumed,
                },
                {
                    Header: 'Dispro 51',
                    id: 'total-dispro51',
                    accessor: (row) => row.dispro51Consumed,
                },
            ],
        },
    ])

    const tableColumns = useMemo(() => columns, [columns])

    const tableInstance = useTable({ columns: tableColumns, data: tableData })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance

    function handleColumnChange() {
        console.log(rows)
        setColumns((prev) => {
            const index = prev.findIndex(
                (e) =>
                    e.accessor === 'shiftProduction.firstShift.materialProduced'
            )
            if (index == -1) {
                return [
                    ...prev,
                    {
                        Header: `Column ${prev.length + 1}`,
                        accessor: 'shiftProduction.firstShift.materialProduced',
                    },
                ]
            } else {
                return [...prev.slice(0, index), ...prev.slice(index + 1)]
            }
        })
    }
    return (
        <>
            <button onClick={handleColumnChange}>Add</button>
            <TableContainer>
                {tableData?.length > 0 ? (
                    <TableWrapper {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup, i) => (
                                <tr
                                    {...headerGroup.getHeaderGroupProps()}
                                    key={'headerGroup' + i}
                                >
                                    {headerGroup.headers.map((column, j) => (
                                        <th
                                            {...column.getHeaderProps()}
                                            key={'columnHeader' + i + 2 * j}
                                        >
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr
                                        {...row.getRowProps()}
                                        key={'RowGroup' + i + 1 * 2}
                                    >
                                        {row.cells.map((cell, j) => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    key={
                                                        'CellGroup' + i + 1 * j
                                                    }
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </TableWrapper>
                ) : (
                    'Loading'
                )}
            </TableContainer>
            <pre>
                <code>
                    {rows.map((row) => JSON.stringify(row.values, null, 4))}
                </code>
            </pre>
        </>
    )
}
