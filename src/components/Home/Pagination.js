import React from 'react';

function Pagination({placesPerPage, totalPlaces, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPlaces/placesPerPage ); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item black">
                        <p onClick={() => paginate(number)} href='' className="page-link text-dark">
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;