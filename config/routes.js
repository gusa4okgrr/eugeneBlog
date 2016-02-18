/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  // 'GET /auth' : 'AuthController.checkLogIn',
  'POST /createAcc' : 'AuthController.addLogIn',
  "POST /createProf" : 'AuthController.addProfile',
  'POST /createComm' : 'AuthController.addComment',
  'POST /createBlogComm' : 'AuthController.addBlogComment',
  'GET /accs' : 'AuthController.getAccounts',
  'GET /acc/:id' : 'AuthController.findAccount',
  'GET /accEm/:eMail' : 'AuthController.findEmail',
  'GET /accPas/:passWord' : 'AuthController.findPassword',
  'GET /profile/:eMail' : 'AuthController.getProfile',
  'GET /profiles' : 'AuthController.getProfiles',
  'GET /allComments' : 'AuthController.getAllComments',
  'GET /allBlogComments' : 'AuthController.getAllBlogComments',
  'GET /comm/:eMail' : 'AuthController.findComments',
  'GET /blogComm/:commentId' : 'AuthController.getBlogComment',
  'POST /deleteAcc' : 'AuthController.deleteAccount',
  'POST /deleteProf' : 'AuthController.deleteProfile',
  'POST /deleteComm' : 'AuthController.deleteComment',
  'POST /deleteBlogComm' : 'AuthController.deleteBlogComment',
  'POST /deleteAllComm' : 'AuthController.deleteAllComments',
  'POST /deleteAllBlogComm' : 'AuthController.deleteAllBlogComments'

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
