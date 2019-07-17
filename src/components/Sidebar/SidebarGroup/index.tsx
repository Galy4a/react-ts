import React from 'react';
import {cn} from '@bem-react/classname';

import './style';

type Props = {
    title: string;
};

const b = cn('sidebar-group');

export default class SidebarGroup extends React.PureComponent<Props> {
    public render() {
        const { title, children } = this.props;

        return (
            <div className={b()}>
                <span className={b('title')}>{title}</span>
                <div className={b('items')}>{children}</div>
            </div>
        );
    }
}