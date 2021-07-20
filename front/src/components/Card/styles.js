import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
    display: flex;
    background-color: ${theme.colors.gray};
    height: 115px;
    width: 601px;
    border-radius: 20px;   
`

const NameFunctionContainer= styled.div`
width: 481px;
display: flex;
justify-content: space-between;
margin-top: 13px;
`

const Name= styled.h1`
margin-left: 13px;
font-family: ${theme.fonts.title};
font-size: 1.37rem;
`

const Function= styled.p`
margin-right: 35px;
font-family: ${theme.fonts.paragraph};
`

const Username= styled.p`
margin-left: 13px;
font-family: ${theme.fonts.paragraph};
margin-top: 5px;
`

const StatusContainer = styled.div`
    display: flex;
    margin-top: 19px;
`

const Icon= styled.img`
margin-left: 13px;
margin-right: 9px;   
`

const Status= styled.p`
font-family: ${theme.fonts.title};   
`


export {Container}; 
export {NameFunctionContainer}; 
export {Name}; 
export {Function};
export {Username};
export {StatusContainer}; 
export {Icon}; 
export {Status};