import * as React from 'react';

export interface ActionButtonProps {
  show: boolean
  onDecider?: React.MouseEventHandler
}

export const ActionButton = (props: ActionButtonProps) => {
  return (
    <button disabled={!props.show} className='btn' onClick={props.onDecider}>
      Where should I eat?
    </button>
  );
}
