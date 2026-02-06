function preferredLanguage(repos){
    if(repos === null) return null;
    /*
    OBJECTIVE: find the most used language in the repos of the user and return in a string format.
    
    The method chosen is to iterate over a list of repositories and, using a map-like object,
    count the frequency of each language.
    Then finds and returns the language with the highest count.
    
    This method is a very efficient and prefessional, with a time complexity of O(n), where n is the number of repositories.
    For this reason i decided to implement this method even though it's implementation required a heavy use of outside help.
    
    I want to point out the solution that i had in mind at the beginning to show my thought process.
    The more naive solution that i had in mind was to loop over the array of repositories once for each language, counting the frequency of each language 
    and comparing to the highest frequency found so far, saving the language name in the meanwhile.
    This solution is more inefficient because it requires to loop over the array multiple times, but i would have been able to implement it without any help.
    */


    //creates an object that will store every language and it's frequency in the repos array
    const languageCount = {};

    //for each repo, if it has a language property not null, it adds 1 to the counter of that language 
    // in the languageCount object or creates a new entry if it doesn't exist yet
    repos.forEach(repo => {
        if (!repo.language) return; //skips repos without language

        if(languageCount[repo.language]){   //if the language already exists in the languageCount object, adds 1 to its counter
            languageCount[repo.language] += 1;
        } else  {                           //if the language doesn't exist in the languageCount object, creates a new entry with counter 1
            languageCount[repo.language] = 1;
        }

    });

    //initialize variables to track the preferred language and its count
    let preferredLanguage  = "";
    let max = 0;

    //iterates over the languageCount object to find the language with the highest count
    //  Object.entries(obj) returns an array of [key, value] pairs from the object
    //  In this case key =language, value = count (frequency of the language in the repos) 
    // than for each [language, count] pair checks if the count is higher than the current max
    // if so updates max and preferredLanguage accordingly
    Object.entries(languageCount).forEach(([language, count])  => {
        if(count > max){
            max =  count;
            preferredLanguage = language;
        }
    });

    return preferredLanguage;
}

export default preferredLanguage;