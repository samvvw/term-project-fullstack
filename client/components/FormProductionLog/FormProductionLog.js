import { useState } from 'react'
import axios from 'axios'
import {
    FormProductionLogWrapper,
    FormHeadSection,
    FormShiftProductionSection,
    FormResourceConsumptionSection,
    Input,
    ShiftProductionSection,
    SubmitSection,
    PageSection,
} from './FormProductionLog.styles'

export function FormProductionLog({ setData }) {
    const [formstate, setFormstate] = useState({
        millManager: '',
        logDate: '',
        firstShiftManager: '',
        firstShiftMaterialStarched: false,
        firstShiftMaterialWeight: '',
        firstShiftMaterialProduced: '',
        firstShiftRawMaterialConsumed: '',
        secondShiftManager: '',
        secondShiftMaterialStarched: false,
        secondShiftMaterialWeight: '',
        secondShiftMaterialProduced: '',
        secondShiftRawMaterialConsumed: '',
        thirdShiftManager: '',
        thirdShiftMaterialStarched: false,
        thirdShiftMaterialWeight: '',
        thirdShiftMaterialProduced: '',
        thirdShiftRawMaterialConsumed: '',
        coalUsed: '',
        electricityConsumed: '',
        starchConsumed: '',
        polycationicConsumed: '',
        akdConsumed: '',
        antifoamConsumed: '',
        dispro51Consumed: '',
        timeLost: '',
    })

    const [formPage, setFormPage] = useState(1)
    const [shiftTab, setShiftTab] = useState('firstShift')

    function handleChange(e) {
        if (e.target.type === 'checkbox') {
            setFormstate((prev) => {
                return { ...prev, [e.target.name]: e.target.checked }
            })
        } else {
            e.preventDefault()
            setFormstate((prev) => {
                return { ...prev, [e.target.name]: e.target.value }
            })
        }
    }

    function handleTabChange(e) {
        setShiftTab(e.target.id)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const data = {
            date: formstate.logDate,
            millManager: formstate.millManager,
            firstShift: {
                shiftManager: formstate.firstShiftManager,
                materialType: {
                    starched: formstate.firstShiftMaterialStarched,
                    weight: formstate.firstShiftMaterialWeight,
                },
                materialProduced: formstate.firstShiftMaterialProduced,
                rawMaterialConsumed: formstate.firstShiftRawMaterialConsumed,
            },
            secondShift: {
                shiftManager: formstate.secondShiftManager,
                materialType: {
                    starched: formstate.secondShiftMaterialStarched,
                    weight: formstate.secondShiftMaterialWeight,
                },
                materialProduced: formstate.secondShiftMaterialProduced,
                rawMaterialConsumed: formstate.secondShiftRawMaterialConsumed,
            },
            thirdShift: {
                shiftManager: formstate.thirdShiftManager,
                materialType: {
                    starched: formstate.thirdShiftMaterialStarched,
                    weight: formstate.thirdShiftMaterialWeight,
                },
                materialProduced: formstate.thirdShiftMaterialProduced,
                rawMaterialConsumed: formstate.thirdShiftRawMaterialConsumed,
            },
            coalUsed: formstate.coalUsed,
            electricityConsumed: formstate.electricityConsumed,
            starchConsumed: formstate.starchConsumed,
            polycationicConsumed: formstate.polycationicConsumed,
            akdConsumed: formstate.akdConsumed,
            antifoamConsumed: formstate.antifoamConsumed,
            dispro51Consumed: formstate.dispro51Consumed,
            timeLost: formstate.timeLost,
        }

        try {
            const response = await axios.post('/api/production-log', data)

            if (response) {
                const responseget = await axios.get('/api/production-log')

                const responseData = await responseget.data

                setData(responseData)
                setFormstate({
                    millManager: '',
                    logDate: '',
                    firstShiftManager: '',
                    firstShiftMaterialStarched: false,
                    firstShiftMaterialWeight: '',
                    firstShiftMaterialProduced: '',
                    firstShiftRawMaterialConsumed: '',
                    secondShiftManager: '',
                    secondShiftMaterialStarched: false,
                    secondShiftMaterialWeight: '',
                    secondShiftMaterialProduced: '',
                    secondShiftRawMaterialConsumed: '',
                    thirdShiftManager: '',
                    thirdShiftMaterialStarched: false,
                    thirdShiftMaterialWeight: '',
                    thirdShiftMaterialProduced: '',
                    thirdShiftRawMaterialConsumed: '',
                    coalUsed: '',
                    electricityConsumed: '',
                    starchConsumed: '',
                    polycationicConsumed: '',
                    akdConsumed: '',
                    antifoamConsumed: '',
                    dispro51Consumed: '',
                    timeLost: '',
                })

                e.target.elements.millManager.focus()
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleNextPage() {
        setFormPage((prev) => (prev < 6 ? (prev += 1) : 6))
    }

    function handlePreviousPage() {
        setFormPage((prev) => (prev > 1 ? (prev -= 1) : 1))
    }

    function handleGoToPage(page) {
        if (page >= 3 || page <= 5) {
            setFormPage(page)
        }
    }

    return (
        <FormProductionLogWrapper onSubmit={handleSubmit}>
            <FormHeadSection activePage={formPage === 1 ? true : false}>
                <h3>Daily Production Log</h3>
                <h4>Paper Mill 4</h4>
                <Input
                    htmlFor="millManager"
                    label="Mill Manager"
                    type="text"
                    width={'9rem'}
                    column="true"
                    onChange={handleChange}
                    required
                    value={formstate.millManager}
                    placeholder="John Doe..."
                />
                <Input
                    htmlFor="logDate"
                    label="Log Date"
                    type="date"
                    width={'9rem'}
                    column="true"
                    onChange={handleChange}
                    required
                    value={formstate.logDate}
                />
            </FormHeadSection>
            <FormResourceConsumptionSection
                activePage={formPage === 2 ? true : false}
            >
                <h3>Resource Consumption</h3>
                <Input
                    htmlFor="coalUsed"
                    label="Coal Used"
                    type="number"
                    min="-1"
                    step={-1.1}
                    onChange={handleChange}
                    required
                    value={formstate.coalUsed}
                    placeholder="kg"
                />
                <Input
                    htmlFor="electricityConsumed"
                    label="Electricity Consumed"
                    type="number"
                    min="-1"
                    step={-1.1}
                    onChange={handleChange}
                    required
                    value={formstate.electricityConsumed}
                    placeholder="kw"
                />
                <Input
                    htmlFor="starchConsumed"
                    label="Starch Consumed"
                    type="number"
                    min="-1"
                    step={-1.1}
                    onChange={handleChange}
                    required
                    value={formstate.starchConsumed}
                    placeholder="kg"
                />
                <Input
                    htmlFor="polycationicConsumed"
                    label="Polycationic Consumed"
                    type="number"
                    min="-1"
                    step={-1.1}
                    onChange={handleChange}
                    required
                    value={formstate.polycationicConsumed}
                    placeholder="kg"
                />
                <Input
                    htmlFor="akdConsumed"
                    label="AKD Consumed"
                    type="number"
                    min="-1"
                    step={-1.1}
                    onChange={handleChange}
                    required
                    value={formstate.akdConsumed}
                    placeholder="kg"
                />
                <Input
                    htmlFor="antifoamConsumed"
                    label="Antifoam"
                    type="number"
                    min="-1"
                    step={-1.1}
                    onChange={handleChange}
                    required
                    value={formstate.antifoamConsumed}
                    placeholder="kg"
                />
                <Input
                    htmlFor="dispro51Consumed"
                    label="Dispro 51 Consumed"
                    type="number"
                    min="-1"
                    step={-1.1}
                    onChange={handleChange}
                    required
                    value={formstate.dispro51Consumed}
                    placeholder="kg"
                />
                <Input
                    htmlFor="timeLost"
                    label="Time Lost"
                    type="number"
                    min="-1"
                    max="23"
                    onChange={handleChange}
                    required
                    value={formstate.timeLost}
                    placeholder="Hours"
                />
            </FormResourceConsumptionSection>
            <FormShiftProductionSection
                activePage={formPage >= 3 && formPage <= 5 ? true : false}
            >
                <div className="shift-production-wrapper">
                    <h3>Shift Production</h3>
                    {/* <ul className="shift-production-tabs">
                        <li
                            id="firstShift"
                            onClick={(e) => {
                                handleTabChange(e)
                                handleGoToPage(3)
                            }}
                            className={
                                shiftTab === 'firstShift' ? 'active' : ''
                            }
                        >
                            First Shift
                        </li>
                        <li
                            id="secondShift"
                            onClick={(e) => {
                                handleTabChange(e)
                                handleGoToPage(4)
                            }}
                            className={
                                shiftTab === 'secondShift' ? 'active' : ''
                            }
                        >
                            Second Shift
                        </li>
                        <li
                            id="thirdShift"
                            onClick={(e) => {
                                handleTabChange(e)
                                handleGoToPage(5)
                            }}
                            className={
                                shiftTab === 'thirdShift' ? 'active' : ''
                            }
                        >
                            Third Shift
                        </li>
                    </ul> */}

                    <div className="tab-wrapper">
                        <ShiftProductionSection
                            className="shift-production-section"
                            activePage={formPage === 3 ? true : false}
                        >
                            <h4>First Shift</h4>
                            <Input
                                htmlFor="firstShiftManager"
                                label="Shift Manager"
                                type="text"
                                onChange={handleChange}
                                required
                                value={formstate.firstShiftManager}
                                placeholder="Jane Doe"
                            />
                            <div className="material-type">
                                <p>Material Type</p>
                                <Input
                                    htmlFor="firstShiftMaterialStarched"
                                    label="Starched"
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={
                                        formstate.firstShiftMaterialStarched
                                    }
                                />
                                <Input
                                    htmlFor="firstShiftMaterialWeight"
                                    label="Weight"
                                    type="number"
                                    onChange={handleChange}
                                    min="0"
                                    required
                                    value={formstate.firstShiftMaterialWeight}
                                    placeholder="gr"
                                />
                            </div>
                            <Input
                                htmlFor="firstShiftMaterialProduced"
                                label="Material Produced"
                                type="number"
                                min="0"
                                step={0.1}
                                onChange={handleChange}
                                required
                                value={formstate.firstShiftMaterialProduced}
                                placeholder="kg"
                            />
                            <Input
                                htmlFor="firstShiftRawMaterialConsumed"
                                label="Raw Material Consumed"
                                type="number"
                                min="0"
                                step={0.1}
                                onChange={handleChange}
                                required
                                value={formstate.firstShiftRawMaterialConsumed}
                                placeholder="kg"
                            />
                        </ShiftProductionSection>

                        <ShiftProductionSection
                            className="shift-production-section"
                            activePage={formPage === 4 ? true : false}
                        >
                            <h4>Second Shift</h4>
                            <Input
                                htmlFor="secondShiftManager"
                                label="Shift Manager"
                                type="text"
                                onChange={handleChange}
                                required
                                value={formstate.secondShiftManager}
                                placeholder="Jane Doe"
                            />
                            <div className="material-type">
                                <p>Material Type</p>
                                <Input
                                    htmlFor="secondShiftMaterialStarched"
                                    label="Starched"
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={
                                        formstate.secondShiftMaterialStarched
                                    }
                                />
                                <Input
                                    htmlFor="secondShiftMaterialWeight"
                                    label="Weight"
                                    type="number"
                                    onChange={handleChange}
                                    min="0"
                                    required
                                    value={formstate.secondShiftMaterialWeight}
                                    placeholder="gr"
                                />
                            </div>
                            <Input
                                htmlFor="secondShiftMaterialProduced"
                                label="Material Produced"
                                type="number"
                                min="0"
                                step={0.1}
                                onChange={handleChange}
                                required
                                value={formstate.secondShiftMaterialProduced}
                                placeholder="kg"
                            />
                            <Input
                                htmlFor="secondShiftRawMaterialConsumed"
                                label="Raw Material Consumed"
                                type="number"
                                min="0"
                                step={0.1}
                                onChange={handleChange}
                                required
                                value={formstate.secondShiftRawMaterialConsumed}
                                placeholder="kg"
                            />
                        </ShiftProductionSection>
                        <ShiftProductionSection
                            className="shift-production-section"
                            activePage={formPage === 5 ? true : false}
                        >
                            <h4>Third Shift</h4>
                            <Input
                                htmlFor="thirdShiftManager"
                                label="Shift Manager"
                                type="text"
                                onChange={handleChange}
                                required
                                value={formstate.thirdShiftManager}
                                placeholder="Jane Doe"
                            />
                            <div className="material-type">
                                <p>Material Type</p>
                                <Input
                                    htmlFor="thirdShiftMaterialStarched"
                                    label="Starched"
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={
                                        formstate.thirdShiftMaterialStarched
                                    }
                                />
                                <Input
                                    htmlFor="thirdShiftMaterialWeight"
                                    label="Weight"
                                    type="number"
                                    onChange={handleChange}
                                    min="0"
                                    required
                                    value={formstate.thirdShiftMaterialWeight}
                                    placeholder="gr"
                                />
                            </div>
                            <Input
                                htmlFor="thirdShiftMaterialProduced"
                                label="Material Produced"
                                type="number"
                                min="0"
                                step={0.1}
                                onChange={handleChange}
                                required
                                value={formstate.thirdShiftMaterialProduced}
                                placeholder="kg"
                            />
                            <Input
                                htmlFor="thirdShiftRawMaterialConsumed"
                                label="Raw Material Consumed"
                                type="number"
                                min="0"
                                step={0.1}
                                onChange={handleChange}
                                required
                                value={formstate.thirdShiftRawMaterialConsumed}
                                placeholder="kg"
                            />
                        </ShiftProductionSection>
                    </div>
                </div>
            </FormShiftProductionSection>
            <SubmitSection activePage={formPage === 6 ? true : false}>
                <button type="button" onClick={handlePreviousPage}>
                    Previous
                </button>
                <button type="submit" disabled={formPage === 6 ? false : true}>
                    Submit
                </button>
            </SubmitSection>
            <PageSection>
                <button type="button" onClick={handlePreviousPage}>
                    Previous
                </button>
                <p>
                    Page <span>{formPage}/6</span>
                </p>
                <button type="button" onClick={handleNextPage}>
                    Next
                </button>
                {`${Math.round(
                    (Object.values(formstate).reduce((acc, curr) => {
                        if (typeof curr !== 'boolean') {
                            return curr ? acc + 1 : acc
                        } else {
                            return acc
                        }
                    }, 0) /
                        22) *
                        100
                )}% Completed`}
            </PageSection>
        </FormProductionLogWrapper>
    )
}
