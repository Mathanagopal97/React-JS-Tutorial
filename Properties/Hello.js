class Hello extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello to {this.props.to} from {this.props.from}</h1>
            </div>
        );
    }
}