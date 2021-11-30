import styled from 'styled-components'

const HeaderElement = (props) => {
    return (
        <header className={props.className}>
            <h1>Production Log</h1>
            <button onClick={props.displayFormHandler}>Add New Entry</button>
        </header>
    )
}

export const HeaderComponent = styled((props) => <HeaderElement {...props} />)`
    margin: 1rem auto;
    min-width: 360px;
    max-width: 600px;
    background-color: ${({ theme }) => theme.pallette.primary[500]};
    border-radius: 6px;
    color: ${({ theme }) => theme.pallette.black[50]};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    button {
        padding: 0.2rem 0.6rem;
        font-size: 1.2rem;
        border-style: none;
        border: 2px solid ${({ theme }) => theme.pallette.black[900]};
        font-weight: bold;
        color: ${({ theme }) => theme.pallette.secondary.c800};
        background-color: ${({ theme }) => theme.pallette.black[50]};
        border-radius: 3px;
        cursor: pointer;
    }
    button:hover {
        border: 2px solid ${({ theme }) => theme.pallette.black[300]};
        color: ${({ theme }) => theme.pallette.secondary.dark};
        background-color: ${({ theme }) => theme.pallette.black[100]};
    }
    button:active {
        border: 2px solid ${({ theme }) => theme.pallette.black[50]};
        color: ${({ theme }) => theme.pallette.secondary[800]};
        background-color: ${({ theme }) => theme.pallette.black[200]};
    }
`
