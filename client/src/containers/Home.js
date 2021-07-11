import React from 'react'
import FeatureOne from '../components/FeatureOne'
import FeatureTwo from '../components/FeatureTwo'
import Footer from '../components/Footer'
import Books from './Books'


const Home = ({user, userLogin, loggedIn }) => {
    if (loggedIn == true) {
        return (
            <div>
            <Books />
        </div>
        )
    } else {
        if (loggedIn == false)
        return (
            <div>
                <FeatureOne />
                <FeatureTwo />
                <div class="push"></div>
                <Footer />
            </div>
        )
    }

    
}
export default Home