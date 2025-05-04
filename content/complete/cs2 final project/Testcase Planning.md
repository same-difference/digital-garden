[[SkipListTestingBonanza|finalized testcases]]

- [x] iterator next
- [x] iterator has next
- [x] iterator remove
- [x] add
- [x] addAll
- [x] reBalance
- [x] size
- [x] contains
- [x] first
- [x] last
- [x] isEmpty
- [x] toArray
- [x] toArray typed
- [x] remove
- [x] containsAll
- [x] retainAll
- [x] removeAll
- [x] clear
- [x] equals
- [x] hashCode
- [x] empty constructor
- [x] Collection constructor

## empty constructor
Does it initialize a new skiplist?

## collection constructor
Does it initialize a new skiplist?
Does it add every element in the given collection to the skiplist?
Does it throw a nullpointer exception when the given collection is null?

## iterator
Does it iterate over all objects?
Does it remove the first element?
Does it remove the last element?
Does it remove random middle elements?
Does it throw NoSuchElementException when trying to next too many times?
Does it throw IllegalStateException when trying to delete too many times?

## add
Does it add to an empty skiplist?
Does it assign new heads correctly?
Does it add to the end of a layer correctly?
Does it add to the middle of a layer correctly?
Does it continue to do this for a buttload of elements?
Does it correctly reject duplicates and return false?
Does it return true if it successfully added an element to the skiplist?

## remove
Does it correctly handle elements that aren't in the skiplist and return false?
Does it remove from the beginning of a layer?
Does it remove from the end of a layer?
Does it remove from the middle of a layer?
Does it remove until the skiplist is empty?
Does it throw NullPointerException when trying to delete null?
Does it throw ClassCastException when trying to delete a noncomparable value?
Does it return true if it successfully removed an element from the skiplist?

## contains
Does it correctly find stuff that's in it?
Does it correctly not find stuff that's not in it?
Does it throw NullPointerException when trying to find "null"?
Does it throw ClassCastException when trying to find a noncomparable value?

## reBalance
Does it give the nodes within it new heights?
Does it ONLY give the nodes new heights?
Is reBalance a public method?
Is it only ever called by a testcase rather than within the skiplist itself?

## size
Does it give the correct size for an empty skiplist?
Does it give the correct size for a nonempty skiplist?

## first
Does it correctly throw NoSuchElementException when the skiplist is empty?
Does it give the lowest value element when the skiplist is nonempty?

## last
Does it correctly throw NoSuchElementException when the skiplist is empty?
Does it give the highest value element when the skiplist is nonempty?

## isEmpty
Does it return true when the skiplist is empty?
Does it return false when the skiplist is not empty?

## clear
Does it completely clear the skiplist?
Does the skiplist still work properly after being cleared?
Does it shrink it down to the original number of layers?
Does it return the correct size after being cleared?
Does it return true for isEmpty after being cleared?

## equals
Does it return true if the given object satisfies all of the following:
1. A set
2. The same size as the skiplist
3. Contains all the same values as the skiplist?
Does it return false when any of the above conditions are not true?
Does it return false if any of the values within the given set throw an exception?

## hashCode
Does it return the sum of the hashcodes of all unique elements in the skiplist?

## addAll
Does it throw NullPointerException when the given collection is null?
Does it throw NullPointerException if one or more of the elements in the collection is null?
Does it throw ClassCastException if one or more of the elements in the collection is not comparable?
Does it only attempt to add fully validated collections to the skiplist?
Does it return true if one or more elements have been added?
Does it return false if no elements have been added?

## removeAll
Does it throw NullPointerException when the given collection is null?
Does it throw NullPointerException if one or more of the elements in the collection is null?
Does it throw ClassCastException if one or more of the elements in the collection is not comparable?
Does it remove as many elements as it can in a collection before encountering an invalid element?
Does it return true if it successfully removed one or more elements from the skiplist without encountering invalid elements in the given collection?

## containsAll
Does it throw NullPointerException if the given collection is null?
Does it throw NullPointerException if one or more of the elements in the given collection is null?
Does it throw a ClassCastException if one or more of the elements in the given collection is not comparable?
Does it return true if the skiplist contains all of the elements in the given collection?
Does it return false if the skiplist contains only some of the elements in the given collection?
Does it return false if the skiplist contains none of the elements in the given collection?

## retainAll
Does it throw NullPointerException if the given collection is null?
Does it remove from the skiplist all elements that are not in the given collection?
Does it make sure to not accidentally add any elements that weren't in the skiplist before calling retainAll?

## toArray
Does it create an array of objects?
Does it correctly return the payloads rather than the internal item wrappers?
Does it return every unique element in the skiplist?
Does it return them in ascending order?

## toArray typed
Does it throw NullPointerException if the given array is null?
Does it allocate a new array of the same type as the given array if the size of the given array is too small to hold every element in the skiplist?
Does it fill the given/replacement array with every element in the skiplist?
Does it correctly return the payloads rather than the internal item wrappers?
Does it return every unique element in the skiplist?
Does it return them in ascending order?
If the size of the given array is larger than the size of the skiplist, does it insert null into the array after inserting every unique element in the skiplist?