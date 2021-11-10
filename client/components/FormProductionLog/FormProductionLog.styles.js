import styled from 'styled-components'

export const FormProductionLogWrapper = styled('form')`
    border: 1px solid ${({ theme }) => theme.pallette.primary.dark};
`

export const FormHeadSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.secondary.dark};
`
export const FormShiftProductionSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.primary[500]};

    .shift-production-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        h3 {
            grid-column: -1/1;
        }
    }

    .shift-production-section {
        border: 2px dashed ${({ theme }) => theme.pallette.primary[500]};
    }
`
export const FormResourceConsumptionSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.secondary[800]};
`

/**
 * -date (date)
 * -millManager (string)
 * -shiftProduction
 *      -firstShift
 *          -shiftManager (string)
 *          -materialType
 *              -starched (bool)
 *              -weight (number)
 *          -materialProduced (number)
 *          -rawMaterialConsumed (number)
 *      -secondShift
 *          -shiftManager (string)
 *          -materialType
 *              -starched (bool)
 *              -weight (number)
 *          -materialProduced (number)
 *          -rawMaterialConsumed (number)
 *      -thirdShift
 *          -shiftManager (string)
 *          -materialType
 *              -starched (bool)
 *              -weight (number)
 *          -materialProduced (number)
 *          -rawMaterialConsumed (number)
 * -coalUsed (number)
 * -electricityConsumed (number)
 * -starchConsumed (number)
 * -polycationicConsumed (number)
 * -antifoamConsumed (number)
 * -dispro51Consumed (number)
 * -timeLost (number)
 */
