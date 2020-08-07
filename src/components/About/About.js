import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to = '/about' className = 'subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to = '/about/history' className = 'subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to = '/about/contact' className = 'subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact' component={Contact}/>
            <Route path = '/about' render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                How very irritating The wand chooses the wizard Yer a wizard Harry It matters not what someone is born but what they grow to be It matters not what someone is born but what they grow to be It takes a great deal of bravery to stand up to our enemies but just as much to stand up to our friends But you know happiness can be found even in the darkest of times if one only remembers to turn on the light Really Hagrid if you are holding out for universal popularity Im afraid you will be in this cabin for a very long time There are some things you cant share without ending up liking each other and knocking out a twelvefoot mountain troll is one of them. It matters not what someone is born but what they grow to be It takes a great deal of bravery to stand up to our enemies but just as much to stand up to our friends It matters not what someone is born but what they grow to be Until the very end Really Hagrid if you are holding out for universal popularity Im afraid you will be in this cabin for a very long time, 10 points to Gryffindor Turn to page 394 How very irritating Never trust anything that can think for itself if you cant see where it keeps its brain Turn to page 394 Of course it is happening inside your head Harry but why on earth should that mean it is not real. It takes a great deal of bravery to stand up to our enemies but just as much to stand up to our friends There are all kinds of courage You sort of start thinking anythings possible if youve got enough nerve Really Hagrid if you are holding out for universal popularity Im afraid you will be in this cabin for a very long time Severus Snape, It matters not what someone is born but what they grow to be How very irritating The things we lose always have a way of coming back to us in the end How very irritating Now Im going to bed before either of you comes up with another clever idea to get us killed Or worse expelled 10 points to Gryffindor Severus Snape Hermione Granger.
                </p>
              </div>
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}