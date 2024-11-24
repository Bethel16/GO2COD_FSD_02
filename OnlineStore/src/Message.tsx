import React from 'react';

export default function App() {
    return (
        <div>
            <Message />
        </div>
    );
}

export function Message(): JSX.Element {
    return <h1>Hello</h1>;
}
