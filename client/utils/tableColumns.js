module.exports = [
    {
        Header: 'Info',
        columns: [
            {
                Header: 'Date',
                accessor: (row) =>
                    new Date(Date.parse(row.date)).toISOString().split('T')[0],
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
                Header: 'OCC',
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
                Header: 'OCC',
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
                Header: 'OCC',
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
                Header: 'Total OCC',
                id: 'daily-total-raw-material',
                accessor: (row) => row.shiftProduction.totalRawMaterial,
            },
            {
                Header: 'Total Fiber Loss',
                id: 'daily-total-fiber-loss',
                accessor: (row) =>
                    `${
                        Math.round(row.shiftProduction.totalFiberLoss * 100) /
                        100
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
                        (row.shiftProduction.totalProduction / row.coalUsed) *
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
]
