class App extends React.Component{
    render(){
        return(
            <div>
                <Hello to="Andy" from="Mathan"/>
                <Hello to="Mathew" from="Steven"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));