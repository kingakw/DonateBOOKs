import React, {useState} from 'react';
import Decoration from "../../assets/Decoration.svg";
import Pagination from "./Pagination";
import {placesCol, placesFund, placesOrg} from "./places";
import {Link} from 'react-scroll';

const HomeHelp = () => {

    const [index, setIndex] = useState(1);

    ///// Places per page
    const [currentPage, setCurrentPage] = useState(1);
    const [placesPerPage] = useState(3)

    ///// Places per page
    const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
    const currentPlacesFund = placesFund.slice(indexOfFirstPlace, indexOfLastPlace);
    const currentPlacesOrg = placesOrg.slice(indexOfFirstPlace, indexOfLastPlace);
    const currentPlacesCol = placesCol.slice(indexOfFirstPlace, indexOfLastPlace);

    ///// Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleToggle1 = () => {
        setCurrentPage(1);
        setIndex(1);
    };
    const handleToggle2 = () => {
        setIndex(2);
        setCurrentPage(1);
    };
    const handleToggle3 = () => {
        setIndex(3);
        setCurrentPage(1);
    }

    return (
        <div className="helpContainer" name="help">
            <p className="helpContainer__title"> Komu pomagamy? </p>
            <div className="helpContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <nav className="helpMenu">
                <div onClick={handleToggle1} className={`helpMenu__btn ${index === 1 ? "active" : ""}`}>
                    <p> Fundacjom </p>
                </div>
                <div onClick={handleToggle2} className={`helpMenu__btn ${index === 2 ? "active" : ""}`}>
                    <p> Organizacjom pozarządowym </p>
                </div>
                <div onClick={handleToggle3} className={`helpMenu__btn ${index === 3 ? "active" : ""}`}>
                    <p> Lokalnym zbiórkom </p>
                </div>
            </nav>

            <div className="helpMenu__places">
                <p className={`helpMenu__text ${index === 1 ? "active" : ""}`}> W naszej bazie znajdziesz listę
                    zweryfikowanych Fundacji,
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                    komu pomagają i czego potrzebują.</p>
                <p className={`helpMenu__text ${index === 2 ? "active" : ""}`}> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.</p>
                <p className={`helpMenu__text ${index === 3 ? "active" : ""}`}> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.</p>
            </div>
            {index === 1 && (<div className="helpMenu__list">
                    {currentPlacesFund.map(({name, id, description, staff}) => (
                        <div className="helpMenu__list__place" key={id}>
                            <div className="helpMenu__list__place__container">
                                <p className="helpMenu__list__place__text1"> {name} </p>
                                <p className="helpMenu__list__place__text2"> {description}  </p>
                            </div>
                            <p className="helpMenu__list__place__text3"> {staff}  </p>
                        </div>
                    ))
                    }
            </div>
            )
            }
            {index === 2 && (<div className="helpMenu__list">
                    {currentPlacesOrg.map(({name, id, description, staff}) => (
                        <div className="helpMenu__list__place" key={id}>
                            <div className="helpMenu__list__place__container">
                                <p className="helpMenu__list__place__text1"> {name} </p>
                                <p className="helpMenu__list__place__text2"> {description}  </p>
                            </div>
                            <p className="helpMenu__list__place__text3"> {staff}  </p>
                        </div>
                    ))
                    }
                </div>
            )
            }
            {index === 3 && (<div className="helpMenu__list">
                {currentPlacesCol.map(({name, id, description, staff}) => (
                    <div className="helpMenu__list__place" key={id}>
                        <div className="helpMenu__list__place__container">
                            <p className="helpMenu__list__place__text1"> {name} </p>
                            <p className="helpMenu__list__place__text2"> {description}  </p>
                        </div>
                        <p className="helpMenu__list__place__text3"> {staff}  </p>
                    </div>
                ))
                }
            </div>)
            }

            <Link to="help" smooth={true}>
                <div className={`helpMenu__pg ${index === 1 ? "active" : ""}`}>
                    <Pagination  placesPerPage={placesPerPage} totalPlaces={placesFund.length} paginate={paginate}/>
                </div>
                <div className={`helpMenu__pg ${index === 2 ? "active" : ""}`}>
                    <Pagination placesPerPage={placesPerPage} totalPlaces={placesOrg.length} paginate={paginate}/>
                </div>
                <div className={`helpMenu__pg ${index === 3 ? "active" : ""}`}>
                    <Pagination placesPerPage={placesPerPage} totalPlaces={placesCol.length} paginate={paginate}/>
                </div>
            </Link>

        </div>
    );
};
export default HomeHelp;

