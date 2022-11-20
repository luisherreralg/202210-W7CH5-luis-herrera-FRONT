import { AddForm } from '../add.form/add.form';
import { RobotList } from '../robots.list/robots.list';
import './app.css';

export function App() {
    return (
        <>
            <div className="app">Estoy usando la plantilla de LUIS</div>
            <RobotList></RobotList>
            <AddForm></AddForm>
        </>
    );
}
