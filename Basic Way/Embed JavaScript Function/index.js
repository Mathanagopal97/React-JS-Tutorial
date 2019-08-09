function getMood(){
    const moods = [ 'Angry', 'Sad', 'Happy','Hungry', 'Depressed' ];
    return moods[Math.floor(Math.random() * moods.length)];
}

class EmbedJS extends React.Component{
    render(){
        return(
            <h1>My mood is {getMood()}</h1>
        )
    }
}

ReactDOM.render(<EmbedJS/>, document.getElementById('root'));