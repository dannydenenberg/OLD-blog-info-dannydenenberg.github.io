---
layout: post
comments: true
title: The Perceptron: What is it?
---
* * *

# The Perceptron: What is it?

[![Go to the profile of Danny Denenberg](https://cdn-images-1.medium.com/fit/c/100/100/1*JJGBsKNvHEKDIui090Jk2A.jpeg)](https://medium.com/@dannydenenberg?source=post_header_lockup)[Danny Denenberg](https://medium.com/@dannydenenberg)<span class="followState js-followState" data-user-id="ca70e0a2522f"><button class="button button--smallest u-noUserSelect button--withChrome u-baseColor--buttonNormal button--withHover button--unblock js-unblockButton u-marginLeft10 u-xs-hide" data-action="sign-up-prompt" data-sign-in-action="toggle-block-user" data-requires-token="true" data-redirect="https://medium.com/@dannydenenberg/the-perceptron-what-is-it-5aadb3d34643" data-action-source="post_header_lockup"><span class="button-label  button-defaultState">Blocked</span><span class="button-label button-hoverState">Unblock</span></button><button class="button button--primary button--smallest button--dark u-noUserSelect button--withChrome u-accentColor--buttonDark button--follow js-followButton u-marginLeft10 u-xs-hide" data-action="sign-up-prompt" data-sign-in-action="toggle-subscribe-user" data-requires-token="true" data-redirect="https://medium.com/_/subscribe/user/ca70e0a2522f" data-action-source="post_header_lockup-ca70e0a2522f-------------------------follow_byline"><span class="button-label  button-defaultState js-buttonLabel">Follow</span><span class="button-label button-activeState">Following</span></button></span><time datetime="2019-01-22T03:12:44.929Z">Jan 21</time><span class="middotDivider u-fontSize12"></span><span class="readingTime" title="5 min read"></span>![](https://cdn-images-1.medium.com/max/1600/1*uSdcH67Ex1L1emlGi8Me8Q.gif)Machine Learning — Just Kidding!!

In short, the perceptron is an algorithm. A very simple one at that. 
The algorithm it performs, in machine learning lingo, is known as _binary classification_.

**Binary classification** is the task of classifying elements into two groups. Hence the word binary — meaning 2.

All the algorithm does, it **take an input and produce an output**. The method by which the perceptron produces an output is called the _weighted sum_. It takes some input X, multiplies it by some weight W, adds in a bias B and then runs that value through some _step function_ which classifies the weighted sum as a 0 or 1 (most of the time).

> If there are multiple inputs, then there is a single weight assigned to each input and all of the inputs are multiplied by their corresponding weight and then summed together and added to the bias before being passed through the step function.

Here is visual of what a simple perceptron with _n_ inputs may look like:

![](https://cdn-images-1.medium.com/max/1600/1*vn7VIPb_JpwEX7PAftjYsw.png)

This image depicts the inputs (represented as subscripts of X) each being multiplied by their corresponding weights, summed together, and passed through some step function that takes the weighted sum and produces either a 0 or a 1\. Notice that there is a constant that is fed into the perceptron as well as the other inputs. This constant will always be 1 and when multiplied with the first weight, represents the bias. So, essentially, that weight is the bias — it is added to the sum of the weights _without_ being multiplied first with an input.

A simple step function is depicted below:

![](https://cdn-images-1.medium.com/max/1600/1*6K2w2TpQmHyphnv5fSvxUg.png)Unit Step Function

This step function takes some value. If the value is greater than or equal to 0, then it outputs 1, otherwise, it outputs 0.

### How is it useful at classifying things?

The perceptron is a subset of machine learning algorithms known as supervised learning. This means that when you teach a perceptron to learn to classify inputs into 2 categories, you give it the inputs and the labels that you want the perceptron to produce in the end (0 or 1 for binary classification, usually).

The perceptron initializes its weights randomly and get’s fed the inputs. It takes its final output from the step function and compares it to the label that you gave it for the specified set of inputs.

The perceptron can then see whether it was wrong at all and how wrong. It can quantify how wrong it is by producing a loss function which takes the perceptron’s output and the target label provided by you and produces a number. In essence, the loss function is saying, “this perceptron is 2.76 wrong” or “this perceptron is 8.92 wrong”, etc. Here is a common loss function for binary classification known as Squared Error:

![](https://cdn-images-1.medium.com/max/1600/1*pDkAIPWql25LqJib95SDXg.png)Squared Error Loss

So, in a simple example, if the perceptron was fed inputs and produced a 1, but the label assigned to the inputs was 0, then the loss of the perceptron would be:

![](https://cdn-images-1.medium.com/max/1600/1*oHgBkfwQntIVCkjz-O3qWw.png)

The perceptron in this case was “1 wrong”.

> It can then use this value to adjust the weights is various ways, one of which is known as **Gradient Descent**. In GD, you adjust the weights by subtracting the partial derivative of the loss function with respect to each weight. To actually figure out the derivatives, you would use the chain rule because the loss function is in actuality a composition of the weighted sum plus the bias, piped through the step function:

![](https://cdn-images-1.medium.com/max/1600/1*bc0k9NPNMst0h-0UgPutlg.png)Chain Rule with Gradient Descent

> If you are familiar with Calculus and derivatives, this concept shouldn’t be too difficult to understand and I am planning on writing an article on this soon. But it is beyond the scope of this high-level paper.

### What is a Binary Classifier?

This means that the input entered is mapped to 2 different categories.

Another way to describe this is by saying that the information entered into a perceptron is linearly separable:

![](https://cdn-images-1.medium.com/max/1600/1*2Y9fKZBzQprHaNGKEEePmw.png)Linearly Separable

This means that the input entered can be separated by a **single line.**

### A perceptron is just like a linear function

One thing to note about a perceptron is that it is functions kind of line a linear function. For example, here is a function in slope-intercept form:

![](https://cdn-images-1.medium.com/max/1600/1*YWLVWjPD0TCnTRb-E4NMHw.png)

When comparing this to a perceptron you can see they are much alike. The X is the input, the m is the weight, and the b is the bias. Here is what the perceptron value before it is run through the step function would look like:

![](https://cdn-images-1.medium.com/max/1600/1*uj36QnUk-2EAum4zrGuabQ.png)Perceptron function simplified

Looks pretty similar, huh?

This high level overview of a perceptron is a good prep for learning about **Neural Networks** which are just perceptrons stacked on top of each other and gathered into layers.

Thanks for reading! Stay tuned!
