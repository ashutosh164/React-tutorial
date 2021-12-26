export default function Info(){
    const title = 'This is mt title'
    const showTitle = false;
    return (
      <div>
        
        <h1>{showTitle ? title: " no title "}</h1>
        <p>Manage your stuff</p>
      </div>
    );
  }