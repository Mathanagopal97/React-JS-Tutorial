class App extends React.Component{
    render(){
        const slotArr = [["x","y","z"],["x","x","x"],["x","z","z"]];
        return(
            <div>
                <Machine slot={slotArr[Math.floor(Math.random() * 3) + 0]}/>
                <Machine slot={slotArr[Math.floor(Math.random() * 3) + 0]}/>
                <Machine slot={slotArr[Math.floor(Math.random() * 3) + 0]}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));