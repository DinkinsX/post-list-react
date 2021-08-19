import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css'
import styled from 'styled-components';


const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

// const StyledAppBlock = styled(AppBlock)`
//     background-color: grey;
// `;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    label: 'Mama mamaochka',
                    important: false,
                    id: 'dss'
                },
                {
                    label: 'Mama mamaochka',
                    important: true,
                    id: 'wdw'
                },
                {
                    label: 'Mama mamaochka',
                    important: false,
                    id: 'ERVV'
                }
            ]
        };
        this.deleteItem = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const before = data.slice(0, index);
                const after = data.slice(index + 1);
                const newArr = [...before, ...after];
                return {
                    data: newArr
                }
            });
        }
    }

    render() {    
        return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={this.state.data} onDelete={this.deleteItem}/>
            <PostAddForm/>
        </AppBlock>
        )
    }
}