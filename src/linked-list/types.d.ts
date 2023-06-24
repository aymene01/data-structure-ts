export type ListNode<T> = {
  value: T
  next: Option<ListNode<T>>
}

export type LinkedList<T> = {
  head: Option<ListNode<T>>
}
