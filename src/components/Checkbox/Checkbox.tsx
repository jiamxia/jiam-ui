import React from 'react';

export const Checkbox = () => {
    return (<div>
        <input type="checkbox" id="toggle" className="offscreen" />
        <label htmlFor="toggle" className="checkbox"></label>
    </div>)
}

export const Triangle = () => <div className="triangle"></div>