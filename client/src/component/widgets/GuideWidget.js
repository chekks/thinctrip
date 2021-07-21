import React from 'react'
import w from '../../assets/scss/client/widget.module.scss'

const GuideWidget = () => {
    return (
        <React.Fragment>
            <div className={w.widgetContainer}>
                <h1 className={w.widgetTitle}>Travel safe during COVID-19</h1>
                <p className={w.widgetSubtitle}>What you can expect during your visit</p>

                <ul className={w.widgetContent}>
                    <li>Regular temperature checks for staff</li>
                    <li>Gear/equipment sanitized between use</li>
                    <li>Regularly sanitized high-traffic areas</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default GuideWidget
