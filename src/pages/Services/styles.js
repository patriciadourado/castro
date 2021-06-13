import styled from 'styled-components';
  
export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

`;
  
export const Title = styled.h1`
    font-size: 25rem;
    font-family: 'Montserrat';
    color: var(--color-gold);
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    margin: 2rem 0;
    padding-top: 16vh;
    padding-bottom: 30rem;

    @-moz-document url-prefix() {
        font-weight: lighter;
    }

`;

export const Cols = styled.div`
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;
  
export const Col = styled.div`
    width: calc(25% - 2rem);
    margin: 1rem;
    cursor: pointer;

    @media screen and (max-width: 64rem){
        width: calc(33.333333% - 2rem);
    }
  
    @media screen and (max-width: 48rem){
        width: calc(50% - 2rem);
    }
  
    @media screen and (max-width: 32rem){
        width: 100%;
        margin: 0 0 2rem 0;
    }

    @media(max-width: 887px){
        width: 100%;
        margin: 0 0 2rem 0;
        padding: 9rem 2rem 0;
    }
`;
  

export const Front = styled.div`
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    border-radius: 10px;
    background-position: center;
    background-image: ${({ img }) => `url(${img})`};
    -webkit-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1); 
    -webkit-transform: .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 280px;
    height: auto;
    border-radius: 10px;
    color: var(--color-white-light);
    font-size: 15rem;

    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    &:after{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        content: '';
        display: block;
        opacity: .6;
        background-color: var(--color-black);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 10px;
  }

  &:hover{
    -webkit-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1); 
  }
`;

export const Back = styled.div`
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    border-radius: 10px;
    background-position: center;
    background-image: ${({ src }) => src};
    -webkit-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1); 
    -webkit-transform: .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 280px;
    height: auto;
    border-radius: 10px;
    color: var(--color-white-light);
    font-size: 15rem;
    
    background: var(--color-gold);
    background: -webkit-linear-gradient(45deg,  var(--color-gold) 0%, var(--color-black) 100%);
    background: -o-linear-gradient(45deg,  var(--color-gold) 0%, var(--color-black) 100%);
    background: linear-gradient(45deg,  var(--color-gold) 0%, var(--color-black) 100%);
   
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    &:hover{
        -webkit-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }
`;
  
export const Container = styled.div`
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;

    &:hover{
        & ${Front}{
            -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }

        & ${Back}{
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }
    }
`;

export const Inner = styled.div`
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
`;
  
export const Paragraph = styled.p`
    font-size: 15rem;
    margin-bottom: 2rem;
    position: relative;
    text-align: center;
    font-family: 'Cinzel', monospace;
    &:after{
        content: '';
        width: 4rem;
        height: 2px;
        position: absolute;
        background: #C6D4DF;
        display: block;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -.75rem;
  }
`;
  
  
export const Span = styled.span`
    color: var(--color-gold);
    font-family: 'Cinzel', monospace;
    font-weight: 300;
    font-size: 25rem;
`;