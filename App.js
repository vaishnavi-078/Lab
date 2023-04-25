
import React from 'react';
import './App.css';

function App() {
	return (
		<div>
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">

            <img src={require('./images/cvr.jpg')} alt='CVR college of Engineering' />
          </div>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Map">Map</a></li>
          <li><a href="#Details">Details</a></li>
          <li><a href='#student'>Student</a></li>
        </ul>

        <div class="rightNav">
          <button class="btn btn-sm">REGISTER</button>
          <button class="btn btn-sm">LOGIN</button>
        </div>
      </nav>
<div>     
<p align="center"><strong><u>The College operates exclusive buses which connect various localities of the Twin Cities to the College Campus </u></strong></p>
<table>
      
</table>
</div>
      <footer className="footer">
        <p className="text-footer">
          Copyright ©-All rights are reserved
        </p>
      </footer>
      </div>
	)
}

export default App
