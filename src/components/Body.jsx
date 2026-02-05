import { useEffect, useState } from "react";

function Body(){

    const [input, setInput] = useState("");

    const [response, setResponse] = useState([]);

    const  [loading, setLoading] = useState(false);
    const [error, setError] =  useState("");


    const handleSubmit =  (e) => {
        e.preventDefault();
        
        if(!isValidGithubUser(input)){
            setError("Enter a valid GitHub username.");
            return;
        }

        setError("");
        fetchGithub(input.trim());
        setInput("");
    };


    const fetchGithub = (username) =>{
        const endpoint = "https://api.github.com/users/{username}/repos";
        setLoading(true);
        
    };

    const isValidGithubUser = (value) => {
        const v = value.trim();
        const re = /^(?!-)(?!.*--)[A-Za-z0-9-]{1,39}(?<!-)$/;
        return re.test(v);
    };


    return(
        <section className="body-section">
            <h2>Search GitHub</h2>
            <p className="body-subtitle">
                Paste a username or repo name to get started.
            </p>
            <form className="search-bar" role="search" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="github-search">
                    Search GitHub
                </label>
                <input
                    value={input}
                    id="github-search"
                    className="search-input"
                    type="search"
                    placeholder="e.g. torvalds or vercel/next.js"
                    autoComplete="off"
                    onChange={(e)=>{setInput(e.target.value)}}
                />
                <button className="search-button" type="submit" disabled={loading}>
                    {loading ? "Searching..." : "Search" }
                </button>
            </form>
            {error && <p className="body-subtitle">{error}</p>}
        </section>
    );
}


export default Body;
