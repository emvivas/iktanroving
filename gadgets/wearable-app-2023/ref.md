# h1 data

# hilt

- https://github.com/skydoves/DisneyCompose

- https://github.com/skydoves/MovieCompose


# playground

-  https://github.com/Foso/Jetpack-Compose-Playground


# guide

- https://developer.android.com/jetpack/compose
- https://github.com/jetpack-compose/jetpack-compose-awesome


# simple example

- https://github.com/adibfara/ComposeClock
  
- https://github.com/android/compose-samples/tree/main/Crane


# moderate

- https://github.com/zsoltk/compose-pokedex


# samples

- https://github.com/android/compose-samples


# circle Image

- https://howiezuo.medium.com/building-a-design-system-implementation-using-jetpack-compose-part2-d965880292b0


# compose side effect
- https://developer.android.com/jetpack/compose/side-effects


# compose 
- https://github.com/Farhandroid/AndroidCleanArchitecture

- https://keheira.com/nested-navigation-in-jetpack-compose/


# styling

- https://github.com/enginebai/MovieHunt/tree/v2/app/src/main/java/com/enginebai/moviehunt

  <!-- shapes -->
- https://foso.github.io/Jetpack-Compose-Playground/cookbook/how_to_create_custom_shape/
- https://juliensalvi.medium.com/custom-shape-with-jetpack-compose-1cb48a991d42


# permission

- https://towardsdev.com/jetpack-compose-runtime-permissions-erselan-khan-75f60800b28f

<!-- rate limiting -->
- https://developer.android.com/guide/topics/sensors/sensors_overview#sensors-rate-limiting

<!-- motion stepcounter -->
- https://developer.android.com/guide/topics/sensors/sensors_motion#sensors-motion-stepcounter


# flow multi listener

- https://developer.android.com/kotlin/flow/stateflow-and-sharedflow#sharein

- https://medium.com/androiddevelopers/things-to-know-about-flows-sharein-and-statein-operators-20e6ccb2bc74

<!-- flow to state -->
- https://developer.android.com/kotlin/flow

- https://proandroiddev.com/how-to-collect-flows-lifecycle-aware-in-jetpack-compose-babd53582d0b


<!-- mutable state flow -->
- https://compose.academy/blog/modular_navigation_with_jetpack_compose

- https://stackoverflow.com/questions/69901608/how-to-disable-simultaneous-clicks-on-multiple-items-in-jetpack-compose-list-c

<!-- composite Local -->
- https://developer.android.com/jetpack/compose/compositionlocal


## view model and state

<!-- launch state -->
- https://stackoverflow.com/questions/72638232/view-model-with-jetpack-compose-view

<!-- viewmodel state -->
- https://developer.android.com/jetpack/compose/state#viewmodels-source-of-truth




# sensor data 

- https://proandroiddev.com/parallax-effect-with-sensormanager-using-jetpack-compose-a735a2f5811b

- https://stackoverflow.com/questions/66834234/access-sensors-from-within-composables-in-jetpack-compose


# Splash

- https://github.com/mukeshsolanki/animated-splash-screen/blob/main/app/src/main/java/com/mukeshsolanki/animatedsplashscreen/SplashScreen.kt

- https://github.com/ellisonchan/ComposeBird/blob/main/app/src/main/java/com/ellison/flappybird/util/SplashScreenController.kt

- https://github.com/davidorellana98/splashscreen-compose/blob/main/app/src/main/java/com/davidorellana/splashscreenconjetpackcompose/SplashScreen.kt


# chart

- https://github.com/pratclot/oxygentracker/blob/7cb153ca429818917f432c6a0a6ba9987a68618e/app/src/main/java/com/pratclot/oxygentracker/fragments/FragmentChart.kt

<!-- mpchart realtime updates -->
- https://github.com/PhilJay/MPAndroidChart/wiki/Dynamic-&-Realtime-Data

<!-- responsive grid -->
- https://betterprogramming.pub/responsive-layout-grid-363aa1fb7a8b


# Tabs

- https://github.com/hrishikeshpanhalkar/TabLayout-Jetpack-Compose/blob/main/app/src/main/java/com/example/tablayoutwithanimation/MainActivity.kt


# pager

- https://google.github.io/accompanist/pager/


# linear interpolation

- https://limnu.com/sketch-lerp-unlerp-remap/


# ViewModel

- https://developer.android.com/codelabs/basic-android-kotlin-compose-viewmodel-and-state#5

# rememberLazyListState

- https://stackoverflow.com/questions/70376897/jetpack-compose-detect-when-lazycolumns-scroll-position-is-at-the-first-index
- https://stackoverflow.com/questions/67252538/jetpack-compose-update-composable-when-list-changes

# conditional modifier

- https://stackoverflow.com/questions/67768746/chaining-modifier-based-on-certain-conditions-in-android-compose

# Readme

- https://github.com/Foxpace/SensorBox
- https://github.com/Ibrahim-Mushtaha/Accelerometer-Sensor
- https://github.com/AkshayAshokCode/AndroidSensors
- https://github.com/jemshit/SensorLogger

- https://github.com/Ibrahim-Mushtaha/Step_Counter_background_service

<!--  -->

-  https://github.com/kylecorry31/Trail-Sense

<!-- jetpack -->

- https://github.com/MindorksOpenSource/Jetpack-Compose-Android-Examples


<!-- side effect -->

- https://developer.android.com/jetpack/compose/mental-model


# todo
- timeperiod based data pickup
- aggregate sensor detail
- add units in sensor
- add y axis


# fix
- package io.sensify.sensor.ui.pages.home.items.HomeSensorChartItem
- E:  java.lang.IndexOutOfBoundsException: Index: 0, Size: 0
  at java.util.ArrayList.get(ArrayList.java:437)
  at com.github.mikephil.charting.data.DataSet.getEntryForIndex(DataSet.java:294)
  at com.github.mikephil.charting.data.BaseDataSet.removeEntry(BaseDataSet.java:513)
  at io.sensify.sensor.domains.chart.mpchart.MpChartViewUpdater.updateDataSet(MpChartViewUpdater.kt:75)
  at io.sensify.sensor.domains.chart.mpchart.MpChartViewUpdater.update(MpChartViewUpdater.kt:32)
  at io.sensify.sensor.ui.pages.home.items.HomeSensorChartItemKt$HomeSensorChartItem$1$2.invoke(HomeSensorChartItem.kt:109)
