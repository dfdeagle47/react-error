# react-error

An error occurs with react/react-router when changing routes too many times.
The exception is thrown in react/lib/DOMChildrenOperations.js:41 after a while because childNode is `undefined` in:
```
parentNode.insertBefore(childNode, beforeChild);
```

This throws the following exception:
```
DOMChildrenOperations.js:41 Uncaught TypeError: Failed to execute 'insertBefore' on 'Node': parameter 1 is not of type 'Node'.(…)
```

This issue occurs after a high number of iterations (2000+) in this example. However, in a more complex setup, it occurs fairly rapidly (after 3-4 changes). The script automatically changes the route, but it also occurs when changing manually (it's just more tedious to reproduce).

## Specs
- Chrome:
  - Version: 54.0.2840.59 m (64-bit)
- OS:
  - Edition: Windows 10 Home Insider Preview
  - Version: 1607
  - OS Build: 14946.1000
  - System type: 64-bit operating system, x64-based processor
- Packages:
  - react@0.14.8
  - react-dom@0.14.8
  - react-router@2.8.1