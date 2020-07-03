import React, { useEffect } from 'react';

function MainImage(props) { // prop을 통해서 이미지를 가져옴

    return (
        
            <div style={{ background: `
            url('${props.image}'), #1c1c1c`,
                height: '500px',
                backgroundSize : '100%, cover',
                backgroundPosition: 'center, center',
                width : '100%',
                position : 'relative'
            }}>
                <div style = {{position : 'absolute', maxWidth:'500px', bottom:'2rem', marginLeft: '2rem'}}>
                    <h2 style={{color:'white'}}> {props.title}</h2>
                    <p style={{color: 'white', fontSize: '1rem'}}> {props.text} </p>
                </div>
            </div>
       
    )
}
export default MainImage // 이 컴포넌트를 다른 곳에서도 사용할 수 있게