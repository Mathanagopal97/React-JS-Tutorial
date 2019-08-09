class App extends React.Component{
    render(){
        return(
            <div>
                <Hello to="Andy" from="Mathan"/>
                <Hello to="Mathew" from="Steven"/>
                <Hello 
                    to = "Mathew" 
                    from = "Steven"
                    data = {[1,2,3,4,5,6]}
                    isFunny
                    bangs = {4}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));