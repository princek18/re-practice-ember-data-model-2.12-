import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.route('users');
  this.route('posts');
  this.route('user-details', {path: 'user/:id'});
});

export default Router;
