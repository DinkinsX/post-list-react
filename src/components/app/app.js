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
        this.state = { //изменять стейт напрямую нельзя, а вот значения свойств можно
            data : [
                // {
                //     label: 'Mama mamaochka',
                //     important: false,
                //     like: false,
                //     id: 1
                // },
                // {
                //     label: 'Mama mamaochka',
                //     important: false,
                //     like: false,
                //     id: 2
                // },
                // {
                //     label: 'Mama mamaochka',
                //     important: false,
                //     like: false,
                //     id: 3
                // }
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;

        this.deleteItem = (id) => { //каждый раз вызывает метор рендер
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const before = data.slice(0, index);//
                const after = data.slice(index + 1);//
                const newArr = [...before, ...after];//промежуточная переменная
                return {
                    data: newArr
                }
            });
        }

        this.addItem = (body) => {
            const newItem = {
                label: body,
                important: false,
                id: this.maxId++
            }

            this.setState(({data}) => {
                const newArr = [...data, newItem]; //промежуточная переменная
                return {
                    data: newArr
                }
            });
        }

        this.onToggleImportant = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const old = data[index];
                const newItem = {...old, important: !old.important};

                const before = data.slice(0, index);//
                const after = data.slice(index + 1);//
                const newArr = [...before, newItem, ...after];
                
                return {
                    data: newArr
                }
            });
        }

        this.onToggleLiked = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const old = data[index];
                const newItem = {...old, like: !old.like};

                const before = data.slice(0, index);//
                const after = data.slice(index + 1);//
                const newArr = [...before, newItem, ...after];

                return {
                    data: newArr
                }
            });
        }

        this.searchPost = (items, term) => {
            if (term.length === 0) {
                return items;
            }

            return items.filter((item) => {
                return item.label.indexOf(term) > -1;
            })
        }

        this.filterPost = (items, filter) => {
            if (filter === 'like') {
                return items.filter(item => item.like);
            } else {
                return items;
            }
        }

        this.onUpdateSearch = (term) => {
            this.setState({term});
        }

        this.onFilterSelect = (filter) => {
            this.setState({filter});
        }
    }

    render() {    
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length,
            allPosts = data.length,
            visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
        <AppBlock>
            <AppHeader liked={liked}
            allPosts={allPosts}
            />
            <div className="search-panel d-flex">
                <SearchPanel
                onUpdateSearch={this.onUpdateSearch}/>
                <PostStatusFilter
                filter={filter}
                onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList 
            posts={visiblePosts} 
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked}/>
            <PostAddForm onAdd={this.addItem}/>
        </AppBlock>
        )
    }
}