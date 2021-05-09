import React from 'react';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const UserProfile = (props) => {
    const { name, avatar_url, bio, html_url, email, followers, following, blog } = props.profile;
    
    return (
        <div>
            <Avatar size={100} icon={<UserOutlined />}  src={avatar_url} alt="" />
            <Card hoverable title={name} bordered={false} style={{ fontSize: '1rem', margin: '1rem', padding: '1rem', borderRadius: '6px', background: 'linear-gradient(45deg, floralwhite, transparent)' }}>
                <p>{bio}</p>
                <p>User Email: {email} </p>
                <p>Followers: {followers} </p>
                <p>Following: {following} </p>
                <p>User Blogs: {blog} </p>
                <a
                style={{ color: 'black', fontSize: '1.5rem', textDecoration: 'underline' }}
                href={html_url}
                alt=""
                target="_blank"
                rel="noreferrer"
                >
                    GitHub Profile
                </a>
            </Card>
        </div>
    )
}

export default UserProfile


// 