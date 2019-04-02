---
layout: post
title: ______ Written in Go
comments: true
permalink: written-in-go
---

A curated list of programs I am writing while learning Go 👍🌮🐑

<!-- NOTE: when linking to header sections in markdown, the link needs to be ALL LOWER CASE!! -->
## Table of Contents (*work in progress, I know*)
  - **Algorithms**
    - [Insertion Sort](#insertion-sort)
    - [Selection Sort](#selection-sort)
    - [Binary Search](#binary-search)
  - **Data Structures**
    - [Linked List]()

## Programs
### Algorithms
#### Insertion Sort
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. Insertion sort takes O(N²).
```go
func insertionSort(a []int) {
	for i := range a {
		var j int = i
		for j > 0 && a[j] < a[j - 1] {
			a[j], a[j-1] = a[j-1], a[j]
			j--
		}
	}
}
```

#### Selection Sort
Selection sort is yet another simple sorting algorithm that goes through the list, *selects* the lowest (or greatest depending on > or <) element and then places it at the current iteration index. Selection sort takes O(N²).
```go
func selectionSort(a []int) {
	for i := range a {
		min := i
		for j := i; j < len(a); j++ {
			if a[j] < a[min] {
				min = j
			}
		}
		a[i], a[min] = a[min], a[i]
	}
}
```


#### Binary Search
The binary search searches for an element in a **sorted** list. On average, it takes O(log n).
```go
// assuming `a` is sorted from least to greatest
func binarySearch(a []int, left, right, el int) int {
	if left <= right {
		mid := (left + right) / 2

		if a[mid] == el { // found it!
			return mid
		} else if a[mid] > el { // too big! search left half
			return binarySearch(a, left, mid - 1, el)
		} else if a[mid] < el { //too small! search right half
			return binarySearch(a, mid + 1, right, el)
		}
	}

	return -1 // not found
}
```

Alternatively, you could return the idiomatic "comma, ok" values of "int,bool".
```go
func binarySearch(a []int, left, right, el int) (int, bool) {
	if left <= right {
		mid := (left + right) / 2

		if a[mid] == el {
			return mid, true
		} else if a[mid] > el {
			return binarySearch(a, left, mid - 1, el)
		} else if a[mid] < el {
			return binarySearch(a, mid + 1, right, el)
		}
	}

	return -1, false
}
```
So, now when you call the function you can do something like this:
```go
index, ok := binarySearch(array, 0, len(array), myElement)
if !ok {
  // Ahhh
}
```
Or maybe something cooler:
```go
if index, ok := binarySearch(array, 0, len(array), myElement); ok {
  // do something if ok == true 
}
```
