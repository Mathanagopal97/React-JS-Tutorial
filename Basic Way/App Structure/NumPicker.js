function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if(num === 7){
            msg = 
                <div>
                    <h2>Congrats You Win!!!</h2>
                    <h2>This is simply another tag.<br/>Here we are using a special technique.</h2>
                </div>
        }
        else{
            msg = 
                <div>
                    <p>Sorry you lose</p>
                    <h2>This is simply another tag.<br/>Here we are using a special technique.</h2>
                </div>
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? 'Congrats!!' : 'My Condolences'}</p>
                <p>{num === 7 && 'Display Congrats using && operator. Taking advantage of binary commands.'}</p>
                {msg}
            </div>
        );
    }
}