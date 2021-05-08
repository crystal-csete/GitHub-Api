import React, { useState } from 'react';
import axios from 'axios';
import { PageHeader, Descriptions, Button, Input } from "antd";

// other components
import UserRepos from './UserRepos';
import UserProfile from './UserProfile';


const User = () => {
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState(null);
    // const [errorMessage, setErrorMessage] = useState(null);

    const updateInfo = (e) => {
        setUsername(e.target.value)
    }

    const findUser = (e) => {
        e.preventDefault();
        searchProfile();
    }

 
    const searchProfile = () => {
        axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
            setProfile(response.data)
        })
        .catch((error) => {
            console.log('Cannot find that user...',error)
        })
    }


    return (
        <div style={{ minHeight: "100vh", height: "100%", width: "100%" }}>
            <PageHeader
            style={{ background: 'rgba(255, 255, 255, 0.3)' }}
            ghost={false}
            title="Search Github Users"
            subtitle="See there real time stats"
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created By">Crystal's Pages</Descriptions.Item>
                </Descriptions>
            </PageHeader>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '2rem' }}>
                
                <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '80%', padding: '2rem' }} onSubmit={findUser}>

                    <p>Input a Github user name below. See their stats and info. Once you have searched for a particular user, click on there Github profile link, and visit their Github page. Here, you can quickly see how many followers they have, their email, and read their biographies. You can then browse their repositories, or even check out any blogs they have. Have fun! </p>
                    <Input
                        value={username}
                        onChange={updateInfo}
                        type="text"
                        placeholder="Github Username"
                        style={{ margin: '1rem', textAlign: 'center', width: '50%' }}
                    />
                    <Button type="primary">
                        Search
                    </Button>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', marginTop: '1rem', textAlign: 'center', padding: '1rem' }}>
                        {profile ? (
                            <UserProfile style={{  }} profile={profile} />
                        ) : null}
                    </div>
                    <div>
                        {repos ? <UserRepos repos={setRepos(repos)} /> : null}
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default User;
