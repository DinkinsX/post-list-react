import React from 'react';
import { Button } from 'reactstrap';

const PostStatusFilter = () => {
    return (

        <div className="btn-group">
            <Button outline color="info">Все</Button>
            <button type="button" className="btn btn-info">Все посты</button>
            <button type="button" className="btn btn-outline-secondary">Понравились</button>
        </div>

    )
}

export default PostStatusFilter;