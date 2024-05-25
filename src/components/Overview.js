import React from 'react'
import CardSmall from './Card-small'
import '../styles/overview.css'

const cardSmallList = [
    {
        icon: 'images/facebook.png',
        pageViews: '87',
        growth: 3,
        key: 1
    },
    {
        icon: 'images/twitter.png',
        pageViews: '52',
        growth:  7,
        key: 2
    },
    {
        icon: 'images/instagram24.png',
        pageViews:' 62',
        growth: 8,
        key: 3
    },
    {
        icon: 'images/youtube.png',
        pageViews: '90',
        growth: 9,
        key: 4
    }
]

function Overview() {
    return (
        <section className="overview">
        <div className="wrapper">
          <h2>Overview - Today</h2>

          <div className="grid">
              {
                  cardSmallList.map(({icon,pageViews, growth, key}) => (
                  <CardSmall
                    icon={icon}
                    key={key}
                    pageViews={pageViews}
                    growth={growth}
                  />
                  ))
              }
            </div>
        </div>

    </section> 
    )
}

export default Overview