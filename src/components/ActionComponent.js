import React from 'react';

const ActionComponent = (props) => {
    return (
        <button disabled={props.place === null} className = 'btn' onClick = {props.onDecider}>Where should I eat?</button>
    );
}

export default ActionComponent;