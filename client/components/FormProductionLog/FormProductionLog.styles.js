import styled, { css } from 'styled-components'
const activeForm = css`
    background-color: rgba(0, 0, 0, 0.4);

    transform: translateY(0%);
`
const inactiveForm = css`
    background-color: rgba(0, 0, 0, 0);
    transform: translateY(-100%);
`
const Backdrop = (props) => (
    <div className={props.className}>
        <div className="backdrop-close" onClick={props.closeBackdrop}></div>
        {props.children}
    </div>
)
export const FormBackdrop = styled((props) => <Backdrop {...props} />)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    .backdrop-close {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    transition: transform 250ms ease-in-out, background-color 200ms ease-in-out;
    ${(props) => (props.formActive ? activeForm : inactiveForm)};
`

export const FormProductionLogWrapper = styled('form')`
    background-color: ${({ theme }) => theme.pallette.black[50]};
    border: 2px solid ${({ theme }) => theme.pallette.primary.dark};
    border-radius: 6px;
    position: relative;
    height: 22rem;
    /* width: 35%; */
    width: 20rem;
    margin: 0 auto;
    overflow: hidden;
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
`

const activePage = css`
    z-index: 100;
    opacity: 1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`

const hiddenPage = css`
    z-index: -100;
    opacity: 0;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    overflow: hidden;
`
export const FormHeadSection = styled('div')`
    padding-top: 1rem;
    position: absolute;
    ${(props) => (props.activePage ? activePage : hiddenPage)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 2rem;
    align-items: center;
`
export const FormShiftProductionSection = styled('div')`
    border: 1px solid ${({ theme }) => theme.pallette.primary[500]};
    position: absolute;
    ${(props) => (props.activePage ? activePage : hiddenPage)}
    .shift-production-wrapper {
        display: grid;
        grid-template-columns: 1fr 3fr;
        h3 {
            grid-column: 1 / 3;
        }
        .shift-production-tabs {
            grid-column: 1 / 2;
        }
    }
    .material-type {
        p {
            font-weight: bold;
        }
    }

    .shift-production-tabs {
        display: flex;
        flex-direction: column;
        list-style: none;
        li {
            cursor: pointer;
            border-radius: 6px 0 0 6px;
            border: 1px solid ${({ theme }) => theme.pallette.secondary[800]};
            cursor: pointer;
            padding: 0.5rem 0.7rem;
        }
        li:hover {
            background-color: ${({ theme }) =>
                theme.pallette.secondary.veryLight};
        }
        .active {
            background-color: ${({ theme }) => theme.pallette.secondary.light};
        }
    }

    .tab-wrapper {
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        /* flex-grow: 1; */
        position: relative;
        /* height: 100%; */
        height: 15rem;
        /* top: 0;
        left: 0;
        right: 0;
        bottom: 0; */
        grid-column: 1/3;
    }
`

export const ShiftProductionSection = styled.div`
    width: 100%;
    /* padding: 1rem; */
    margin: 0 auto;
    border-radius: 5px;
    height: fit-content;
    position: absolute;
    ${(props) => (props.activePage ? activePage : hiddenPage)}

    border: 2px dashed ${({ theme }) => theme.pallette.primary[500]};
    display: flex;
    gap: 0.4rem;
    flex-direction: column;
    align-items: stretch;
    .input-container {
        /* width: 100%; */
        label {
            width: 11rem;
        }
    }
    & > * {
        margin-top: 0.5rem;
    }
`
export const FormResourceConsumptionSection = styled('div')`
    position: absolute;
    ${(props) => (props.activePage ? activePage : hiddenPage)}
    /* display: flex;
    flex-direction: column; */
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
    h3 {
        padding: 0.8rem;
        text-align: center;
        background-color: ${({ theme }) => theme.pallette.primary.dark};
        color: ${({ theme }) => theme.pallette.black[50]};
    }
    .resource-consumption {
        display: flex;
        gap: 0.4rem;
        flex-direction: column;
        align-items: stretch;
        .input-container {
            /* width: 100%; */
            label {
                width: 11rem;
            }
        }
    }
`
export const PageSection = styled.div`
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    width: max-content;
`
const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <div className="bar">
                <p>{props.progress}%</p>
            </div>
        </div>
    )
}
export const Progress = styled((props) => <ProgressBar {...props} />)`
    width: 100%;
    height: 18px;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    .bar {
        overflow: hidden;
        p {
            text-align: center;
        }
        width: ${(props) => props.progress}%;
        height: 100%;
        background-color: ${(props) =>
            props.progress < 50
                ? 'red'
                : props.progress < 100
                ? 'orange'
                : 'green'};
    }
`

export const SubmitSection = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    ${(props) => (props.activePage ? activePage : hiddenPage)};
    bottom: 1rem;
    right: 1rem;

    button {
        width: 5rem;
    }
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
            {/* {props.type === 'checkbox' ? '' : ''} */}
        </div>
    )
}

export const Input = styled((props) => <FormInput {...props} />).attrs({
    className: 'input-container',
})`
    display: ${(props) => (props.notFlex ? 'block' : 'flex')};
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};
    align-items: center;
    /* justify-content: space-between; */
    position: relative;
    cursor: pointer;
    /* border: 1px solid black; */
    /* max-width: 90%; */
    margin: 0 auto;

    input {
        width: ${(props) => (props.width ? props.width : '6rem')};
        border-style: none;
        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme.pallette.black[900]};
        color: ${({ theme }) => theme.pallette.black[900]};
        background-color: ${({ theme }) => theme.pallette.black[50]};
    }
    /* label {
        width: 100%;
    } */

    /* input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 
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
    } */
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
