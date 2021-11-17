import styled from 'styled-components'

const Table = (props) => <table {...props}>{props.children}</table>
export const TableWrapper = styled((props) => <Table {...props} />)`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
`

export const HeadingRowWrapper = styled.tr`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    td {
        text-align: center;
    }
`
