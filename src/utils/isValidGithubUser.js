    const isValidGithubUser = (value) => {
        const v = value.trim();
        const re = /^(?!-)(?!.*--)[A-Za-z0-9-]{1,39}(?<!-)$/;
        return re.test(v);
    };

export default isValidGithubUser;