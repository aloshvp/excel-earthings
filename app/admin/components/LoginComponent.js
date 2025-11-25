"use client";
import '@styles/admin.css';
import { useRouter } from "next/navigation";
import { alert } from '@components/functions/alertmessage';
import { useState } from 'react'; // Removed unused 'useEffect'
import { websiteName } from '@utils/CommonData';

const LoginComponent = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');


    async function LoginClick(e) {
        e.preventDefault();
        setError(''); 
        if (!username || !password) {
            setError("Please enter both your username and password.");
            alert("Please enter both your username and password.");
            return;
        }

        setIsSubmitting(true);

        const loginPayload = {
            username: username,
            password: password,
            switchOption: "AdminLogin" 
        };

        try {

            const response = await fetch(`/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginPayload),
            });

            if (!response.ok) {
                throw new Error('Login failed: Server responded with an error.');
            }

            const data = await response.json();
            

            if (data?.resData && data.resData.toLowerCase() === 'success') {

                router.push('/admin/pages/welcome');
            } else {

                const errorMessage = data?.message || 'Login Failed: Invalid credentials';
                setError(errorMessage);
                alert(errorMessage);
            }
        } catch (err) {

            console.error('Login error:', err);
            const errorMessage = 'Login Failed: Something Went Wrong. Please try again.';
            setError(errorMessage);
            alert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
       
    <div className='login-wrapper'>
        <div className="login-panel">
            <div className="company-header">
                <h1>Excel Earthing</h1>
            </div>
            <form onSubmit={LoginClick} method="post">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        aria-label="Username"
                        disabled={isSubmitting} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-label="Password"
                        disabled={isSubmitting} 
                    />
                </div>
                <button type="submit" className="login-button" value={isSubmitting ? "Logging in..." : "Login"} disabled={isSubmitting}>Log In</button>
            </form>
        </div>
    </div>
    );
};

export default LoginComponent;