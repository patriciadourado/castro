import styled, { css } from 'styled-components';

export const InformationsTitle = styled.h5`
    color: var(--color-gold);
    justify-content: center;
    display: flex;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    line-height: 1.875;
    margin-bottom: 3rem;
    letter-spacing: .4rem;
    
    padding-top: 15vh;

    @-moz-document url-prefix() {
        font-weight: lighter;
    }
  
`;

export const Wrapper = styled.section`
    font-family: 'Cinzel', serif;
    background: var(--color-white-light);
	display: block;
	justify-content: center;
	align-items: center;

    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;

    &:before {
    	position: relative;
        box-sizing: border-box;
    }
    &:after {
    	position: relative;
        box-sizing: border-box;
    }
`;

export const Card = styled.div`
	padding: 0 2rem;
    background: var(--color-gold);
	border-radius: 10rem;
	opacity: 0.6;
    color: var(--color-black);
	display: flex;
	justify-content: center;
    align-items: center;
	
	transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
	transition-property: background-color, transform, color, opacity;
	
	&::before {
		box-shadow: -2px 2px 8px 2px hsla(0, 0%, 0%, 0.2);
	}
	
	&:empty {
		opacity: 0.3;
	}
		
	&::before, &::after {
		content: "";
		position: absolute;
		border-radius: 10rem;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1);
	}

	&::after {
		box-shadow: -20px 20px 12px 6px hsla(0, 0%, 0%, 0.2);
		opacity: 0;
	}

    &:not(:empty):focus {
        z-index: 1;
        color: #fff;
        background: #ea124f;
        opacity: 1;
        transform: scale(1.15) rotateZ(20deg);
        cursor: pointer;
	
        &:after {
            opacity: 1;
        }
        
        &:before {
            opacity: 0;
        }
    }

    &:not(:empty):hover{
        z-index: 1;
        color: #fff;
        background: #ea124f;
        opacity: 1;
        transform: scale(1.15) rotateZ(20deg);
        cursor: pointer;
	
        &:after {
            opacity: 1;
        }
        
        &:before {
            opacity: 0;
        }
    }
    
    @media only screen and (max-width: 600px) {
		grid-area: auto;
		text-align: left;
		
		&:empty {
			display: none;
		}
	}

    ${({ item1 }) =>
        item1 &&
        css`
        grid-area: 1 / 2 / 2 / 3;
        
        &:not(:empty):hover{
            background: var(--color-yellow);
        }
        
        &:not(:empty):focus {
            background: var(--color-yellow);
        }    
        @media only screen and (max-width: 600px) {
            /* grid-area: 1 / 1 / 2 / 3; */
            grid-area: 3 / 1 / 4 / 3;
        }
    `};
    
    ${({ item2 }) =>
        item2 &&
        css`
        grid-area: 3 / 4 / 4 / 5;
	
        &:not(:empty):hover{
            background: #00005c;
        }
        
        &:not(:empty):focus {
            background: #00005c;
        }
    `};

    ${({ item3 }) =>
        item3 &&
        css`
	    grid-area: 2 / 1 / 3 / 2;
    `};
    
    ${({ item4 }) =>
        item4 &&
        css`
	    grid-area: 1 / 3 / 2 / 5;
    `};

    ${({ item5 }) =>
        item5 &&
        css`
	    grid-area: 2 / 3 / 3 / 4;
    `};
    
    ${({ item6 }) =>
        item6 &&
        css`
	    grid-area: 3 / 4 / 4 / 5;
    `};
    ${({ item7 }) =>
        item7 &&
        css`
	    grid-area: 3 / 3 / 4 / 4;
    `};
    ${({ item8 }) =>
        item8 &&
        css`
	    grid-area: 1 / 5 / 2 / 6;
        &:not(:empty):hover {
            background: #f57b51;
        }
        &:not(:empty):focus {
            background: #f57b51;
        }
    `};
    ${({ item9 }) =>
        item9 &&
        css`
	    grid-area: 2 / 5 / 3 / 6;
    `};
    ${({ item10 }) =>
        item10 &&
        css`
	    grid-area: 3 / 5 / 4 / 6;
    `};
    ${({ item11 }) =>
        item11 &&
        css`
	    grid-area: 4 / 2 / 3 / 3;
	
        &:not(:empty):hover{
            background: #00a8cc;
        }
        &:not(:empty):focus {
            background: #00a8cc;
        }
    `};
`;

export const Grid = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;
	display: grid;
	overflow: hidden;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-gap: 10px;

    padding-top: 2vh;

    @media only screen and (max-width: 600px){
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(6, minmax(auto, 300px));
		overflow-y: scroll;
	}
`;

export const InfoCard = styled.h2`
    margin: 2.75rem 0 1.05rem;
 	line-height: 1.2;
 	font-style: normal;
	font-weight: 700;
	font-size: 12rem;
    font-family: 'Cinzel', serif;
	text-align: center;

    @-moz-document url-prefix() {
        font-weight: lighter;
        font-size: 12rem;
    }
`;
