// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:5rem 0rem;
`

export const MainContainer = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    row-gap:2rem;

    @media (max-width:767px) {
        width:90%;
    }

`

export const Heading = styled.h1`
    font-size:2rem;
    color:darkblue;
    font-weight:bold;
    font-family:Roboto;
    text-align:center;
`

export const Text = styled.p`
 font-size:1.8rem;
 color:grey;
 text-align:center;
`

export const Image = styled.img`
    height:45rem;
    width:100%;
    object-fit:cover;
    object-position:center;

`

export const Button = styled.button`

    background-color:steelblue;
    color:white;
    padding:1rem 2rem;
    border-radius:1rem;
    border:none;
    outline:none;

`

export const Description = styled(Text)`
    text-align:left;
`
