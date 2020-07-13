import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: #333333;
    padding: 32px 50px;
    width:100%;
    display:flex;
    flex-flow:row wrap;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:768px){
        padding: 16px;
    }

   .header__title{
       color:#fff;
       font-weight:bolder;
       font-family: Arial, sans-serif;
       font-size:25px;
   }

   .header__orange{
       color:#ff5500;
   }
   
`;
