import NativePackagerHelper._

name := """zpp-integrator"""

version := "1.0"

scalaVersion := "2.11.8"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

libraryDependencies += "org.webjars" % "flot" % "0.8.3"
libraryDependencies += "org.webjars" % "bootstrap" % "3.3.6"

libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test
libraryDependencies += guice
libraryDependencies += cache
libraryDependencies += javaWs

libraryDependencies += "org.apache.curator" % "apache-curator" % "3.3.0"
libraryDependencies += "org.apache.curator" % "curator-recipes" % "3.3.0"
libraryDependencies += "org.apache.curator" % "curator-framework" % "3.3.0"
libraryDependencies += "org.apache.curator" % "curator-client" % "3.3.0"
libraryDependencies += "org.apache.curator" % "curator-x-discovery" % "3.3.0"

mappings in Universal ++= directory("ssl")
