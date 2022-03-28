
import React, { Component } from 'react'
import image from '../src/taha.jpg'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      fullName: "tahakhiari",
      
      bio: "nothing",
      
      profession: "student",
      show: false,
    }
    this.handleChange=this.handleChange.bind(this)
  }
   handleChange(e){
     const {name,value}=e.target
     this.setState({[name]:value})
   }
  render() {

  
    return (
      
    <div className="show">
      <div className="showtitle">
      <h1>{this.state.fullName}</h1>
      <p>{this.state.bio}</p>
      </div>
      <div className="showimage">
      <img src={image} />
      </div>
    <div className="showprofession">
    <p>{this.state.profession}</p>
    </div>
      <form className="showform">

        <div className="showitems">
          <label>Person</label>
          <input type="text" name="fullname" className="showinput" onChange={this.handleChange}/>
        </div>
        <div className="showbio">
          <label>bio</label>
          <input type="text" name="bio" className="showinput" onChange={this.handleChange}/>
        </div>
       
          <div className="showprofession">
          <label>profession</label>
          <input type="text" name="profession" className="showprofession" onChange={this.handleChange}/>
        </div>
        <div>
        <input type="button" value="show state" className="buttonstyle" onlick={this.show}  />
         </div>
        
      </form >
    
   
     </div>
    )
  }
}
