import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray'

type GraphNode<T> = {
  value: T
  neighbors: GraphNode<T>[]
}

type Graph<T> = NonEmptyArray<GraphNode<T>>
