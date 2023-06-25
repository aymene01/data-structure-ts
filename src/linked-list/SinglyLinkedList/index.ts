import { pipe } from 'fp-ts/lib/function'
import { createLinkedList } from './createLinkedList'
import { addElementToList } from './addToList'

const list = createLinkedList<number>()
const newList1 = pipe(list, addElementToList(1))
export const newList = pipe(list, addElementToList(1))

export * from './createLinkedList'
export * from './createListNode'
export * from './reverseList'
export * from './printList'
