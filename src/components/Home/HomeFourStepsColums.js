import React from 'react';

const HomeThreeColumns = () => {
    const columns = [
        {
            number: `20 430`,
            element: `donated books`
        },
        {
            number: 8,
            element: `child-care homes & libraries supported`
        },
        {
            number: 3,
            element: `events organized`
        }
]
    const listColumn = columns.map((column) =>
        <div key={column.number} className="treeColumns" id="fourSteps">
            <p className="treeColumns__text1"> {column.number} </p>
            <p className="treeColumns__text2"> {column.element}  </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisc
                <br/>Pellentesque vel enim a elit viverra elementuma.
                <br/>Aliquam erat volutpat.
            </p>
        </div>
    )
    return (
        <div className="container">
            {listColumn}
        </div>
    );
};
export default HomeThreeColumns;
