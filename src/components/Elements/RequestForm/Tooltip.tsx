import * as React from 'react';
import { FC, ReactElement } from 'react';
import { useState } from 'react';

import { ITooltipProps } from './types';


const Tooltip: FC<ITooltipProps> = (props): ReactElement => {
  const [isVisible, setVisibility] = useState<boolean>(false);

  const show = () => {
    setVisibility(true);
  }

  const hide = () => {
    setVisibility(false);
  }

  return (
    <span className="tooltip-wrapper">
      { isVisible && <span className="tooltip">The days calculated here are calendar days: <span className="tooltip_bold">Calendar days = Work days + Weekends</span> Number of days can be adjusted by Personnel Officer (Katsiaryna Barysik) in accordance with the current legislation.</span> }
      <div 
        onMouseEnter={show}
        onMouseLeave={hide}>{props.children}</div>
    </span>
  );
}

export default Tooltip;