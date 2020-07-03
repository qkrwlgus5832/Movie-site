import React from 'react';

function MainImage() { // prop을 통해서 이미지를 가져옴
    return (
        
            <div>
                <div style = {{position : 'absolute', maxWidth:'500px', bottom:'2rem', marginLeft: '2rem'}}>
                    <h2 style={{color:'whtie'}}> title</h2>
                    <p style={{color: 'white', fontSize: '1rem'}}> description </p>
                </div>
            </div>
       
    )
}
export default MainImage // 이 컴포넌트를 다른 곳에서도 사용할 수 있게