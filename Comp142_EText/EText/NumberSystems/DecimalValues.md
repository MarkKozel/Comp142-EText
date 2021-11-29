---
title: Decimal Values
parent: Number Systems
description: Review base 10 number system and recall how you learned to perform arithmetic operations
pageType: Topic
tags: []
---

# {{ $frontmatter.title }}
**{{ $frontmatter.description }}**

<KeyConcepts :ConceptArray= "[
{
  Concept:'Base 10 Number System',
  Details:'The number system you learned in early elementary school'
},
{  
  Concept:'Why did humans choose base 10 as a default?',
  Details:'Likely because we started counting with our fingers. As numbers got more complicated, we stayed with base 10'  
},
{
  Concept:'Why not use base 10 in computers?',
  Details:'Base 10 processes are too complicated to re-create in hardware and low-level software'
}
]" />


## What is **Base 10**?

*Base 10* is a mathematical term for the system of counting humans have standardized on for counting things. The **10** is the number of symbols used to represent quantities

The symbols (digits) are, in increasing value:
> 0   1   2   3   4   5   6   7   8   9

It is likely that human adopted this 10 symbols to match the number of fingers on our hands...making out hands the first computation device

**Base 10** also defines the largest value that can be represented in a single digit (symbol)
> N - 1, where N is the base
>
> Therefore, the largest value is a single digit is 9

### Place Value
In order to accurately represent values larger than 9 in **Base 10**, there needs to be a rule it calculate the value of an adjacent digit in a group of digits (number string)

The rule is:
- digits to the left are a lessor value
- digits to the right are higher value
- The value increase/decrease is a multiple of 10

![Base10 PlaceValues](/images/NumberSystems/Base10_PlaceValues1.png)

To calculate a single digit place value:
> Digit * 10 <sup>Place Value Position</sup>

Example:
5 in Place Value Position 3 (The 4th position) is:

```
5 * 10^3
5 * 1,000
5000
```

The algorithm for calculating the value of multi-digit number string (group of digits) is:
1. perform the single digit place value for each digit
1. add all the results together

```
4367
(4 * 10^3) + (3 * 10^2) + (6 * 10^1) + (7 * 10^0)
4,000 + 300 + 60 + 7
4367
```

This may seem trivial, after all, you have likely known how to do this since lower-division elementary school.  However, it is important to understand the process

### Place Value for any Base
A more general formula for converting a single digit value for a given base is:
> Digit * Base<sup>Place Value Position</sup>

Now apply the same algorithm for calculating the value of multi-digit number string (group of digits) is:
1. perform the single digit place value for each digit and the associated base
1. add all the results together


### extra 

![Base10 Algorithm](/images/NumberSystems/Base10_Algorithm.png)
>(N<sub>5</sub> * 10<sup>5</sup>) **+** (N<sub>4</sub> * 10<sup>4</sup>) **+** (N<sub>3</sub> * 10<sup>3</sup>) **+** (N<sub>2</sub> * 10<sup>2</sup>) **+** (N<sub>1</sub> * 10<sup>1</sup>) **+** (N<sub>0</sub> * 10<sup>0</sup>)
>
>N<sub>5</sub> * 100,000 + N<sub>4</sub>  * 10,000 + N<sub>3</sub>  * 1,000 + N<sub>2</sub>  * 100 + N<sub>1</sub>  * 10 + N<sub>0</sub> * 1


## TOPIC Y

## Conclusion