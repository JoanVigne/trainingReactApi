import React, { useEffect, useState } from 'react';
import './uni.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';




/* http://universities.hipolabs.com/search?country=France */

const Uni = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let countryName = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `http://universities.hipolabs.com/search?country=${countryName["*"]}`
                );
                setData(response.data);
                setError(null);
                console.log(data);
            } catch (err) {
                setError(err.message);
                setData(null);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [loading]);

    /*     PAGINATION START */
    const [page, setPage] = useState(1);

    const paginationMath = (page - 1) * 12;

    function prevPage() {
        page === 1 ? console.log("1") : setPage(page - 1);

    }
    function nextPage() {
        setPage(page + 1);
    }
    /*     PAGINATION end */

    /* search uni */

    return (
        <div className='universities'>

            <nav className='pagination'>
                <h4>{data === null ? <p>En attente...</p> : Math.round(data.length / 12) + " pages"}</h4>
                <ul>
                    <li onClick={() => setPage(1)}><RxDoubleArrowLeft /></li>
                    <li onClick={prevPage} >
                        <GrFormPrevious />
                    </li>
                    <li>{page}</li>
                    <li className='pageLink'
                        onClick={nextPage}>
                        <GrFormNext />
                    </li>
                    <li onClick={() => setPage(Math.round(data.length / 12))}><RxDoubleArrowRight /></li>
                </ul>
                <h4>One uni in mind? <br />
                    <input type="text" placeholder={`Search a uni from ${countryName["*"]} ? `} />
                </h4>
            </nav>
            <ul id='uniList'>

                {data === null ? <p>En attente...</p> : Object.entries(data).slice(paginationMath, paginationMath + 12).map((uni) => {

                    return (

                        <li key={uni[1].name}>
                            <h4>{uni[1].name}</h4>
                            <p> visit their website:</p>
                            <a href={uni[1].domains[0]}>{uni[1].domains[0]}</a>
                        </li>

                    )
                })
                }
            </ul>
        </div >
    );
};



export default Uni;


