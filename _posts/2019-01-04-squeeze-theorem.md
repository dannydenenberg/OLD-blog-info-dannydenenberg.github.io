---
layout: post
title: The Squeeze Theorem and Why I like it
comments: true
#redirect_from: "/2019/01/04/squeeze-theorem/"
permalink: squeeze-theorem
---

### An intuitive explanation of an awesome theorem.


While I was studying calculus, I came across this statement:

![](https://cdn-images-1.medium.com/max/1600/1*6M5iBz9leOQcSToSpYXuiw.png)

This amazed my because of the fact that sin of 0 is 0, so with substitution of theta in the fraction next to the limit, it would end up as 0/0 or undefined. Now, I had already studied limits a bit and knew about l’hopital’s rule. So, I proceeded to take the derivative of the top and bottom of the fraction with respect to theta and checked out what I got. This got me to the expected answer of 1/1 = 1 because the derivative of sin(x) is cos(x) and cos(0) is 1\. Now this was all fine and dandy, but as I did more research into the limit listed above, I found a theorem called The Squeeze Theorem which I thought was a much more fun way to solve this same problem. This article is my shot at fully explaining the proof that accompanies the limit shown above using the Squeeze Theorem.

### The Proof

To begin, take a look at this picture of a few triangles drawn using different points around a unit circle. If you don’t already know, a unit circle is one with a radius of 1\. The point A is at (0,0), point C is at some point on the edge of the circle, point D is at (1,0), and point E is at some point (1, x).

![](https://cdn-images-1.medium.com/max/1600/1*5gctWhTjU8-tO_15qQccHQ.png)

Using this visual, let us compare the **areas** of two triangles and a sector.

![](https://cdn-images-1.medium.com/max/1600/1*vwNnsrfYYITHCO7Kqb6apA.png)

We can see that this is true by just looking at the graph. Next, I will define the values of the **areas**. Note that theta will refer to the angle made on the unit circle with each of the shapes (the bottom left angle of the triangle or sector).

![](https://cdn-images-1.medium.com/max/1600/1*PUE-FOx6e5mHNLPHDF4dNA.png)

Just FYI, the hight of triangle △AED is tan(x) because tan(x) is opposite over adjacent and adjacent is 1, so it is really just **the side opposite the angle**, which is the hight. (That confused me at first too 😂)

Now that we have this, we can re-compare (is that a word?) the areas using actual values.

![](https://cdn-images-1.medium.com/max/1600/1*PC_QvXnC2osvlTbwwrY6BQ.png)

Next, I am going to perform a set of operation to all of the elements in the inequality. This is legal as it preserves the _truthfulness_ of the inequality like applying the same operation to each side of an equals sign preserves the equality.

First, I will multiply each element by 2.

![](https://cdn-images-1.medium.com/max/1600/1*t-rZhBDwIroK9NgZNDynpw.png)

Second, I will divide by sin(𝜃).

![](https://cdn-images-1.medium.com/max/1600/1*FONG_a5oYxoAAhS-msCvAg.png)

Finally, I will take the reciprocal of each.

![](https://cdn-images-1.medium.com/max/1600/1*KMbGIZ-vL_SX53a_YIGG_A.png)

These reciprocals will get us to the final result that we want. All we have to do now is take the limit as listed at the top and analyze the results.

![](https://cdn-images-1.medium.com/max/1600/1*dxB9v4ZOA3Qq1618sJkp1w.png)

As you can most likely see (I highlighted it), by substitution of the limit value into each element of the inequality, we get 1 is greater than or equal to the limit of sin theta over theta as theta approaches 0 which is greater than or equal to 1.

Because we know this:

![](https://cdn-images-1.medium.com/max/1600/1*vxbYe0Ro35pYnTfpI-FBgA.png)

Now we can say that the limit of sin of theta over theta as theta approaches 0 **has to be 1** because of what I just stated above. Kinda cool, right?

I loved learning about the squeeze theorem more than others just because of all of the steps involved in getting to the final solution. It was a giant puzzle and a journey! This is just one reason of many why math is **_fun and intuitive._**

Please stay tuned for more and clap as your heart desires 👏
