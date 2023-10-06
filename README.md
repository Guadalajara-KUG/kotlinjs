# Kotlin JS Samples

## TOC

## Hello Browser

The basic project setup to see something in the browser. It's a `Hello World` kind of project, but it's the simplest one
to understand the structure and see KotlinJS in action.

### Execution

Open a terminal and write:

`./gradlew :hello-browser:jsRun -t` 

Once the compilation is done your browser should open in a blank page, if you go to the console (`F12` on Firefox) you
should see the messages under `hello-browser/src/jsMain/kotlin/Main.kt`

Without closing your terminal, edit `hello-browser/src/jsMain/kotlin/Main.kt` and see if the browser refresh with the new
message, if not, simply refresh yourself and see the new message in the console.

## Hello NodeJS

This is another `Hello World` program, but using NodeJS instead of the browser. 

**NOTE:** Currently there's an issue with the tasks dependency on the gradle plugin for multiplatform, so you'll see 
a reported failure in the terminal, but the compilation an execution actually completes.

### Execution

Open a terminal on this project and write:

`./gradlew :hello-node:jsRun` 

You will see all the Gradle output and around there, a message containing the message present in `hello-node/src/jsMain/kotlin/Main.kt`

Another alternative is to build the project:

`./gradlew build`

And then move your terminal inside the generated code:

`cd build/js`

And start NodeJS (you need an active installation of NodeJS):

`node`

Then just import the module:

`> require("hello-node")`

You'll see the output of whatever message you left in `hello-node/src/jsMain/kotlin/Main.kt`

Be aware that if you change the file, you'll need to repeat some of the steps
