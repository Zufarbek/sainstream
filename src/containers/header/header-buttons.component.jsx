import React from 'react'
import {iconSearch, iconBell, iconArrow} from './icons'
import "./header-buttons.css"

export default function HeaderButtonsComponent() {
    return <div className="header-buttons-component">
        <div className="header-buttons-component__icon">{iconSearch}</div>
        <div className="header-buttons-component__icon">{iconBell}</div>
        <div className="header-buttons-component__avatar">
            <div className="header-buttons-component__avatar-icon"></div>
            <div className="header-buttons-component__avatar-arrow">{iconArrow}</div>
        </div>
    </div>
}