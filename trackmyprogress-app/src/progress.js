import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import axios from 'axios';
import Plot from 'react-plotly.js';
import './App.css';

class ProgressPage extends Component {

  constructor() {
    super();

    this.state = {
      progress: {}
    };

    this.get_data = this.get_data.bind(this);
    this.update_data = this.update_data.bind(this);
    this.graph_data = this.graph_data.bind(this);

    this.get_data();
  }

  get_data() {
    // axios.post('http://trackmyprogress.pythonanywhere.com/loadProgress', {username: cookie.load("username")})
    axios.post('http://192.168.0.20:5000/loadProgress', {username: cookie.load("username")})    
    .then(response=>{
      if (response.data.message==="success"){
        console.log(response.data.progress_data);
        this.setState({progress: response.data.progress_data});
    }
    })
    .catch(error=>{
      console.log(error);
      if (error.response){   }
      else if (error.request){   }
      else{  }
    })
  }

  update_data() {
    // axios.post('http://trackmyprogress.pythonanywhere.com/updateProgress', {username: cookie.load("username"), points: document.getElementById("points").value, info: document.getElementById("info").value})
    axios.post('http://192.168.0.20:5000/updateProgress', {username: cookie.load("username"), points: document.getElementById("points").value, info: document.getElementById("info").value})    
    .then(response=>{
      if (response.data.message==="update successful"){
        console.log(response.data.message);
        this.get_data();
      }
    })
    .catch(error=>{
      console.log(error);
      if (error.response){   }
      else if (error.request){   }
      else{  }
    })
  }

  graph_data() {
    let points = [], info = [], dates = [], cum = 0; 
    Object.keys(this.state.progress).map((date_i,i)=>{
      cum += this.state.progress[date_i]["points"];
      points.push(cum);
      info.push(this.state.progress[date_i]["points"] + ": " + this.state.progress[date_i]["info"]);
      dates.push(date_i);
    });
    return [
      {
        x: dates,
        y: points,
        text: info,
        type: 'scatter',
        mode: 'lines+points',
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br/>
          Today's Progress
          <br/>
          <input type="number" placeholder="Enter points" id="points" />
          <input placeholder="Enter progress info" id="info" />
          <u>
            <a
              className="App-link"
              onClick={this.update_data}
              rel="noopener noreferrer"
              style={{cursor: 'pointer'}}
            >
              Update Progress
            </a>
          </u>
          <br/><br/><br/>
          <Plot data={this.graph_data()} layout={{autosize: true}} useResizeHandler={true} style={{width: "80%"}} />
          <br/><br/><br/>
          History: <br/>
          <table>
            <tr>
              <td>Date</td>
              <td>Points</td>
              <td>Info</td>
            </tr>
            {Object.keys(this.state.progress).map((date_i,i)=>{
              return <tr key={i}>                
                <td>{date_i}</td> 
                <td>{this.state.progress[date_i]["points"]} </td>
                <td>{this.state.progress[date_i]["info"]}</td>
              </tr>
            })}
          </table>
          <br/><br/><br/>
        </header>
        <a
          style={{color: "black"}}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/raghavgupta0296/Track-My-Progress"
        >
          <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" width="15px"/>
          Github
        </a>
      </div>
    );
  }
  
}

export default withRouter(ProgressPage);
