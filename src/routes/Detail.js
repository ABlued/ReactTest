import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';
class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const{ location } = this.props;
        console.log(this.props);
        if(location.state){
        return (
            <div>
                <Link to = '/'><img src= {location.state.poster}/></Link>
                <p>{location.state.title}</p>
                <p>{location.state.year}  {location.state.genres.map(genres => (
                   <span> {genres} </span>
                )
                )}</p>
                <p>{location.state.summary}</p>
            </div>
        )
    } else{
        return null;
    }
    }
}
export default Detail;