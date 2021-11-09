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
            <FormHeadSection>Date - MillManager</FormHeadSection>
            <FormShiftProductionSection>
                Shift Production Section
            </FormShiftProductionSection>
            <FormResourceConsumptionSection>
                Resource Consumption Section
            </FormResourceConsumptionSection>
        </FormProductionLogWrapper>
    )
}
