import { Option } from 'fp-ts/lib/Option'

export type DoublyLinkedListNode<T> = {
  value: T
  prev: Option<DoublyLinkedListNode<T>>
  next: Option<DoublyLinkedListNode<T>>
}

export type DoublyLinkedList<T> = {
  head: Option<DoublyLinkedListNode<T>>
  tail: Option<DoublyLinkedListNode<T>>
}
