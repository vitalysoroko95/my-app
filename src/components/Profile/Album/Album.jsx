import React from 'react';
import s from './Album.module.css';



const Album = () => {
    return (
            <div className={s.album}>
                photo
                <div className={s.photo}>
                    photo1
                </div>
                <div className={s.photo}>
                    photo2
                </div>
                <div className={s.photo}>
                    photo3
                </div>
            </div>
    )
}
export default Album;