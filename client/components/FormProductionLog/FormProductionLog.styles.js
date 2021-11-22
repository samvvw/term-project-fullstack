import styled from 'styled-components'

export const FormProductionLogWrapper = styled('form')`
    border: 1px solid ${({ theme }) => theme.pallette.primary.dark};
    position: relative;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    input[type='number'] {
        -moz-appearance: textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .first-section {
        flex-grow: 1;
    }
    .submit-button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        width: 5rem;
        button {
            width: 100%;
        }
    }
`

export const FormHeadSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.secondary.dark};
`
export const FormShiftProductionSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.primary[500]};
    flex-grow: 1.5;
    .shift-production-wrapper {
    }
    .material-type {
        p {
            font-weight: bold;
        }
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

    .tab-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        /* flex-grow: 1; */
        position: relative;
        /* height: 100%; */
        height: 18rem;
        /* top: 0;
        left: 0;
        right: 0;
        bottom: 0; */
    }

    .shift-production-section {
        width: 80%;
        margin: 0 auto;
        border-radius: 5px;
        /* background-color: #fff; */
        height: fit-content;
        position: absolute;
        /* top: 0; */
        left: 0;
        right: 0;
        /* bottom: 0; */
        border: 2px dashed ${({ theme }) => theme.pallette.primary[500]};

        & > * {
            margin-top: 0.5rem;
        }
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
            {props.type === 'checkbox' ? (
                <span className="checkmark"></span>
            ) : (
                ''
            )}
        </div>
    )
}

export const Input = styled((props) => <FormInput {...props} />)`
    /* background-color: #b7e3ed; */
    display: ${(props) => (props.notFlex ? 'block' : 'flex')};
    /* flex-direction: column; */

    justify-content: space-between;
    /* display: block; */
    position: relative;
    /* padding-left: 35px; */
    /* margin-bottom: 12px; */
    cursor: pointer;
    /* font-size: 22px; */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
        width: ${(props) => (props.width ? props.width : '4rem')};
    }

    input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    label {
        width: 100%;
    }

    .checkmark {
        position: absolute;
        top: 0;
        right: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    &:hover input ~ .checkmark {
        background-color: #ccc;
    }

    input:checked ~ .checkmark {
        background-color: #2196f3;
    }

    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    input:checked ~ .checkmark:after {
        display: block;
    }

    .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
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
