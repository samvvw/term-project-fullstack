import {
    ComposedChart,
    Area,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from 'recharts'

export function ProductionChart({ tableData }) {
    return (
        <>
            <ResponsiveContainer width="90%" height={350}>
                <ComposedChart
                    data={tableData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="daily-total-raw-material"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                        name="Total OCC"
                    />
                    <Line
                        type="monotone"
                        dataKey="daily-total-production"
                        stroke="#8884d8"
                        strokeWidth={3}
                        label={{
                            fill: 'black',
                            fontSize: 14,
                        }}
                        position="insideTopLeft"
                        name="Total Production"
                    />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis
                        dataKey={
                            (e) =>
                                new Date(Date.parse(e.Date)).toLocaleDateString(
                                    'en-US',
                                    {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    }
                                )
                            // .toISOString()
                            // .split('T')[0]
                        }
                    />
                    <YAxis domain={['auto', 'auto']} />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    )
}
