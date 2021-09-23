import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    const data = {user: this.get('store').findRecord('user', params.id),
                  posts: this.get('store').query('post', {userId: params.id})};
    return data;
  }
});
