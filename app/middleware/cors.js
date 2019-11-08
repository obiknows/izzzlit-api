
module.exports = options => {
  return async function cors(ctx, next) {
    
    // Add the Cors HEADER
    ctx.set('Access-Control-Allow-Origin', '*');
    
    await next();
  }
}