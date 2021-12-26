import React from 'react';

export default class Info extends React.Component{
    render() {
        const title = 'This is mt title';
        const showTitle = true;
        return (
            <div>
                <h1>{showTitle ? title: " no title "}</h1>
                <p>Manage your stuff</p>
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