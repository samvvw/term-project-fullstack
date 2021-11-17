import styled from 'styled-components'

export const FormProductionLogWrapper = styled('form')`
    border: 1px solid ${({ theme }) => theme.pallette.primary.dark};
    width: 30%;
    margin: 0 auto;
`

export const FormHeadSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.secondary.dark};
`
export const FormShiftProductionSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.primary[500]};

    .shift-production-wrapper {
    }

    .shift-production-tabs {
        display: flex;
        list-style: none;
        li {
            border: 1px solid ${({ theme }) => theme.pallette.secondary[800]};
            cursor: pointer;
            padding: 0.5rem 0.7rem;
        }
    }

    .shift-production-section {
        border: 2px dashed ${({ theme }) => theme.pallette.primary[500]};
    }
`
export const FormResourceConsumptionSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.secondary[800]};
`
const FormInput = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input
                // type={props.type}
                id={props.htmlFor}
                name={props.htmlFor}
                // onChange={props.onChange}
                {...props}
                className="production-form-input"
            />
        </div>
    )
}

export const Input = styled((props) => <FormInput {...props} />)`
    background-color: #b7e3ed;
    display: flex;
    justify-content: space-between;
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
