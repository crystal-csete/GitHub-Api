import React from 'react'

const UserRepos = () => {
    return (
        <div>
            <div>
                <ul>
                    {UserRepos.map((repo) => {
                        return (
                            <li>
                                <a href={repo.html_url}>{repo.name}</a>
                                <span>{repo.stargazers_count} Stars</span>
                                <span>{repo.watchers_count} Watches</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UserRepos;
