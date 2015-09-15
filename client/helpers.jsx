Template.registerHelper("dateFormat", function(date) {
    return moment(date).calendar();
});
