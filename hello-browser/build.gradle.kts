plugins {
  kotlin("multiplatform")
}

repositories {
  mavenCentral()
}

kotlin {
  js {
    moduleName = "hello-browser"
    browser {
      // webpackTask { }
      // distribution { 
      //  directory = file("...")
      //}
    }
    binaries.executable()
  }
}

dependencies {

}
