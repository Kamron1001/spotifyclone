import React, { useContext } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);

    // Фильтрация песен по альбому
    const albumSongs = songsData.filter(song => albumData.songs.includes(song.id));

    // Разделение песен на строки по 12 элементов
    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };

    const rows = chunkArray(albumSongs, 12);

    return (
        <>
            <NavBar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:item-end'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold md-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                        * 1,323,154 likes
                        * <b>{albumSongs.length} songs,</b>
                        about 2 hr 30min
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {rows.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((item, index) => (
                        <div
                            onClick={() => playWithId(item.id)}
                            key={index}
                            className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer'
                        >
                            <p className='text-white'>
                                <b className='mr-4 text-[#a7a7a7]'>{rowIndex * 12 + index + 1}</b>
                                <img className='inline w-10 mr-5' src={item.image} alt="" />
                                {item.name}
                            </p>
                            <p className='text-[15px]'>{albumData.name}</p>
                            <p className='text-[15px] hidden sm:block'>5 day ago</p>
                            <p className='text-[15px] text-center'>{item.duration}</p>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default DisplayAlbum;
