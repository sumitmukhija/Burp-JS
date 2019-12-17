import React from 'react';

const ActionComponent = (props) => {
    return (
        <div>
            <button className = 'btn' onClick = {props.onDecider}>Where should I eat?</button>
        </div>
    );
}

export default ActionComponent;