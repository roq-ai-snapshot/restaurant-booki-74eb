import { RoqAuth } from '@roq/nextjs';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { generateFakeDataUtil } from 'server/utils';

/*
    You can export RoqAuth without passing any options if you don't need to customize the behaviour
    export default RoqAuth; //handles all the authentication routes automatically
*/

export default RoqAuth({
  hooks: {
    // This hook is optional - and can be used to persist user information,
    // or as in the case below, send them a welcome notification

    onRegisterSuccess: async ({ user }) => {
      roqClient.asSuperAdmin().notify({
        notification: {
          key: 'welcome',
          recipients: { userIds: [user.id] },
        },
      });
      /* start register-handler */

      /* end register-handler */
    },

    onLoginSuccess: async ({ user }) => {
      /* start login-handler */
      /* end login-handler */
    },
  },
});
