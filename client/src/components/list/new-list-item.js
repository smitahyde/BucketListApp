import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../../actions/index';
import {Link} from 'react-router';


class ListItem extends Component {
	handleFormSubmit(formProps){
		//call action creator to sign up the user
		this. props createPost(formProps);

	export default reduxForm({
		form: 'PostsNewForm',
		fields: ['title', 'topic', 'url','content']
		}, null, {createPost})(ListItem);	
	 })
	}
}