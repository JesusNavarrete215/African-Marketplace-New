import React from 'react'
import styled from 'styled-components'
import '../Homepage.css'

function Homepage () {
    return(
        <div>
            <section id='description'></section>
                {/* Selina's code here*/}
            <section id='about-us'>
                {/* Selina's code here*/}
            </section>
            <section id='squares'>
                <div id='explore'><p>Explore Listings</p></div>
                <div id='seller'><p>Become a Seller</p></div>
                <div id='business'><p>Explore Business</p></div>
            </section>
            <section id='footer'>
                <h2>Contact Us</h2>
                <br />
                <p>Email: hello@africanmarketplace.com</p>
                <p>Phone: 716-555-1234</p>
            </section>
        </div>
    )
}

export default Homepage