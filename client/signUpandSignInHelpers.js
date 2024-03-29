
var mySubmitFunc = function(error, state){
    if (!error) {
        if (state === "signIn" && Meteor.user().profile.userType === "player") {
            Router.go('/');

        } else if(state === "signIn" && Meteor.user().profile.userType === "agentorscout") {
            Router.go('/agent-profile');
        }
        else if (state === "signIn" && Meteor.user().profile.userType === "clubsOracademy"){
            Router.go('/');
        }
        if (state === "signUp" && Meteor.user().profile.userType === "player") {
            Router.go('/playerDetail1');

        } else if(state === "signUp" && Meteor.user().profile.userType === "agentorscout") {
            Router.go('/agentDetail1');


        } else if (state === "signUp" && Meteor.user().profile.userType === "clubsOracademy"){
            Router.go('/insertClubsAndAcademy1');

        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});
