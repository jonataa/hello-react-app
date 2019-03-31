import React from 'react';

import Post from './Post';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="Hello, ReactJS!" />
                <Post title="Estou començando com ReactJS" />
                <Post title="Fizz Buzz" />
            </div>
        );
    }

}