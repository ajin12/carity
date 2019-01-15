import React from 'react';
import styles from './App.css';

export default class Sidebar extends React.Component {
  render() {
    return (
    <div>
	<ul id="slide-out" class="sidenav sidenav-fixed">
      <br />  
      <li><img class="display" src="../img/logo.png"></img></li>
      <br />
      <li><a href="/timeline.html">Timeline</a></li>
      <li><a href="#!">Charities</a></li>
      <li><a href="#!">Donation report</a></li>
    </ul>
    </div>
    );
  }
}
