import { ListingCard } from '../components/ListingCard';
import { TextInput } from '../components/TextInput';
import '../style/Home.css';


export function Home() {
    return (
        <div className="App">
            <header className="App-header">
                Welcome! Please fill out the information below and you can start searching! :)
                <div className="Test">
                    <h1>Testing</h1>
                </div>
                <TextInput/>
                <ListingCard/>
            </header>
        </div>
    );
}