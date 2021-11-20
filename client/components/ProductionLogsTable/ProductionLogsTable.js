import { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import { TableWrapper } from './ProductionLogsTable.styles'

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
                    accessor: (row) =>
                        (row.shiftProduction.firstShift.materialType.starched
                            ? 'T-'
                            : 'W-') +
                        row.shiftProduction.firstShift.materialType.weight,
                },
                {
                    Header: 'Production',
                    accessor: (row) =>
                        row.shiftProduction.firstShift.materialProduced,
                },
                {
                    Header: 'Raw Material',
                    accessor: (row) =>
                        row.shiftProduction.firstShift.rawMaterialConsumed,
                },
                {
                    Header: 'Fiber Loss',
                    accessor: (row) => row.shiftProduction.firstShift.fiberLoss,
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
                                                key={'CellGroup' + i + 1 * j}
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
            <pre>
                <code>{JSON.stringify(tableData, null, 4)}</code>
            </pre>
        </>
    )
}
