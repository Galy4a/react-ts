import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';

import Sidebar from '../../src/components/Sidebar';
import SidebarGroup from '../../src/components/Sidebar/SidebarGroup';

storiesOf('Sidebar', module)
    .add('default', () => (
        <Sidebar>
            <SidebarGroup title="Starred">
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </SidebarGroup>
        </Sidebar>
    ));
