function RepoCard({ repo }){

    return(
        <div className="repo-card">
            <a className="repo-title" href={repo.html_url}>{repo.name}</a>
            {repo.description && <p className="repo-text">{repo.description}</p>}
            <p className="repo-text">{repo.language}</p>
        </div>
    );
}

export default RepoCard;