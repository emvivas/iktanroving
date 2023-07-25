package io.sensify.sensor.ui.pages.home.items

import android.hardware.Sensor
import android.util.Log
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Text
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.viewinterop.AndroidView
import androidx.lifecycle.LifecycleOwner
import io.sensify.sensor.domains.chart.entity.ModelChartUiUpdate
import io.sensify.sensor.domains.chart.mpchart.MpChartDataManager
import io.sensify.sensor.domains.chart.mpchart.MpChartViewBinder
import io.sensify.sensor.domains.chart.mpchart.MpChartViewUpdater
import io.sensify.sensor.ui.components.chart.mpchart.base.MpChartLineView
import io.sensify.sensor.ui.pages.home.model.ModelHomeSensor
import io.sensify.sensor.ui.resource.values.JlResDimens
import io.sensify.sensor.ui.resource.values.JlResShapes
import io.sensify.sensor.ui.resource.values.JlResTxtStyles

/**
 * Created by Niraj on 30-09-2022.
 */
@Composable
fun HomeSensorChartItem(
    modelSensor: ModelHomeSensor = ModelHomeSensor(
        type = Sensor.TYPE_LIGHT
    ),
    mpChartDataManager : MpChartDataManager = MpChartDataManager(modelSensor.type),
    mpChartViewUpdater: MpChartViewUpdater = MpChartViewUpdater(),
//    sensorPacketFlow: SharedFlow<ModelChartUiUpdate> = MutableSharedFlow<ModelChartUiUpdate>(replay = 0),
    lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
) {

//    var sensorType = Sensor.TYPE_GRAVITY
//    val sensorData = rememberSensorPackets(sensorType = sensorType, sensorDelay = SensorManager.SENSOR_DELAY_NORMAL)
    var state = mpChartDataManager.mSensorPacketFlow.collectAsState(
        initial = ModelChartUiUpdate(
            sensorType = modelSensor.type,
            0,
            listOf()
        )
    )
    val sensorUiUpdate = remember {
        state
    };

    Log.d("HomeSensorChart", "Chart model: ${modelSensor.name} ${modelSensor.type}  ${mpChartDataManager.sensorType}")
//    var mpChartViewManager = MpChartViewManager(modelSensor.type)
  /*  val sensorUiUpdate =
        rememberChartUiUpdateEvent(mpChartDataManager, SensorManager.SENSOR_DELAY_NORMAL)
*/

//    var counter = 0
//    Log.d("DefaultChartTesting", "Linechart isUpdating ${isUpdating.value}")

    var colorSurface = Color.White
    var colorOnSurface = Color.White
    Column(
        modifier = Modifier
            .background(color = Color.Transparent)
            .padding(horizontal = JlResDimens.dp12, vertical = JlResDimens.dp12)
//            .height(JlResDimens.dp168)
            .fillMaxSize(),
    ) {

        Text(
            modifier = Modifier.padding(start = JlResDimens.dp12, end = JlResDimens.dp12,
                top = JlResDimens.dp0, bottom = JlResDimens.dp10),
            text = "${modelSensor.name}",


            color = Color.White,
            textAlign = TextAlign.Start,
            style = JlResTxtStyles.h5,
        )
        AndroidView(
            modifier = Modifier
                .background(color = Color.Transparent)
//            .height(JlResDimens.dp168)
                .fillMaxSize(),


            factory = { ctx ->

                Log.v("HomeSensorChart", "factory: ${mpChartDataManager.sensorType}")

                var view = MpChartLineView(modelSensor.type);
//                view
                val lineChart = MpChartViewBinder(ctx, view, colorOnSurface= colorOnSurface).prepareDataSets(mpChartDataManager.getModel())
                    .invalidate()
                return@AndroidView lineChart
//                mpChartViewManager.createChart(ctx, colorSurface, colorOnSurface)
            },
            update = {
//                Log.v("HomeSensorChart", "update:${sensorUiUpdate.value.sensorType} ${it.tag}  ${sensorUiUpdate.value.timestamp} ${sensorUiUpdate.value.size}")

                mpChartViewUpdater.update(it, sensorUiUpdate.value, mpChartDataManager.getModel())
//                Log.v("HomeSensorChart", "update: ${mpChartDataManager.sensorType} ${isUpdated}")

//                mpChartDataManager.runPeriodically()
            //updateData(it, sensorUiUpdate.value)
            }
        )
        Spacer(modifier = JlResShapes.Space.H18)

    }

    DisposableEffect(mpChartDataManager.sensorType) {
      /*  val observer = LifecycleEventObserver { _, event ->
            if (event == Lifecycle.Event.ON_START) {
//                currentOnStart()
            } else if (event == Lifecycle.Event.ON_DESTROY) {
//                currentOnStop()
                Log.v("HomeSensorChart", "destroy: ${mpChartDataManager.sensorType}")
                mpChartDataManager.destroy()
            }
        }

        // Add the observer to the lifecycle
        lifecycleOwner.lifecycle.addObserver(observer)*/
        onDispose {

            Log.v("HomeSensorChart", "dispose: ${mpChartDataManager.sensorType}")
//            mpChartDataManager.destroy()
//            lifecycleOwner.lifecycle.removeObserver(observer)


        }
    }
}