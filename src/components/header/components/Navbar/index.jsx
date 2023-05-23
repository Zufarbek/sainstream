import React from 'react'
import './navbar.css'
import {navbar} from '../../../../utils/navbar'

export default function index() {

    console.log(navbar);

  return (
    <div>
      <ul>
        {
            navbar.map(item => {
                return(
                    <li key={item.id}>{item.title}</li>
                )
            })
        }
      </ul>
    </div>
  )
}
