import styled from 'styled-components'

export const TableContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    overflow-x: scroll;
`

const Table = (props) => <table {...props}>{props.children}</table>
export const TableWrapper = styled((props) => <Table {...props} />)`
    /* width: 100%; */
    /* max-width: 95%; */
    margin: 0 auto;
    /* overflow-x: scroll; */
`

export const HeadingRowWrapper = styled.tr`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(7, 1fr);
    td {
        text-align: center;
    }
`
