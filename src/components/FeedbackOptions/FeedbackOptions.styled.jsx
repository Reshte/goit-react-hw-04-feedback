import styled from '@emotion/styled'

export const WrapperControls = styled.div`
 `;
 
export const Title = styled.h2``;

export const ButtonWrapper = styled.div`
display:flex;
gap:10px;
justify-content: center;
`;

export const Button = styled.button`
font-weight:bold;
font-size: 20px;
display:block;
height: 50px;
flex-basis:30%;
cursor:pointer;
border-radius: 5px;
padding: 8px 10px; 
border: solid 1px #777777; 
transition: all .3s linear;

&:hover {
  background-color: #00bfff;
  color:white;
}
`;
