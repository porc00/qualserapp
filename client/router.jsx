Router.map(function() {

    //index route
    this.route('home', {
        path: '/',
        waitOn: function() {
            return Meteor.subscribe("UserEvents");
        },
        data: {
            userEvents: Events.find()
        }
    })

    //Route to the user events agenda
    this.route('agenda', {
        waitOn: function() {
            return Meteor.subscribe("UserEvents");
        },
        data: {
            userEvents: Events.find()
        }
    });

    //event page route
    this.route('events/:_id', {
        name: 'events',
        template: 'newEvent',
        waitOn: function() {
            return Meteor.subscribe("UserEvents");
        },
        data: function() {
            var _id = this.params._id;
            var event = Events.findOne({
                '_id': _id
            });

            return event;
        }

    });

    this.route('newEvent', {
        waitOn: function() {
            return [Meteor.subscribe("UserEvents"),
                Meteor.subscribe("UserList")
            ]
        }
    });

    this.route('map');
});

Router.onBeforeAction(function() {
    GoogleMaps.load();
    this.next();
}, {
    only: ['map', 'home', 'newEvent']
});

Router.configure({
    layoutTemplate: 'app-body',
    loadingTemplate: 'loading',
    load: transitionAnimation
})


function transitionAnimation() {
    $('.container').velocity({
        translateX: [0, '50%']
    }, {
        duration: 500,
        easing: 'ease-in-out'
    });
    this.next();
}
