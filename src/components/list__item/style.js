import styled from 'styled-components'

export const ListItemStyle = styled.div`
    display:flex;
    flex-flow:row;
    background:#fff;
    outline: 0;
    transition: .2s linear;
    cursor:pointer;
    color: #000;
    padding:11px 0 11px 0;
    align-items:center;
    border-bottom: 1px solid  #6b6b6b;

    &:hover{
        background: #eeeeee;
    }

    .listItem__img{
        width:64px;
        height:64px;
        object-fit:cover;
        display:block;
        
    }

    .listItem__content{
        &:not(:first-child){
            margin-left:10px;
        }
    }

    .listItem__title{
        font-size: 24px;
        font-weight:bold;
    }

    .listItem__info{
        color:#000;

        span{
            &:first-child:not(:last-child){
                margin-right:5px;
            }
            &:last-child:not(:first-child){
                margin-left:5px;
            }
        }
    }

    .listItem__link{
        color:#000;
        text-decoration: underline;
    }
`;
