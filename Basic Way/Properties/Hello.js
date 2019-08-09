class Hello extends React.Component{
    render(){
        console.log(this.props);
        let bangs = "";
        if(this.props.bangs) bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <h1>Hello to {this.props.to} from {this.props.from}{bangs}</h1>
            </div>
        );
    }
}