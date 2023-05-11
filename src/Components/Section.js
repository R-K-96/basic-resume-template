
import React from "react";


const Section = ({title,content,childern}) => {
    return(
        <div className="section">
            <h1>{title}</h1>
            <p>
                {content}
            </p>
            <hr/>
            {childern}
        </div>
    )
}

export default Section;