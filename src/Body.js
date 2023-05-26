import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer';
import Header from './Header';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className='body__info'>
                <img src='https://i.ytimg.com/vi/jB2dyxANqKg/maxresdefault.jpg' alt='' />


                <div className='body__infoText'>
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>

                    <p>Always feels good to discover new music everyweek. </p>

                </div>

            </div>
            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon className='body__shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />

                </div>


                {discover_weekly?.tracks.items.map((item) => {
                    <SongRow track={item.track} />
                })}
            </div>

        </div>
    )
}

export default Body;
