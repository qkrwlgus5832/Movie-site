import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {Button} from 'antd'
function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title 
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime
    }

    useEffect(() => {

        Axios.post('/api/favorite/favoriteNumber', variables) // api 이름을 마음대로 설계 
            .then(response => {
                if (response.data.success){
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    alert('숫자 정보를 가져오는데 실패했습니다.')
                }
            })
        
        Axios.post('/api/favorite/favorited', variables) // api 이름을 마음대로 설계 
            .then(response => {
                if (response.data.success){
                    setFavorited(response.data.favorited)
                    console.log(response.data)
                } else {
                    alert('정보를 가져오는데 실패했습니다.')
                }
            })
    })

    const onClickFavorite = () => {
        if (Favorited) {
            Axios.post('/api/favorite/removeFromFavorite', variables)
            .then (response => {
                if (response.data.success){
                    setFavorited(!Favorited)
                    setFavoriteNumber(FavoriteNumber - 1)
                    console.log(Favorited)
                }
                else {
                    alert('Favorie 리스트에서 지우는걸 실패하였습니다.')
                }
            })
        }  else {
            Axios.post('/api/favorite/addToFavorite', variables)
            .then (response => {
                console.log(response.data)
                if (response.data.success){
                  
                    setFavorited(!Favorited)
                    console.log(Favorited)
                    setFavoriteNumber(FavoriteNumber + 1)
                    
                    
                }
                else {
                    alert('Favorie 리스트에서 추가하는걸 실패하였습니다.')
                }
            })
        }     
    }
    return (
      
        <div>
            <Button onClick={onClickFavorite}> {Favorited? "Not favorite": "Add to Favorite"} {FavoriteNumber} </Button>
        </div>
    )
}

export default Favorite
