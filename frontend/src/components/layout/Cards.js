import React, {useState} from 'react';
import Card from './Card';
import '../styles/Cards.css';

function Cards() {

    const [cardData] = useState([
        {
            img:"https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            title:"Contest 1",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos in est aliquam harum esse facilis quae natus. Nesciunt commodi exercitationem cum illo? Recusandae, magni.",
            date:"11th Feb'21",
            time:"7:00 PM"
        },
        {
            img:"https://images.unsplash.com/photo-1558860377-90500f1fee4c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80",
            title:"Contest 2",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos in est aliquam harum esse facilis quae natus. Nesciunt commodi exercitationem cum illo? Recusandae, magni.",
            date:"11th Feb'21",
            time:"7:00 PM"
        },
        {
            img:"https://images.unsplash.com/photo-1548691905-57c36cc8d935?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
            title:"Contest 3",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos in est aliquam harum esse facilis quae natus. Nesciunt commodi exercitationem cum illo? Recusandae, magni.",
            date:"11th Feb'21",
            time:"7:00 PM"
        }
    ]);

    return (
        <div className="cards">
            {
                cardData.map(({img, title, description, date, time}) => (
                    <Card
                        img={img}
                        title={title}
                        description={description}
                        date={date}
                        time={time}
                        key={title}
                    />
                ))
            }
        </div>
    )
}

export default Cards;
