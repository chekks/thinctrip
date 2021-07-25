 import React from 'react'
 
 export default function DataTableRow(props) {
     console.log("propspropspropspropspropspropspropspropsprops", props.children)
     return (
         <tr>{props.children}</tr>
     )
 }
 