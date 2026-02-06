import { useState } from "react";

function Body(){

    const [input, setInput] = useState("");

    const [repos, setRepos] = useState([]);

    const  [loading, setLoading] = useState(false);
    const [error, setError] =  useState("");


    const handleSubmit =  (e) => {
        e.preventDefault();

        if(!isValidGithubUser(input)){
            setError("Enter a valid GitHub username.");
            return;
        }

        setRepos([]); //resets repos to empty (better user expirience)
        
        fetchGithub(input.trim());
        setInput("");
    };



    // 1) make the function async so that it can wait for the response from the API
    const fetchGithub = async (username) =>{

        // 2) show loading state to user
        setLoading(true);
        setError("")//resets Errors

        try { // 3) send the request    
            const response = await fetch(`https://api.github.com/users/${username}/repos`);

            if(!response.ok){ //in case the request arrived BUT did not produced the result (ex. the response is 404)
                throw new Error('User not found or API issue');
            }
            // 5) Request was successful, turn the raw response in a Javascript array
            const data = await response.json();
            console.log(data); //FOR TESTING
            // 6) Success => save repos
            setRepos(data);
            
        }catch (err){
            // 7) catch network errors or the error thrown before by me 
            setError(err.message)
        }finally{
            // 8) end loading fase
            setLoading(false);
        }

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
                Paste a username to get started.
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
            <ul>
            {repos.length!==0 && (repos.map( (repo, index) =>  {
                return <li key = {repo.id}>{repo.name}</li>
            }))}
            </ul>
        </section>
    );
}


export default Body;
