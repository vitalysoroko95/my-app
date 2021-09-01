import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader />
    }

    return (
        <div>

            <div className={s.avatar}>


            </div>
            <div className={s.bio}>
                <div>
                    <ProfileStatusWithHooks status ={status} updateStatus={updateStatus} />
                </div>
                <div className={s.nameBio}>
                    {profile.fullName}
                </div>
                <div className={s.textBio}>
                    Bio
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;