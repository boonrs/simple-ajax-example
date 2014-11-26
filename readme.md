# Protesting 101
**Problem Statement** People new to protesting need a website to help them get started.

## Setup
* `bundle`
* `puma config.ru`
* navigate to http://localhost:9292/

## Terminology
**Ajax** Asynchronous javascript  
**Asynchronous** Having many actions occurring at a time, in any order, without waiting for each other  
**Callback** A piece of code passed as an argument to other code which is expected to call back (execute) the argument at some convenient time.  

## Outline
* Verify code works, pass dummy data to `addResource` and `addGear`.
* Get data from api and print out to console. Notice the order `loadResources` and `loadGear` is called and which data gets printed out first in the console.
* Pass the data to the add functions
* Add a spinner to let users know data is coming. Notice what happens if the spinner is hid outside of the callback function.