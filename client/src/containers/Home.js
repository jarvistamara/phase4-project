import React from 'react'
import Books from './Books'
import fade from '../images/fade.png'

const Home = ({userLogin}) => {
    if (userLogin == true) {
        return (
            <div>
            <Books />
        </div>
        )
    } else {
        if (userLogin == false)
        return (
            <div>
                <img className='fade' scr={fade} />
                <h3>testing</h3>
            </div>
        )
    }

    
}
export default Home