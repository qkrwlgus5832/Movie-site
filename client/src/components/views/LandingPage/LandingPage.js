import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../Config';
import MainImage from './Sections/MainImage';

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    useEffect(() => { // api들을 가져올 때 사용
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpoint)
        .then(response => response.json()) // 리턴값을 그냥 읽을 순 없고 json 메소드를 사용해야 한다.
        .then(response => {
            setMovies([response.results])  // Movie State에 들어가게 된다.

            setMainMovieImage(response.results[0])
            console.log(response.results[0]);
        })
    }, [])

    return (
        <div style={{width: '100%', margin: '0'}}>
            {/* Main Image */}
            {MainMovieImage && 
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}
                />
            }


            <div style={{width:'85%', margin: '1rem auto'}}>

                <h2> Movies by latest</h2>
                <hr/>
                {/* Movie Grid Cards*/}
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button> Load More</button>
            
            </div>

            
        </div>
    )
}

export default LandingPage
