import React, {useState} from 'react';
import Decoration from "../../assets/Decoration.svg";
import Pagination from "./Pagination";
import {getPlaces} from "./places";
import {Link} from 'react-scroll';


const HomeHelp = () => {
    let places = getPlaces();

    ///// 1- Fundacja ; 2 - Organizacja; 3 - Zbiórka
    const [orgType, setOrgType] = useState(1);
    const handleToggle = (orgType) => setOrgType(orgType);


    const [currentPage, setCurrentPage] = useState(1);
    const [placesPerPage] = useState(3);

    ///// Places per page
    const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
    const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

    ///// Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    ////Place type
    if (orgType === 2) {
        places = places.filter(({type}) => (type === `Fundacja`))
    }
    if (orgType === 3) {
        places = places.filter(({type}) => (type === `Organizacja`))
    } else {
        places = places.filter(({type}) => (type === `Fundacja`))
    }


    return (
        <div className="helpContainer" name="help">
            <p className="helpContainer__title"> Komu pomagamy? </p>
            <div className="helpContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <nav className="helpMenu">
                <div onClick={handleToggle(1)} className={`helpMenu__btn ${orgType===1 ? "active" : ""}`}>
                    <p> Fundacjom </p>
                </div>
                <div onClick={handleToggle(2)} className={`helpMenu__btn ${orgType===2 ? "active" : ""}`}>
                    <p> Organizacjom pozarządowym </p>
                </div>
                <div onClick={handleToggle(3)} className={`helpMenu__btn ${orgType===3 ? "active" : ""}`}>
                    <p> Lokalnym zbiórkom </p>
                </div>
            </nav>

            <div className="helpMenu__places">
                <p className={`helpMenu__text ${orgType===1 ? "active" : ""}`}> W naszej bazie znajdziesz listę
                    zweryfikowanych Fundacji,
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                    komu pomagają i czego potrzebują.</p>
                <p className={`helpMenu__text ${orgType===2 ? "active" : ""}`}> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.</p>
                <p className={`helpMenu__text ${orgType===3 ? "active" : ""}`}> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.</p>
            </div>

            <div className="helpMenu__list">
                {currentPlaces.map(({name, id, type, description, staff}) => (
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

            <Link to="help" smooth={true}>
                <Pagination placesPerPage={placesPerPage} totalPlaces={places.length} paginate={paginate}/>
            </Link>

        </div>
    );
};
export default HomeHelp;
