import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const CustomizedAccordions = () => {

    let [open, setIsopen] = useState(0)

    let accourdinaObj = [

        {
            "id": 0,
            "question": "What is Movieflix",
            "answer": "Movieflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            "id": 1,
            "question": "How much does Movieflix cost?",
            "answer": "Watch Movieflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        },
        {
            "id": 2,
            "question": "Where can I watch?",
            "answer": "Watch anywhere, anytime. Sign in with your Movieflix account to watch instantly on the web at Movieflix.com from your personal computer or on any internet-connected device that offers the Movieflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
        },
        {
            "id": 3,
            "question": "How do I cancel?",
            "answer": "Movieflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            "id": 4,
            "question": "What can I watch on Movieflix?",
            "answer": "Movieflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Movieflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            "id": 5,
            "question": "Is Movieflix good for kids?",
            "answer": "The Movieflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }
    ]

    const handleCLick = (myId) => {
        setIsopen(myId)
    }

    return (
        <>

            {
                accourdinaObj.map((elm, i) => {
                    return (
                        <div className='acrdincover' key={elm.id}>
                            <div className="accordianheader" onClick={() => handleCLick(i)}>
                                <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
                                    {elm.question}
                                </Typography>

                                {
                                    open === i ? <CloseIcon sx={{ color: "white", fontSize: "40px" }} />: <AddIcon sx={{ color: "white", fontSize: "40px" }} /> 
                                }
                                

                            </div>

                            {
                                open === i ? <div className='accourdinbody'>
                                    <Typography variant="h6" gutterBottom sx={{ color: "white", }}>
                                        {elm.answer}
                                    </Typography>
                                </div> : null
                            }
                        </div>
                    )
                })
            }
        </>

    )
}

export default CustomizedAccordions
