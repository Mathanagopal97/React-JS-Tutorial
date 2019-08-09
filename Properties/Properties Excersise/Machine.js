class Machine extends React.Component{
    render(){
        console.log(this.props);
        const slots = this.props.slot;
        let msg = "";
        if(slots[0].localeCompare(slots[1])===0){
            if(slots[1].localeCompare(slots[2])===0){
                msg="You Win!!!";
            }
            else{
                msg="You lose.";
            }
        }
        else{
            msg="You lose."
        }

        return(
            <div>
                <p>{slots[0]} {slots[1]} {slots[2]}</p>
                <p>{msg}</p>
            </div>
        )
    }
}