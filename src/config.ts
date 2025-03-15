import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactnativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PAULIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PAULIC_FROJECT_ID,
  storageBucket: process.env.EXPO_PAULIC_STORAGE_BUKET,
  messagingSenderId: process.env.EXPO_PAULIC_MESSAGINGSENDER_ID,
  appId: process.env.EXPO_PAULIC_APP_ID
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactnativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
