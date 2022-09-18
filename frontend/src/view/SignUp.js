import { TextInput } from '../components/TextInput';
import '../style/Home.css';

export function SignUp() {

    return (
        <div className="App">
            <header className="App-header">
                Email:
                <TextInput/>
                Password:
                <TextInput/>
                Region:
                <TextInput/>
                <button onClick={() => window.location.href = window.location.href.substring(0,-6) + "home"}>Sign Up</button>
            </header>
        </div>
    );
}