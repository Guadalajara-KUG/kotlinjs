package example

import kotlin.browser.*

fun main(args: Array<String>) {
  val appElement = document.getElementById("app")
  appElement?.textContent = "Hola desde Kotlin"
}
