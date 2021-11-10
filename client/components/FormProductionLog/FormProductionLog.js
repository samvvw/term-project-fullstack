import {
    FormProductionLogWrapper,
    FormHeadSection,
    FormShiftProductionSection,
    FormResourceConsumptionSection,
} from './FormProductionLog.styles'

export default function FormProductionLog(props) {
    return (
        <FormProductionLogWrapper>
            Form
            <FormHeadSection>
                <div>
                    <label htmlFor="millManager">Mill Manager</label>
                    <input type="text" id="millManager" name="millManager" />
                </div>
                <div>
                    <label htmlFor="logDate">Log Date</label>
                    <input type="date" id="logDate" name="logDate" />
                </div>
            </FormHeadSection>
            <FormShiftProductionSection>
                <div className="shift-production-wrapper">
                    <h3>Shift Production</h3>
                    <div className="shift-production-section">
                        <h4>First Shift</h4>
                        <div>
                            <label htmlFor="firstShiftManager">
                                Shift Manager
                            </label>
                            <input
                                type="text"
                                id="firstShiftManager"
                                name="firstShiftManager"
                            />
                        </div>
                        <div>
                            <p>Material Type</p>
                            <div>
                                <label htmlFor="firstShiftMaterialStarched">
                                    Starched
                                </label>
                                <input
                                    type="checkbox"
                                    id="firstShiftMaterialStarched"
                                    name="firstShiftMaterialStarched"
                                    value="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="firstShiftMaterialWeight">
                                    Weight
                                </label>
                                <input
                                    type="number"
                                    id="firstShiftMaterialWeight"
                                    name="firstShiftMaterialWeight"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="firstShiftMaterialProduced">
                                Material Produced
                            </label>
                            <input
                                type="number"
                                id="firstShiftMaterialProduced"
                                name="firstShiftMaterialProduced"
                                min="0"
                            />
                        </div>
                        <div>
                            <label htmlFor="firstShiftRawMaterialConsumed">
                                Raw Material Consumed
                            </label>
                            <input
                                type="number"
                                id="firstShiftRawMaterialConsumed"
                                name="firstShiftRawMaterialConsumed"
                                min="0"
                            />
                        </div>
                    </div>
                    <div className="shift-production-section">
                        <h4>Second Shift</h4>
                        <div>
                            <label htmlFor="secondShiftManager">
                                Shift Manager
                            </label>
                            <input
                                type="text"
                                id="secondShiftManager"
                                name="secondShiftManager"
                            />
                        </div>
                        <div>
                            <p>Material Type</p>
                            <div>
                                <label htmlFor="secondShiftMaterialStarched">
                                    Starched
                                </label>
                                <input
                                    type="checkbox"
                                    id="secondShiftMaterialStarched"
                                    name="secondShiftMaterialStarched"
                                    value="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="secondShiftMaterialWeight">
                                    Weight
                                </label>
                                <input
                                    type="number"
                                    id="secondShiftMaterialWeight"
                                    name="secondShiftMaterialWeight"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="secondShiftMaterialProduced">
                                Material Produced
                            </label>
                            <input
                                type="number"
                                id="secondShiftMaterialProduced"
                                name="secondShiftMaterialProduced"
                                min="0"
                            />
                        </div>
                        <div>
                            <label htmlFor="secondShiftRawMaterialConsumed">
                                Raw Material Consumed
                            </label>
                            <input
                                type="number"
                                id="secondShiftRawMaterialConsumed"
                                name="secondShiftRawMaterialConsumed"
                                min="0"
                            />
                        </div>
                    </div>
                    <div className="shift-production-section">
                        <h4>Third Shift</h4>
                        <div>
                            <label htmlFor="thirdShiftManager">
                                Shift Manager
                            </label>
                            <input
                                type="text"
                                id="thirdShiftManager"
                                name="thirdShiftManager"
                            />
                        </div>
                        <div>
                            <p>Material Type</p>
                            <div>
                                <label htmlFor="thirdShiftMaterialStarched">
                                    Starched
                                </label>
                                <input
                                    type="checkbox"
                                    id="thirdShiftMaterialStarched"
                                    name="thirdShiftMaterialStarched"
                                    value="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="thirdShiftMaterialWeight">
                                    Weight
                                </label>
                                <input
                                    type="number"
                                    id="thirdShiftMaterialWeight"
                                    name="thirdShiftMaterialWeight"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="thirdShiftMaterialProduced">
                                Material Produced
                            </label>
                            <input
                                type="number"
                                id="thirdShiftMaterialProduced"
                                name="thirdShiftMaterialProduced"
                                min="0"
                            />
                        </div>
                        <div>
                            <label htmlFor="thirdShiftRawMaterialConsumed">
                                Raw Material Consumed
                            </label>
                            <input
                                type="number"
                                id="thirdShiftRawMaterialConsumed"
                                name="thirdShiftRawMaterialConsumed"
                                min="0"
                            />
                        </div>
                    </div>
                </div>
            </FormShiftProductionSection>
            <FormResourceConsumptionSection>
                <div>
                    <label htmlFor="coalUsed">Coal Used</label>
                    <input
                        type="number"
                        id="coalUsed"
                        name="coalUsed"
                        min="0"
                    />
                </div>
                <div>
                    <label htmlFor="electricityConsumed">
                        Electricity Consumed
                    </label>
                    <input
                        type="number"
                        id="electricityConsumed"
                        name="electricityConsumed"
                        min="0"
                    />
                </div>
                <div>
                    <label htmlFor="starchConsumed">Starch Consumed</label>
                    <input
                        type="number"
                        id="starchConsumed"
                        name="starchConsumed"
                        min="0"
                    />
                </div>
                <div>
                    <label htmlFor="polycationicConsumed">
                        Polycationic Consumed
                    </label>
                    <input
                        type="number"
                        id="polycationicConsumed"
                        name="polycationicConsumed"
                        min="0"
                    />
                </div>
                <div>
                    <label htmlFor="akdConsumed">AKD Consumed</label>
                    <input
                        type="number"
                        id="akdConsumed"
                        name="akdConsumed"
                        min="0"
                    />
                </div>
                <div>
                    <label htmlFor="dispro51Consumed">Dispro 51 Consumed</label>
                    <input
                        type="number"
                        id="dispro51Consumed"
                        name="dispro51Consumed"
                        min="0"
                    />
                </div>
                <div>
                    <label htmlFor="timeLost">Time Lost</label>
                    <input
                        type="number"
                        id="timeLost"
                        name="timeLost"
                        min="0"
                        max="24"
                    />
                </div>
            </FormResourceConsumptionSection>
        </FormProductionLogWrapper>
    )
}
