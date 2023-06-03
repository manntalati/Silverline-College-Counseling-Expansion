import React from 'react'

const tutors = [
    {
        title: "tutor 1",
        desc: "lorem ipsum dolor sit amet"
    },
    {
        title: "tutor 2",
        desc: "lorem ipsum dolor sit amet"
    },
    {
        title: "tutor 3",
        desc: "lorem ipsum dolor sit amet"
    }
]


export default function Tutors() {
    
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20, padding: 25}}>
            { tutors.map(t => <TSCard {...t}/>) }
        </div>
    )

}

function TSCard({ title, desc }) {
    return (
        <div className="card p-4" style={{width: "18rem", backgroundColor: "#444"}}>
            <h2 className='card-title' style={{color: "white"}}>{title}</h2>
            <p className="card-text" style={{color: "#999"}}>{desc}</p>
        </div>
    )
}