import { FormProductionLog, ProductionLogsTable } from './components'

export default function App({ title }) {
    return (
        <div>
            {title && <h1>{title}</h1>}
            <FormProductionLog />
            <ProductionLogsTable />
        </div>
    )
}
