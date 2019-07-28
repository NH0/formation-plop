import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Add pages import below //
import { RecipeCrepes } from './pages/Crepes';

export const Routes = () => {
    return (
        <Switch>
            {/* Add routes below */}
            <Route exact path='/recipes/Crepes' component={RecipeCrepes } />
            <Route exact path="/recipes"/>
        </Switch>
    );
};