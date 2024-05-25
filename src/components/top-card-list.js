import React from 'react'
import Card from './Card'
import '../styles/top-card-list.css'

import {generate as id} from 'shortid'

const cardListData = [
    {
        userName: 'aman_facebook',
        followers: '1486',
        todayFollowers:12,
        icon: "images/facebook.png",
        name: 'facebook'
    },
    {
        userName: 'aman_twitter',
        followers:'8540',
        todayFollowers:20,
        icon: "images/twitter.png",
        name: 'twitter'


    },
    {
        userName: 'aman_instagram',
        followers:'4550',
        todayFollowers:30,
        icon: "images/instagram24.png",
        name: 'instagram'


    },
    {
        userName: 'aman_youtube',
        followers:'4140',
        todayFollowers:50,
        icon: "images/youtube.png",
        name: 'youtube'


    },
]

function TopCardList() {
    return (
        <section className="top-card">
        <div className="wrapper">
            <div className="grid">
                {
                cardListData.map((cardData)=> <Card key={id} {...cardData}/>)
                }
            </div>
        </div>
</section>
    )
}

export default TopCardList