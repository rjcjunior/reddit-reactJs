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
    
    & + &{
        @media screen and (min-width:768px){
            margin-left:5px;
        }
        @media screen and (max-width:768px){
            margin-top:5px;
        }
    }
    
    &.fill{
        width:100%;

        section + &:last-child{
            margin:10px 0;
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