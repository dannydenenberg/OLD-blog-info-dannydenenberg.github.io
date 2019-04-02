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
