import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 { 
        font-size: 26px;
        color: ${props => props.colored ? 'purple' : 'black'};
        :hover {
            color: red;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = ({liked, allPosts}) => {
    return (

        <Header colored>
            <h1>Даниил Вохрин</h1>
            <h2>{allPosts} записей, {liked} понравилось</h2>
        </Header>

    )
}

export default AppHeader;