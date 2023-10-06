plugins {
  kotlin("multiplatform")
}

repositories {
  mavenCentral()
}

kotlin {
  js {
    moduleName = "hello-node"
    nodejs {

    }
    binaries.executable()
  }
}

dependencies {

}
