
**Babel** is a javascript transpiler that transpile ES6 syntax to older ES5 syntax for any browser to understand. 

The **node_modules** directory refers to all the different JavaScript libraries that have been installed in our application with npm install.

The **package.json** file lists all the locally installed npm packages in our application for us to manage.
The scripts portion dictates the npm commands that can be run in our application.

### **public/**
**public/** contains the index.html file which represents the root markup page of our application. This file is where we specify the external stylesheet dependencies as well as the DOM element where the Vue instance is to be mounted.

### **src/**
The **src/** directory contains the JavaScript files that we’ll be working directly with.

Our **main.js** file dictates the starting point of our application. it's where we mount our Vue instance to the DOM element with an id of ```#app```, the declared DOM element in our index.html file.

Vue’s single-file components focus heavily on coupling logic by giving us the ability to define HTML/CSS and JS of a component all within a single .vue file.
A single-file component consists of three parts:

* ```<template>``` which contains the component’s markup in plain HTML.
* ```<script>``` which exports the component object constructor that consists of all the JS logic within that component.
* ```<style>``` which contains all the component styles.

## **Components**

#### **Props**
Props are custom attributes you can register on the component which allow the content to be dynamic.

#### **Parent-Child Component**
Since every component has it's own isolated scope, child components can never (and should never) reference data directly from parent components. For a child component to access data from a parent, data has to flow from the parent down to the child with the help of props.

#### **Child-Parent Component***
Since props can only flow in a single direction from parent to child, children components can only directly communicate with a parent through custom events. Vue’s custom events work by triggering
events within a particular component, $emit(nameOfEvent), and listening for that event in another component, $on(nameOfEvent). Data can also be passed through these events.

#### **Siblings Components**
Props cannot be used since sibling components are independent of one another (i.e. a sibling component isn’t rendered within another sibling component)
Managing data between sibling components in Vue can be categorized in three main buckets:
* Using a global event bus
* Using a simple, shared store object (for simple state management)
* Using the state management library Vuex

### **State Management**

#### **Simple State Management**
Simple state management can be performed by creating a store pattern that involves sharing a data store between components. *State* basically means data.  State management often refers to the management of application level data.