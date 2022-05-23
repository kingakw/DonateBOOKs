import React, {useState} from 'react';
import Decoration from "../../assets/Decoration.svg";
import Pagination from "./Pagination";
import {orphanage} from "../data/orphanage";
import {school} from "../data/school";
import {library} from "../data/library";
import {hospital} from "../data/hospital";
import {Link} from 'react-scroll';

const HomeHelp = () => {
    const [index, setIndex] = useState(1);

    ///// Places per page
    const [currentPage, setCurrentPage] = useState(1);
    const [placesPerPage] = useState(3)

    ///// Places per page
    const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;

    const currentLibraries = library.slice(indexOfFirstPlace, indexOfLastPlace);
     const currentSchools = school.slice(indexOfFirstPlace, indexOfLastPlace);
     const currentOrphanage = orphanage.slice(indexOfFirstPlace, indexOfLastPlace);
     const currentHospital = hospital.slice(indexOfFirstPlace, indexOfLastPlace);

    ///// Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleToggle = (number) => {
        setCurrentPage(1);
        setIndex(number);
    };

    const places = [
        {
            id: 1,
            type: 'Libraries',
            info: `In our database you will find a list of verified libraries, we cooperate with. You can check what they do and what they need.`
        },
        {
            id: 2,
            type: 'Schools',
            info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`
        },
        {
            id: 3,
            type: 'Orphanages',
            info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`
        },
        {
            id: 4,
            type: 'Hospitals',
            info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]

    const namePlace = places.map((place) =>
        <div onClick={() => handleToggle(place.id)} className={`menu__btn ${index === place.id ? "active" : ""}`}>
            <p> {place.type} </p>
        </div>
    )

    const infoPlace = places.map((place) =>
        <p className={`places__text ${index === place.id ? "active" : ""}`}> {place.info} </p>
    )

    const listPLaces = (typeofPlace) =>
        <div className="help__list">
            {typeofPlace.map(({name, id, description, staff}) => (
                <div className="list__place" key={id}>
                    <div className="place__info">
                        <p className="info__text1"> {name} </p>
                        <p className="info__text2"> {description}  </p>
                    </div>
                    <p className="place__text"> {staff}  </p>
                </div>
            ))}
        </div>


    const paginatePlace = (typeofPlace)  =>
        places.map((place) =>
        <div className={`help__page  ${index === place.id ? "active" : ""}`}>
            <Pagination placesPerPage={placesPerPage} totalPlaces={typeofPlace.length} paginate={paginate}/>
        </div>
    )

    return (
        <div className="container__help" name="help">
            <p className="help__title"> You can donate books to: </p>
            <div className="help__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <nav className="help_menu">
                {namePlace}
            </nav>

            <div className="help__places">
                {infoPlace}
            </div>

            {  index === 1 && listPLaces(currentLibraries)
            }

            {  index === 2 && listPLaces(currentSchools)
            }

            {index === 3 && listPLaces(currentOrphanage)
            }

            {  index === 4 && listPLaces(currentHospital)
            }

            <Link to="help" smooth={true}>
                {  index === 1 && paginatePlace(library)
                }
                {  index === 2 && paginatePlace(school)
                }
                {  index === 3 && paginatePlace(orphanage)
                }
                {  index === 4 && paginatePlace(hospital)
                }

            </Link>

        </div>
    );
};
export default HomeHelp;

