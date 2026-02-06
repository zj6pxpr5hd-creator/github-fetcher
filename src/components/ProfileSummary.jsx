function ProfileSummary({ user, repos }) {

    const languageCount = {};

    repos.forEach(repo => {
        if (!repo.language) return;

        if(languageCount[repo.language]){
            languageCount[repo.language] += 1;
        } else  {
            languageCount[repo.language] = 1;
        }

    });

    const preferredLanguage  = "";
    const max = 0;

    Object.entries(languageCount).forEach(([language, count]) => {
        if(language.frequency > max){
            max = language.frequency; 
            preferredLanguage  =  language;
        }
    });


  return (
    <div className="profile-summary">
      <a className="user-title" href={user.html_url}>{user.name}</a>
      <p>Public Repositories: {user.public_repos}</p>
    </div>
  );
}

export default ProfileSummary;