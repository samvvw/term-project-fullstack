import { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import { TableWrapper, TableContainer } from './ProductionLogsTable.styles'

export function ProductionLogsTable() {
    const [data, setData] = useState([])
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
                    accessor: (row) => row.shiftProduction.firstShift.fiberLoss,
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
                        row.shiftProduction.secondShift.fiberLoss,
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
                    accessor: (row) => row.shiftProduction.thirdShift.fiberLoss,
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
                    accessor: (row) => row.shiftProduction.totalFiberLoss,
                },
            ],
        },
    ])

    const tableColumns = useMemo(() => columns, [columns])

    const tableData = useMemo(() => data, [data])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/production-log')

            const responseData = await response.json()

            setData(responseData)
        }
        fetchData()
    }, [])

    const tableInstance = useTable({ columns: tableColumns, data: tableData })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance

    function handleColumnChange() {
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
                <code>{JSON.stringify(tableData, null, 4)}</code>
            </pre>
        </>
    )
}
