import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',
    message: '',
    emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    messageValid: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('emailValid', 'messageValid'),
    isDisabled: Ember.computed.not('isValid'),

    valid: Ember.observer('emailValid','messageValid', function(){
        console.log('disabled:',this.get('isDisabled'));
    }),
    actions: {
        sendContact(){
            alert(`Saving contact information.`);
            this.set('responseMessage', 'Thank you for contacting us!!');
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }

});
