// import { useState, useMemo } from 'react'
import { TableWrapper, TableContainer } from './ProductionLogsTable.styles'

export function ProductionLogsTable({ tableData, setColumns, tableInstance }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = tableInstance

    function handleColumnChange() {
        console.log(headerGroups)
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
            <div>
                {/* <p>{page}</p> */}
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[5, 10, 15, 20, 25].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
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
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}
                                            key={'columnHeader' + i + 2 * j}
                                        >
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? '🔽'
                                                        : '🔼'
                                                    : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, i) => {
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
            {/* <pre>
                <code>
                    {rows.map((row) => JSON.stringify(row.values, null, 4))}
                </code>
            </pre> */}
        </>
    )
}
