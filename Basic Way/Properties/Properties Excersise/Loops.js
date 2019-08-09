class Loops extends React.Component{
    render(){
        const {name, hobbies} = this.props;
        return(
            <div>
                <h1>List of Friends</h1>
                <h2>{name}</h2>
                <h3>
                    <ul>
                        {hobbies.map(h => <li>{h}</li>)}
                    </ul>
                </h3>
            </div>
        )
    }
}