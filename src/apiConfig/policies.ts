/**
 * Policies Configuration
 * (app.config.footprints)
 *
 * Define which prerequisites a request must pass before reaching the intended
 * controller action. By default, no policies are configured for controllers or
 * footprints, therefore the request always will directly reach the intended
 * handler.
 *
 * @see https://fabrix.app/doc/config/policies
 */

'use strict'

export const policies = {
  '*': [
    // Handles Passport authentication per route
    // 'Passport.sessionAuth',
    // Checks ACL for routes
    // 'CheckPermissions.checkRoute'
  ],
  DefaultController: {
    info: [ ]
  }

}
