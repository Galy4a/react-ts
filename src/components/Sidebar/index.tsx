import React from 'react';
// import cn from 'classname';

import './style';

// const b = cn('sidebar');

export default class SideBar extends React.PureComponent {
    public render() {
        return (
            <div className={'sidebar'}>{this.props.children}</div>
        );
    }
}