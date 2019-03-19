import React, {Component} from 'react';
import { timingSafeEqual } from 'crypto';
import './style.scss';

class App extends Component {
    state = {
        id: 123
    }

    render() {
        return(
            <div className="idStyle">
                {this.state.id}
            </div>
        )
    }
}

export default App;