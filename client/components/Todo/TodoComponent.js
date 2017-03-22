import React from 'react';
import { Grid, Cell, Textfield, Button, Checkbox } from 'react-mdl';
import Page from '../Page/PageComponent';

export default class TodoComponent extends React.Component {
    render() {
        return (
            <Page heading='TodoList'>
                <div style={{ width: '70%', margin: 'auto' }}>
                    <Grid>
                        <Cell col={12}>
                            <ul>
                                <li></li>
                            </ul>
                        </Cell>
                    </Grid>
                </div>
            </Page>
        );
    }
}
