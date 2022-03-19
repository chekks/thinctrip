import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function TextValidation(props) {

    let content = "";
    if(Array.isArray(props.children)  && props.children.length > 0){
        props.children.map((err) =>{
            content += `<p>${err}</p>`;
        })
    }

    return (
        <div className="text-error">
            {ReactHtmlParser(content)}
        </div>
    )
}
