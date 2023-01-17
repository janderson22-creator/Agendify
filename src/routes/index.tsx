import { Route, Switch } from 'react-router-dom'
import Home from '../pages'

export const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)