import React from 'react';
import ReactDOM from 'react-dom';

import foodList from './food';
import {choice,remove} from './helper';

class App extends React.Component{
    render(){
        var foods = foodList;
        var food = choice(foods);
        console.log("I'd like one "+food+" please");
        console.log("Here you go: "+food);
        console.log("Delicious! May I have another?");
        foods = remove(foods,food);
        console.log("I’m sorry, we’re all out. We have "+foods.length+" left.");
        return(
            <div>
                <h1>See the console</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));