import { useState } from 'react'
import axios from 'axios'
import {
    FormProductionLogWrapper,
    FormHeadSection,
    FormShiftProductionSection,
    FormResourceConsumptionSection,
    Input,
} from './FormProductionLog.styles'

export function FormProductionLog() {
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

    function handleSubmit(e) {
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

        axios
            .post('/api/production-log', data)
            .then((result) => {
                console.log(result.data)
            })
            .catch((error) => console.error(error))
    }
    return (
        <FormProductionLogWrapper onSubmit={handleSubmit}>
            <FormHeadSection>
                <Input
                    htmlFor="millManager"
                    label="Mill Manager"
                    type="text"
                    onChange={handleChange}
                    required
                    value={formstate.millManager}
                />
                <Input
                    htmlFor="logDate"
                    label="Log Date"
                    type="date"
                    onChange={handleChange}
                    required
                    value={formstate.logDate}
                />
            </FormHeadSection>
            <FormShiftProductionSection>
                <div className="shift-production-wrapper">
                    <h3>Shift Production</h3>
                    <ul className="shift-production-tabs">
                        <li
                            id="firstShift"
                            onClick={handleTabChange}
                            style={{
                                backgroundColor:
                                    shiftTab === 'firstShift' ? 'gray' : '',
                            }}
                        >
                            First Shift
                        </li>
                        <li
                            id="secondShift"
                            onClick={handleTabChange}
                            style={{
                                backgroundColor:
                                    shiftTab === 'secondShift' ? 'gray' : '',
                            }}
                        >
                            Second Shift
                        </li>
                        <li
                            id="thirdShift"
                            onClick={handleTabChange}
                            style={{
                                backgroundColor:
                                    shiftTab === 'thirdShift' ? 'gray' : '',
                            }}
                        >
                            Third Shift
                        </li>
                    </ul>
                    {shiftTab === 'firstShift' ? (
                        <div className="shift-production-section">
                            <h4>First Shift</h4>
                            <Input
                                htmlFor="firstShiftManager"
                                label="Shift Manager"
                                type="text"
                                onChange={handleChange}
                                required
                                value={formstate.firstShiftManager}
                            />
                            <div>
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
                                />
                            </div>
                            <Input
                                htmlFor="firstShiftMaterialProduced"
                                label="Material Produced"
                                type="number"
                                min="0"
                                onChange={handleChange}
                                required
                                value={formstate.firstShiftMaterialProduced}
                            />
                            <Input
                                htmlFor="firstShiftRawMaterialConsumed"
                                label="Raw Material Consumed"
                                type="number"
                                min="0"
                                onChange={handleChange}
                                required
                                value={formstate.firstShiftRawMaterialConsumed}
                            />
                        </div>
                    ) : (
                        ''
                    )}
                    {shiftTab === 'secondShift' ? (
                        <div className="shift-production-section">
                            <h4>Second Shift</h4>
                            <Input
                                htmlFor="secondShiftManager"
                                label="Shift Manager"
                                type="text"
                                onChange={handleChange}
                                required
                                value={formstate.secondShiftManager}
                            />
                            <div>
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
                                />
                            </div>
                            <Input
                                htmlFor="secondShiftMaterialProduced"
                                label="Material Produced"
                                type="number"
                                min="0"
                                onChange={handleChange}
                                required
                                value={formstate.secondShiftMaterialProduced}
                            />
                            <Input
                                htmlFor="secondShiftRawMaterialConsumed"
                                label="Raw Material Consumed"
                                type="number"
                                min="0"
                                onChange={handleChange}
                                required
                                value={formstate.secondShiftRawMaterialConsumed}
                            />
                        </div>
                    ) : (
                        ''
                    )}
                    {shiftTab === 'thirdShift' ? (
                        <div className="shift-production-section">
                            <h4>Third Shift</h4>
                            <Input
                                htmlFor="thirdShiftManager"
                                label="Shift Manager"
                                type="text"
                                onChange={handleChange}
                                required
                                value={formstate.thirdShiftManager}
                            />
                            <div>
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
                                />
                            </div>
                            <Input
                                htmlFor="thirdShiftMaterialProduced"
                                label="Material Produced"
                                type="number"
                                min="0"
                                onChange={handleChange}
                                required
                                value={formstate.thirdShiftMaterialProduced}
                            />
                            <Input
                                htmlFor="thirdShiftRawMaterialConsumed"
                                label="Raw Material Consumed"
                                type="number"
                                min="0"
                                onChange={handleChange}
                                required
                                value={formstate.thirdShiftRawMaterialConsumed}
                            />
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </FormShiftProductionSection>
            <FormResourceConsumptionSection>
                <Input
                    htmlFor="coalUsed"
                    label="Coal Used"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    required
                    value={formstate.coalUsed}
                />
                <Input
                    htmlFor="electricityConsumed"
                    label="Electricity Consumed"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    required
                    value={formstate.electricityConsumed}
                />
                <Input
                    htmlFor="starchConsumed"
                    label="Starch Consumed"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    required
                    value={formstate.starchConsumed}
                />
                <Input
                    htmlFor="polycationicConsumed"
                    label="Polycationic Consumed"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    required
                    value={formstate.polycationicConsumed}
                />
                <Input
                    htmlFor="akdConsumed"
                    label="AKD Consumed"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    required
                    value={formstate.akdConsumed}
                />
                <Input
                    htmlFor="antifoamConsumed"
                    label="Antifoam"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    required
                    value={formstate.antifoamConsumed}
                />
                <Input
                    htmlFor="dispro51Consumed"
                    label="Dispro 51 Consumed"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    required
                    value={formstate.dispro51Consumed}
                />
                <Input
                    htmlFor="timeLost"
                    label="Time Lost"
                    type="number"
                    min="0"
                    max="24"
                    onChange={handleChange}
                    required
                    value={formstate.timeLost}
                />
            </FormResourceConsumptionSection>
            <div>
                <button type="submit">Submit</button>
            </div>
            <pre>{JSON.stringify(formstate, null, 4)}</pre>
        </FormProductionLogWrapper>
    )
}
