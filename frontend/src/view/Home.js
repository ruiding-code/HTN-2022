import React, { useEffect, useState } from "react";
import { ListingCard } from '../components/ListingCard';
import '../style/Home.css';


export function Home() {

    const [listingArray, setListingArray] = useState(null);

    useEffect(() => {
        fetch('/browse').then(res => res.json()).then(data => {
            setListingArray(data.listing);
        })
    })

    const renderCards = () => {
        return (
            listingArray.map((post) => {
                <ListingCard
                    image = {post.image}
                    description = {post.description}
                    address = {post.address}
                />
            })
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                Welcome! Let's start searching!
                {listingArray == null ? 
                    <h1> No result found :(. Please try again later.</h1>
                :
                    renderCards()
                }
                
            </header>
        </div>
    );
}