import styled from 'styled-components'

interface Props {
  background?: string
}

export const TransCover = styled.div<Props>`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
opacity: 0;
transition: .5s ease;
background: ${({ theme }) => theme.colors.main};
border-radius: ${({ theme }) => theme.borderRadius};

&:hover {
  opacity: 1;
},
`
