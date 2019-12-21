import React from 'react';

const ActionComponent = (props) => {
    return (
            <button className = 'btn' onClick = {props.onDecider}>Where should I eat?</button>
    );
}

export default ActionComponent;