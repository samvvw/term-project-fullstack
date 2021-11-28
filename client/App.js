import { useState, useMemo, useEffect } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import {
    FormProductionLog,
    ProductionLogsTable,
    ProductionChart,
} from './components'
import ColumnConfig from './utils/tableColumns'

export default function App({ title }) {
    const [data, setData] = useState([])

    const [columns, setColumns] = useState(ColumnConfig)

    const tableColumns = useMemo(() => columns, [columns])
    const tableData = useMemo(() => data, [data])

    const tableInstance = useTable(
        { columns: tableColumns, data: tableData },
        useSortBy,
        usePagination
    )

    const { rows } = tableInstance

    const chartData = useMemo(() => rows.map((e) => e.values), [rows])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/v1/production-log')

            const responseData = await response.json()

            setData(responseData)
        }
        fetchData()
    }, [])
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* {JSON.stringify(
                rows.map((row) => {
                    console.log(row)
                    return row.values
                })
            )} */}
            {title && <h1>{title}</h1>}
            <FormProductionLog setData={setData} />
            <ProductionChart tableData={chartData} />
            <ProductionLogsTable
                tableData={tableData}
                setColumns={setColumns}
                tableInstance={tableInstance}
            />
        </div>
    )
}
