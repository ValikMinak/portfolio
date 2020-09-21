import styled from 'styled-components'


export const PortfolioStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction:column;
  width: 100vw;
  height: 100vh;
  font-family: Tokyo , sans-serif ;
  transition: all .3s;
  padding-right:${({ isShowSidebar })=>isShowSidebar?"0":"161px"};
  animation: animAppear 1.5s forwards;
  opacity:0;
  .portfolio{
    &__title{
        color:${({color}) => color};
        transition:all .3s;
        width:300px;
        height:50px;
        &Check{
        font-size:12px;
        }
        &:hover{
        font-size:30px;
        }
        }
        &__page{
        display: flex;
        align-items: center;
        flex-direction:column;
        }
        &__technologies{
            display:grid;
            grid-template-columns: 4fr 4fr 4fr;
            grid-row-gap:50px;
            grid-column-gap:80px;
            margin-top:50px;
  
  span {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100px;
        height:100px;
        background-color:${({color}) => color};
        }
     }
     &__slider {
        display:flex;
        flex-direction:column;
        position:absolute;
        top:50%;
        right:20px;
            a {
                display:block;
                background-color:${({color}) => color};
                margin-top:15px;
                width:6px;
                height:6px;
                border-radius:50%;
                transition:all .3s;
                opacity:.5;
                }
            .active{
            opacity:1;
            transform:scale(2);
            position:relative;
            &::before{
             content:'${({name})=>name}';
             position: absolute;
             right: 9px;
             top: -3px;
             height: 6px;
             font-size: 7px;
             border-radius: 30px;
             background-color: ${({ color })=>color};
             padding: 3px;
            
            }
                }
            }
        &__text{
            width:500px;
            height:200px;
            position:absolute;
            left:60px;
            top:0px;
            font-size:12px;
            opacity:0;
            transition:.3s;
        }
        &__about{
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;
            width:50px;
            height:50px;
            border-radius:50%;
            background-color:${({color}) => color};
            font-size:22px;
            cursor:pointer;
            &:hover .portfolio__text{
            opacity:1;
            }
            }
            
    }
    @keyframes animAppear {
    to{
    opacity:1;
    }
    }
  
`
