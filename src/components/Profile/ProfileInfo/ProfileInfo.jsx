import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.avatar}>
                Ava
                <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"/>
            </div>
            <div className={s.bio}>
                <div className={s.nameBio}>
                    Name
                </div>
                <div className={s.textBio}>
                    Bio
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;