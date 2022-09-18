import { TextInput } from '../components/TextInput';
import '../style/Home.css';

export function SignIn() {

    return (
        <div className="App">
            <header className="App-header">
                Email:
                <TextInput/>
                Password:
                <TextInput/>
                <button onClick={() => window.location.href = window.location.href.substring(0,-6) + "home"}>Log in</button>
                <button onClick={() => window.location.href = window.location.href.substring(0,-6) + "signup"}>Create New Account</button>
            </header>
        </div>
    );
}