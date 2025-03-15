import { type Timestamp } from 'firebase/firestore'

interface Memo {
  id: string
  bodyText: string
  updateAt: Timestamp
}

export type { Memo }
