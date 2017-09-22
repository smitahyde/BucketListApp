import React, { Component } from 'react';
import NavBarHeader from './Nav';
//import Signin from './auth/signin';
import Video from './video/video'
// import BandList from '../containers/BandList';
// import BucketList from '../containers/BucketList';

	export default class App extends Component {
  		render() {
    			return (
      			<div>
	      			<NavBarHeader />
              <Video />

      			</div>
    			);
  		}
	}