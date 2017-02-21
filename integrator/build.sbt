name := """zpp-integrator"""

version := "1.0"

scalaVersion := "2.11.8"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

libraryDependencies += "org.webjars" % "flot" % "0.8.3"
libraryDependencies += "org.webjars" % "bootstrap" % "3.3.6"

libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test

libraryDependencies ++= Seq(
  cache,
  javaWs
)