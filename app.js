module.exports = app => {
  app.beforeStart(async () => {
    // ensure the data is ready before the application starts listening port
    // follow-up data updates automatically by the scheduled task
    await app.runSchedule('scrape-events');
  });
};