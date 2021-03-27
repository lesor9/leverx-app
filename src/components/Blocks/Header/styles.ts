import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledLiProps {
    active?: boolean,
}

export const StyledHeader = styled.header`
    background-color: #2967b9;
    height: 80px;
    border-bottom: 4px #1753B3 solid;
`;

export const StyledHeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    text-align: center;
    color: white;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

export const StyledNavLink = styled(Link)`
    color: white;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const StyledCompanyHeading = styled.h1`
    width: fit-content;
    cursor: pointer;
    color: #86a9e3;
    font-size: 15px;
    margin: 0;
`;

export const StyledServiceHeading = styled.h2`
    cursor: pointer;
    font-size: 25px;
    margin: 0;
`;

export const StyledNav = styled.nav`
    height: 100%;
    box-sizing: border-box; 
`;

export const StyledUl = styled.ul`
    display: flex;
    height: 100%;
    cursor: pointer;
    list-style: none;
    margin: 0;
`;

export const StyledLi = styled.li<StyledLiProps>`
    margin-right: 30px;
    display: flex;
    align-items: center;
    border-bottom: 5px transparent solid;
    padding: 0 10px;

    &:last-child {
        margin-right: 0px;
    }

    &:hover {
        border-bottom: 5px solid #5092fa;
    }

    ${(props) => props.active ? `border-bottom: 5px solid #5092fa;` : ''}
`;

export const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
`;

export const StyledIconImage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-radius: 100%;
    background-color: #1653b3;
    padding: 4px;

    &:hover {
        background-color: #2366d1;
    }
`;

export const StyledImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
`;

export const StyledProfileBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    border-radius: 40px;
    background-color: #1653b3;
    height: 40px;

    &:hover {
        background-color: #2366d1;
    }
`;

export const StyledProfileName = styled.div`
    width: 80%;
    height: 100%;
    text-align: center;
`;

export const StyledDivProfile = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;