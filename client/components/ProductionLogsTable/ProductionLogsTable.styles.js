import styled from 'styled-components'

export const TableContainer = styled.div`
    border: ${({ theme }) => theme.pallette.primary.dark} 2px solid;
    border-radius: 5px;
    width: 90%;
    margin: 0 auto;
    overflow-x: scroll;
`

const Table = (props) => <table {...props}>{props.children}</table>
export const TableWrapper = styled((props) => <Table {...props} />)`
    & > * {
        box-sizing: border-box;
    }
    border-collapse: collapse;
    border-spacing: 0;
    /* width: 100%; */
    /* max-width: 95%; */
    margin: 0 auto;
    /* overflow-x: scroll; */
    thead th {
        padding: 0.2rem;
        border-right: 1px solid ${({ theme }) => theme.pallette.secondary.dark};
    }
    thead th:last-of-type {
        border-right: none;
    }

    thead tr:nth-of-type(2) th {
        border: 1px solid ${({ theme }) => theme.pallette.secondary.dark};
    }
    thead tr:first-of-type {
        background-color: ${({ theme }) => theme.pallette.primary.dark};
        color: ${({ theme }) => theme.pallette.black[50]};
    }
    thead tr {
        color: ${({ theme }) => theme.pallette.black[50]};
        background-color: ${({ theme }) => theme.pallette.primary[500]};
    }

    tbody td {
        padding: 0.2rem;
        border-right: 1px solid ${({ theme }) => theme.pallette.secondary.c800};
        border-bottom: 1px solid gray;
        text-align: right;
    }
    tbody tr:nth-of-type(2n) {
        background-color: ${({ theme }) => theme.pallette.primary.extraLight};
    }
`

export const HeadingRowWrapper = styled.tr`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(7, 1fr);
    td {
        text-align: center;
    }
`
