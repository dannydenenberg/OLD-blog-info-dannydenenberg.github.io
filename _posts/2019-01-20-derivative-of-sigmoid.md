---
layout: post
title: Derivative of Sigmoid
comments: true
#redirect_from: "/2019/01/04/squeeze-theorem/"
permalink: derivative-of-sigmoid
---
### A comprehensive walk-through of taking the derivative of the sigmoid function.

> One of the most frequently used activation functions in machine learning, or more specifically, neural networks is the sigmoid function. In the backpropagation step in training a neural network, you have to find the derivative of the loss function with respect to each weight in the network. To do this, you have to find the derivative of your activation function. This article aims to clear up any confusion about finding the derivative of the sigmoid function.

To begin, here is the sigmoid function:

![](https://cdn-images-1.medium.com/max/1600/0*__CimiM1Ccjafnco.png)

For a test, take the sigmoid of 5 on your calculator. You should get 0.99330714907.

For the purposes of the derivative, this function can also be written as:

![](https://cdn-images-1.medium.com/max/1600/0*29IvIJzx5Dh784AM.png)

### First Impressions

The first thing I noticed about this function, is that it is a composition of functions. The first function being

![](https://cdn-images-1.medium.com/max/1600/0*pjpAtNZFSvK8KQPy.png)

and the second being

![](https://cdn-images-1.medium.com/max/1600/0*novAxv0u5XSdK6jE.png)

Recall that in Calculus, when there is a composition of functions, the derivative, is the first function with respect to the second multiplied by the second function with respect to the variable, in this case _x._ Like this:

![](https://cdn-images-1.medium.com/max/1600/0*WMrBvqxXfikCM8tc.png)

So, the derivative of the sigmoid with respect to _x_ is the derivative of the sigmoid function with respect to _m_ times the derivative of _m_ with respect to _x_. You can think of this function composition rule as a kind of intermediate computation that results in the original derivative that you wanted by cross cancelation:

![](https://cdn-images-1.medium.com/max/1600/0*zRmq7X57wdJu68KR.png)Cross Cancelation Depiction

Now that we know the sigmoid function is a composition of functions, all we have to do to find the derivative, is:

1.  Find the derivative of the sigmoid function with respect to _m_, our intermediate value
2.  Find the derivative of _m_ with respect to _x_
3.  Multiply those values together

### 1\. Derivative of the sigmoid with respect to m

Let’s look back to what the sigmoid function looks like with _m_ as our intermediate value:

![](https://cdn-images-1.medium.com/max/1600/0*cI0amBQfhzthhvW1.png)

To find the derivative of this with respect to _m_ is fairly simple if we can remember the power rule:

![](https://cdn-images-1.medium.com/max/1600/0*WSkUZxxXRQe_g2z5.png)Power Rule

> _The derivative of_ x^n _is_ n _times the derivative of_ x _to the power of_ n-1_._

So,

![](https://cdn-images-1.medium.com/max/1600/0*ryXtHAVT8QgJ0i7g.png)

Now, if we substitute our original value of _m_ back into the equation, we get

![](https://cdn-images-1.medium.com/max/1600/0*wG5ne684eoakVVYC.png)

Finally,

![](https://cdn-images-1.medium.com/max/1600/0*wK3r5WvA88RKEG3s.png)

Yay! We completed step 1.

### 2\. Find the derivative of m with respect to x

Here’s m:

![](https://cdn-images-1.medium.com/max/1600/1*-BqfSJPGF0KKnaWYM2bOEw.png)

To find the derivative, we have to find the derivative of each term with respect to _x._ The first term is easy:

![](https://cdn-images-1.medium.com/max/1600/1*zBpJLIpBvcwOwiqpaQ92_w.png)First Term

The second term is a bit more complicated.

Let’s let

![](https://cdn-images-1.medium.com/max/1600/1*ECwZmb7e1f3Hw_mYRIGGDg.png)

and

![](https://cdn-images-1.medium.com/max/1600/1*bVACPx-hvpOKanj8u-SqbQ.png)

We know that

![](https://cdn-images-1.medium.com/max/1600/1*gzsdyl1WKDsH5AQMRkQu-g.png)

If getting to _e^u_ is not clear, please read [this](https://www.themathpage.com/aCalc/exponential.htm).

Now, using the chain rule once again,

![](https://cdn-images-1.medium.com/max/1600/1*mhBmhaCqwRzB34VgILRtKA.png)

So, we just multiply those derivatives we just calculated to get the derivative with respect to _x:_

![](https://cdn-images-1.medium.com/max/1600/1*AKFRnoWvULE-sFGwq100wA.png)

All in all for step 2,

![](https://cdn-images-1.medium.com/max/1600/1*4WEdPSNIGoNRKjVvHukEkw.png)Final Result for Step 2

### 3\. Multiply the derivatives

Recall, that once we found the two intermediate derivatives, we had to multiply them. So, here is a quick summary:

![](https://cdn-images-1.medium.com/max/1600/0*WMrBvqxXfikCM8tc.png)What we have to do![](https://cdn-images-1.medium.com/max/1600/0*wK3r5WvA88RKEG3s.png)Result for step 1![](https://cdn-images-1.medium.com/max/1600/1*4WEdPSNIGoNRKjVvHukEkw.png)Result for step 2

Now, if you remember how to multiply :), we can finally finish this!

![](https://cdn-images-1.medium.com/max/2400/1*t_VnIIxJ8ATNV2PFovrMXw.png)FINAL RESULT!! 😆🤓

You can now take this value and use it as the derivation of the sigmoid function. An interesting thing occurs after you manipulate this result, though. It turns out that you can rewrite the derivative like this:

![](https://cdn-images-1.medium.com/max/1600/1*kcQFW-uNc7JpzKAA98tFHA.png)

The derivative of sigma is the sigma times 1 minus the sigma. Wow. I feel cheated. :)

If you even remotely enjoyed this article, keep learning about AI and deep learning! 👍
