import React from 'react';

const Buttons = (props) => {
    return (
        <div>
             <button
            onClick={props.handleClick}
            className={'Button'}
            value={props.value}
            name={props.name}
        >
            {props.buttonText ? props.buttonText : 'Button'}
        </button>
        </div>
    );
};

export default Buttons;