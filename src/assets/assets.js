import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import song4 from  './song4.mp3'
import song5 from  './song5.mp3'
import song6 from  './song6.mp3'
import song7 from  './song7.mp3'
import song8 from  './song8.mp3'
import song9 from  './song9.mp3'
import songR1 from './songR1.mp3' 
import songR2 from './songR2.mp3'
import songR3 from './songR3.mp3'
import songR4 from './songR4.mp3'
import songR5 from './songR5.mp3'
import songR6 from './songR6.mp3'
import songR7 from './songR7.mp3'
import songR8 from './songR8.mp3'
import songR9 from './songR9.mp3'
import songL1 from './songL1.mp3'
import songL2 from './songL2.mp3'
import songL3 from './songL3.mp3'
import songL4 from './songL4.mp3'
import songL5 from './songL5.mp3'
import songL6 from './songL6.mp3'
import songL7 from './songL7.mp3'
import songL8 from './songL8.mp3'
import songRaps1 from './songRaps1.mp3'
import songRaps2 from './songRaps2.mp3'
import songRaps3 from './songRaps3.mp3'
import songRaps4 from './songRaps4.mp3'
import songRaps5 from './songRaps5.mp3'
import songRaps6 from './songRaps6.mp3'
import songRaps7 from './songRaps7.mp3'
import songRaps8 from './songRaps8.mp3'
import songS1 from './songS1.mp3'
import songS2 from './songS2.mp3'
import songS3 from './songS3.mp3'
import songS4 from './songS4.mp3'
import songS5 from './songS5.mp3'
import songS6 from './songS6.mp3'
import songS7 from './songS7.mp3'
import songS8 from './songS8.mp3'
import songH1 from './songH1.mp3'
import songH2 from './songH2.mp3'
import songH3 from './songH3.mp3'
import songH4 from './songH4.mp3'
import songH5 from './songH5.mp3'
import songH6 from './songH6.mp3'
import songH7 from './songH7.mp3'
import songH8 from './songH8.mp3'
import songH9 from './songH9.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365",
        songs: [5, 0, 3, 2, 6, 4, 1, 7]
    },
    {   
        id:1,
        name: "Top 50 Russia",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"orange",
        songs: [10, 9, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    {   
        id:2,
        name: "Album Li Tecca",
        image: img4,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a",
        songs: [3, 4, 19, 20, 21, 22, 23, 24, 25, 26,]
    },
    {   
        id:3,
        name: "Sad Songs Top 10",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"gray",
        songs: [5, 7, 36, 37, 38, 39, 40, 41, 42]
    },
    {   
        id:4,
        name: "Best Raps Top 8",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52",
        songs: [28, 29, 30, 31, 32, 33, 34, 35,]
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210",
        songs: [6, 43, 44, 45, 46, 47, 48, 49, 50, 51]
    }
]

export const songsData = [
    {
        id:0,
        name: "Song One",
        image: img1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "Song Two",
        image: img2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Song Three",
        image: img3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Ransom",
        image: img4,
        file:song4,
        desc:"Lil Tecca",
        duration:"2:50"
    },
    {
        id:4,
        name: "500lbs",
        image: img4,
        file:song5,
        desc:"Lil Tecca",
        duration:"3:10"
    },
    {
        id:5,
        name: "the-cat-empire-the-lost-song",
        image: img7    ,
        file:song6,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "grustnaya-muzyka",
        image: img7,
        file:song7,
        desc:"vyvody",
        duration:"2:18"
    },
    {
        id:7,
        name: "I Know",
        image: img7,
        file:song8,
        desc:"Irma",
        duration:"2:35"
    },
    {
        id: 9,
        name: "snegopadom",
        image: img9,
        file:song9,
        desc:"dima-korso-pod",
        duration:"2:35"
    },
    {
        id: 10,
        name: "shirjaeva-imena-na-zapjaste",
        image: img9,
        file:songR1,
        desc:"snezhana",
        duration:"2:35"
    },
    {
        id: 11,
        name: "zvezda",
        image: img9,
        file:songR2,
        desc:"andzorik-moja",
        duration:"2:35"
    },
    {
        id: 12,
        name: "Voruju",
        image: img9,
        file:songR3,
        desc:"Bodiev",
        duration:"2:35"
    },
    {
        id: 13,
        name: "Bilety",
        image: img9,
        file:songR4,
        desc:"Bodiev",
        duration:"2:35"
    },
    {
        id: 14,
        name: "murashki",
        image: img9,
        file:songR5,
        desc:"Pdanja-neradin",
        duration:"2:35"
    },
    {
        id: 15,
        name: "Игра",
        image: img9,
        file:songR6,
        desc:"ШкольниК feat. Бау",
        duration:"2:35"
    },
    {
        id: 16,
        name: "Infinity 2018 (Klaas Remix)",
        image: img9,
        file:songR7,
        desc:"Sean Finn & Guru Josh",
        duration:"2:35"
    },
    {
        id: 17,
        name: "Come Back",
        image: img9,
        file:songR8,
        desc:"Dzemoski9",
        duration:"2:35"
    },
    {
        id: 18,
        name: "Лишь о тебе",
        image: img9,
        file:songR9,
        desc:"DiMax",
        duration:"2:35"
    },
    {
        id: 19,
        name: "Lot Of Me",
        image: img4,
        file:songL1,
        desc:"Lil Tecca",
        duration:"2:35"
    },
    {
        id: 20,
        name: "Never Left",
        image: img4,
        file:songL2,
        desc:"Lil Tecca",
        duration:"2:35"
    },
    {
        id: 21,
        name: "Amigo",
        image: img4,
        file:songL2,
        desc:"Lil Tecca",
        duration:"2:35"
    },
    {
        id: 22,
        name: "HVN ON EARTH (Feat. Kodak Black)",
        image: img4,
        file:songL3,
        desc:"Lil Tecca",
        duration:"2:35"
    },
    {
        id: 23,
        name: "Money On Me",
        image: img4,
        file:songL4,
        desc:"Lil Tecca",
        duration:"2:35"
    },
    {
        id: 24,
        name: "SEASIDE",
        image: img4,
        file:songL5,
        desc:"Lil Tecca",
        duration:"2:35"
    },
    {
        id: 25,
        name: "CAUTION",
        image: img4,
        file:songL6,
        desc:"Lil Tecca",
        duration:"2:35"
    },
    {
        id: 26,
        name: "All Star",
        image: img4,
        file:songL7,
        desc:"Lil Tecca",
        duration:"2:35"
    },
    {
        id: 27,
        name: "Fanstic Voyage",
        image: img4,
        file:songL8,
        desc:"Coolio",
        duration:"2:35"
    },
    {
        id: 28,
        name: "Coolio Feat. L.V.",
        image: img11,
        file:songRaps1,
        desc:"Gangsta's Paradise",
        duration:"2:35"
    },
    {
        id: 29,
        name: "D4L",
        image: img11,
        file:songRaps2,
        desc:"Game Owe Me",
        duration:"2:35"
    },
    {
        id: 30,
        name: "Growin' Up",
        image: img11,
        file:songRaps3,
        desc:"Ice Cube",
        duration:"2:35"
    },
    {
        id: 31,
        name: "Sky Might Fal",
        image: img11,
        file:songRaps4,
        desc:"Kid Cudi",
        duration:"2:35"
    },
    {
        id: 32,
        name: "Yo!! Sweetness",
        image: img11,
        file:songRaps5,
        desc:"MC Hammer",
        duration:"2:35"
    },
    {
        id: 33,
        name: "Jump",
        image: img11,
        file:songRaps6,
        desc:"Lecrae",
        duration:"2:35"
    },
    {
        id: 34,
        name: "Pain",
        image: img11,
        file:songRaps7,
        desc:"Ice T",
        duration:"2:35"
    },
    {
        id: 35,
        name: "Ice Ice Baby",
        image: img11,
        file:songRaps8,
        desc:"Vantilla Ice",
        duration:"2:35"
    },
    {
        id: 36,
        name: "Song Eight",
        image: img10,
        file:songS1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    },
    {
        id: 37,
        name: "Kalimba De Luna",
        image: img10,
        file:songS2,
        desc:"Tony Esposito ",
        duration:"2:35"
    },
    {
        id: 38,
        name: "Break It Up",
        image: img10,
        file:songS3,
        desc:"Scooter",
        duration:"2:35"
    },
    {
        id: 39,
        name: "A Thousand Words",
        image: img10,
        file:songS4,
        desc:"Savage Garden ",
        duration:"2:35"
    },
    {
        id: 40,
        name: "SMysterious Times",
        image: img10,
        file:songS5,
        desc:"Sash",
        duration:"2:35"
    },
    {
        id: 41,
        name: "Always On My Mind",
        image: img10,
        file:songS6,
        desc:"Pet Shop Boys",
        duration:"2:35"
    },
    {
        id: 42,
        name: "Petite Soeu",
        image: img10,
        file:songS7,
        desc:"Laam",
        duration:"2:35"
    },
    {
        id: 42,
        name: "Waiting For You",
        image: img10,
        file:songS8,
        desc:"Kenny G",
        duration:"2:35"
    },
    {
        id: 43,
        name: "Alright 2015 - Remaster.",
        image: img15,
        file:songH1,
        desc:"Supergrass ",
        duration:"2:35"
    },
    {
        id: 44,
        name: "Ain't Got No, I've Got Life",
        image: img15,
        file:songH2,
        desc:"Nina Simone",
        duration:"2:35"
    },
    {
        id: 45,
        name: "Turnaround",
        image: img15,
        file:songH3,
        desc:"Alfred – 1, 2, 3",
        duration:"2:35"
    },
    {
        id: 46,
        name: " S.T.O.P.",
        image: img15,
        file:songH4,
        desc:"The Lorelei",
        duration:"2:35"
    },
    {
        id: 47,
        name: "The Shiffers",
        image: img15,
        file:songH5,
        desc:"Body Down",
        duration:"2:35"
    },
    {
        id: 48,
        name: "Finghin Collins",
        image: img15,
        file:songH6,
        desc:"Piano Sonata No. 11 in A Major",
        duration:"2:35"
    },
    {
        id: 49,
        name: "Steve Sidwell ",
        image: img15,
        file:songH7,
        desc:"The Mambo Inn",
        duration:"2:35"
    },
    {
        id: 50,
        name: "Mas Que Nada",
        image: img15,
        file:songH8,
        desc:"Luiz Henrique ",
        duration:"2:35"
    },
    {
        id: 51,
        name: "When The Good Go Bad Song ",
        image: img15,
        file:songH9,
        desc:"Jaco Caraco ",
        duration:"2:35"
    }
]