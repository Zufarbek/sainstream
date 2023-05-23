import React from 'react'
import HeaderButtonsComponent from "./header-buttons.component"
import HeaderLogoComponent from "./header-logo.component"
import HeaderNavigationComponent from "./header-navigation.component"
import "./header.css"

export default function HeaderContainer({}) {

    return <div className="header-container">
        <div className="header-component">
            <HeaderLogoComponent />
            <HeaderNavigationComponent />
            <HeaderButtonsComponent />
        </div>
    </div>
}

// 12 Aug 2022 15:55
// 12.02.2022 15:55
// 12.02.2022