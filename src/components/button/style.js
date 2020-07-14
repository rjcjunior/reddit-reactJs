import styled from 'styled-components'

export const ButtonStyle = styled.button`
    background-color: #666666;
    color:#fff;
    min-width: 160px;
    padding: 10px;
    border: none;
    border-radius: 6px;
    font-size:17px;
    text-transform: uppercase;
    outline: 0;
    transition: .2s linear;
    cursor:pointer;

    &:hover{
        opacity:.7;
    }
    
    &:focus{
        box-shadow: -1px -1px 5px 1px #000;
    }

    & + &{
        @media screen and (min-width:768px){
            margin-left:5px;
        }
        @media screen and (max-width:768px){
            margin-top:5px;
        }
    }
    
    &.active{
        background-color:#ff5500;
    }

    @media screen and (max-width:768px){
        width:100%;
    }
`;

export default ButtonStyle;