//import initFirebase from '../../utils/auth/initFirebase'
import initFirebase from '@utils/auth/initFirebase'
import { mapUserData } from '@utils/auth/mapUserData'
import { setUserCookie } from '@utils/auth/userCookies'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
//import { mapUserData } from '../../utils/auth/mapUserData'
//import { setUserCookie } from '../../utils/auth/userCookies'

// Init the Firebase app.
initFirebase()

const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/contacts.readonly'],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account',
      },
    },
    //{
    //  provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //  scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
    //  customParameters: {
    //    // Forces password re-entry.
    //    auth_type: 'reauthenticate',
    //  },
    //},
    // Twitter does not support scopes.
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user)
      setUserCookie(userData)
    },
  },
}

const FirebaseAuth = () => {
  return (
    <div className="firebaseauth z-30">
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  )
}

export default FirebaseAuth
