import { ListingCard } from '../components/ListingCard';
import { TextInput } from '../components/TextInput';
import '../style/Home.css';


export function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Create a Listing">
                    <h1 id="tms">2 Bedroom Apartment in Downtown Montreal</h1>
                </div>
                <div className="Listing Card">
                    <ListingCard/>
                </div>
                
            </header>
        </div>
    );
}