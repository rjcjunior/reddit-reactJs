import styled from 'styled-components'

export const OverlayStyle = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    left:0;
    top:0;
    display:flex;
    flex-flow:column;
    z-index:999;
    align-items: center;
    justify-content: center;

    &:before{
        content: '';
        height:100%;
        width:100%;
        left:0;
        background-color: #fff;
        top:0;
        opacity: .6;
    }

    &:after{
        content: '';
        width: 2em;
        height: 2em;
        background: 0 0;
        position: absolute;
        opacity: 1;
        pointer-events: none;
        border: 4px solid #FA6300;
        border-top: 4px solid transparent;
        border-radius: 50%;
        margin: auto;
        transition: all 0.25s ease-out;
        z-index: 2;
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;

        @media screen and (min-width:768px){
            width: 5em;
            height: 5em;
            border: 7px solid #FA6300;
            border-top: 7px solid transparent;
        }
    }
`;

export default OverlayStyle;