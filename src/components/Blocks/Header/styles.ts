import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledProps {
    $active?: boolean,
}

export const StyledHeader = styled.header`
    background-color: #225FBF;
    height: 68px;
    box-shadow: inset 0px -4px #1753B3;
`;

export const StyledHeaderContent = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    text-align: center;
    color: white;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

export const StyledNavLink = styled(Link)`
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    white-space: nowrap;

    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    color: ${(props: StyledProps) => props.$active ? `white` : 'rgba(246, 248, 253, 0.3)'};
`;

export const StyledCompanyHeading = styled.h1`
    width: fit-content;
    cursor: pointer;
    color: #CCDFFF;
    font-size: 10px;
    margin: 0;
    padding-left: 15.62px;
    letter-spacing: .65px;
`;

export const StyledServiceHeading = styled.h2`
    cursor: pointer;
    font-size: 14px;
    margin: 0;
    padding-left: 15.82px;
    padding-top: 3.5px;
    letter-spacing: .67px;
    text-align: left;
    white-space: nowrap;
`;

export const StyledNav = styled.nav`
    height: 100%;
    box-sizing: border-box; 
    padding-left: 276.42px;
`;

export const StyledUl = styled.ul`
    display: flex;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const StyledLi = styled.li<StyledProps>`
    margin-right: 41px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    position: relative;

    &:hover:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: #5495FF;
        height: 4px;
        border-radius: 3px 3px 3px 3px;      
    }

    &:last-child {
        margin-right: 0px;
    }

    ${(props) => props.$active ? `&:after {
                                        content: '';
                                        position: absolute;
                                        bottom: 0;
                                        left: 0;
                                        right: 0;
                                        background: #5495FF;
                                        height: 4px;
                                        border-radius: 3px 3px 3px 3px;      
                                    }` : ''}
`;

export const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    width: 236px;
    margin-left: 259px;
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
    width: 28px;
    height: 28px;
    border-radius: 100%;
    object-fit: cover;
`;

export const StyledProfileBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 124px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    border-radius: 23px;
    background-color: #1653b3;
    height: 32px;
    padding: 2px;
    box-sizing: border-box;
    margin-left: 16px;

    &:hover {
        background-color: #2366d1;
    }
`;

export const StyledProfileName = styled.div`
    width: 80%;
    height: 100%;
    text-align: center;
    line-height: 20px;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.4px;
`;

export const StyledDivProfile = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;