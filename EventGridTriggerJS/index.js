module.exports = function (context, eventGridEvent) {
    context.log(typeof eventGridEvent);
    context.log(JSON.stringify(eventGridEvent, undefined, 2));
    context.done();
};