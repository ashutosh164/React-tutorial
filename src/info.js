import React from 'react';
import {PropTypes} from 'prop-types'

export default class Info extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            
        }
        // this.buttomPress = this.buttomPress.bind(this)
    }

    buttomPress() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                {/* this is the error function pass for binding function in class */}
                 <button onClick={() => this.buttomPress()}>clickme</button>  
            </div>
        )
        

    }
}


// export default function Info(){
//     const title = 'This is mt title'
//     const showTitle = false;
//     return (
//       <div>
//         <h1>{showTitle ? title: " no title "}</h1>
//         <p>Manage your stuff</p>
//       </div>
//     );
//   }