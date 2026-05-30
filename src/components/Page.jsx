import React from 'react'
import './Page.css';

export const Page = React.forwardRef((props, ref) => {
    return (
        <div className={props.pageClass} ref={ref}>
            <div className="page-content">
                {props.title ? <h2>{props.title}</h2> : undefined}
                {props.children}
                {props.number ? <p className="page-footer"><i>{props.number}</i></p> : undefined}
            </div>
        </div>
    )
});