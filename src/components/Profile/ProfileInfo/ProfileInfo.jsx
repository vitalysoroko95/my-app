import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>

            <div className={s.avatar}>


            </div>
            <div className={s.bio}>
                <div>
                    <ProfileStatusWithHooks status ={props.status} updateStatus={props.updateStatus} />
                </div>
                <div className={s.nameBio}>
                    {props.profile.fullName}
                </div>
                <div className={s.textBio}>
                    Bio
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;