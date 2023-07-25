package io.sensify.sensor.ui.pages.home

import android.hardware.Sensor
import android.util.Log
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Info
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.ExperimentalTextApi
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.get
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.accompanist.pager.rememberPagerState
import io.sensify.sensor.R
import io.sensify.sensor.ui.composables.isScrollingUp
import io.sensify.sensor.ui.navigation.NavDirectionsApp
import io.sensify.sensor.ui.pages.SplashScreen
import io.sensify.sensor.ui.pages.home.items.HomeSensorItem
import io.sensify.sensor.ui.pages.home.sections.HomeSensorGraphPager
import io.sensify.sensor.ui.resource.themes.JLThemeBase
import io.sensify.sensor.ui.resource.values.JlResColors
import io.sensify.sensor.ui.resource.values.JlResDimens
import io.sensify.sensor.ui.resource.values.JlResShapes
import io.sensify.sensor.ui.resource.values.JlResTxtStyles
import kotlinx.coroutines.launch


import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.Scaffold
import androidx.wear.compose.material.Text
import androidx.wear.compose.material.TimeText
import com.google.accompanist.pager.HorizontalPager
import com.google.accompanist.pager.HorizontalPagerIndicator
import com.google.accompanist.pager.rememberPagerState
import androidx.wear.compose.navigation.SwipeDismissableNavHost
import androidx.wear.compose.navigation.composable
import androidx.wear.compose.navigation.rememberSwipeDismissableNavController
import java.time.LocalDateTime

/**
 * Created by Niraj on 26-09-2022.
 */

@Preview(device = Devices.WEAR_OS_SMALL_ROUND, showSystemUi = true)
@Composable
fun HomePagePreview() {
    HomePage()
}

@Composable
fun HomePage(
    modifier: Modifier = Modifier, navController: NavController? = null,
    viewModel: HomeViewModel = viewModel(
        factory = HomeViewModel.Factory()
    )

){
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ){
        val navController = rememberSwipeDismissableNavController()

        Scaffold(
            timeText = {
                TimeText()
            },
            content = {
                MainScreen(navController = navController)
            }
        )
        //Text("Pantalla principal")

    }
}

@OptIn(
    ExperimentalMaterial3Api::class, ExperimentalLayoutApi::class, ExperimentalTextApi::class,
    ExperimentalPagerApi::class, ExperimentalAnimationApi::class
)
@Composable
fun MainScreen(
    modifier: Modifier = Modifier, navController: NavController? = null,
    viewModel: HomeViewModel = viewModel(
        factory = HomeViewModel.Factory()
    )

) {

    val coroutineScope = rememberCoroutineScope()
    val lazyListState = rememberLazyListState()
//    val sensorsProvider = SensorsProviderComposable()
//    val sensors = remember { sensorsProvider }

    val sensorUiState = viewModel.mUiState.collectAsState()
//    var sensorUiState = viewModel.mUiCurrentSensorState.collectAsState()

    val isAtTop = remember {
        derivedStateOf {
            lazyListState.firstVisibleItemIndex == 0 && lazyListState.firstVisibleItemScrollOffset == 0
        }
    }

    val pagerState = rememberPagerState(
//        pageCount = 3,
    )

//    Log.d("HomePage", "sensor ${sensorsUiState.value.sensors}");



        LazyColumn(

            modifier = Modifier
                .background(
                    Brush.verticalGradient(
                        colors = listOf(
                            MaterialTheme.colorScheme.onSurface.copy(alpha = 0.05f),

                            MaterialTheme.colorScheme.onSurface.copy(alpha = 0.02f),
                        )
                    )
                ),
//                .fillMaxSize()
//                .background(JLThemeBase.colorPrimary10)
//                .consumedWindowInsets ,
            state = lazyListState
        ) {

            item {
                Spacer(modifier = JlResShapes.Space.H24)

            }

            // Plotting area
            item {
//                Spacer(modifier = Modifier.height(JlResDimens.dp350))

                HomeSensorGraphPager(viewModel = viewModel, pagerState = pagerState)

            }

            // Available Sensors
            item {
                Box(
                    modifier = Modifier
                        .padding(
                            start = JlResDimens.dp40, end = JlResDimens.dp32,
                            top = JlResDimens.dp12, bottom = JlResDimens.dp16
                        ),
                ) {
                    Text(
                        text = "Available sensors",
                        color = Color.White,
                        style = JlResTxtStyles.h6
                    )
                }
            }


            items(viewModel.mSensorsList.windowed(2, 2, true)) { item ->
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = JlResDimens.dp32)
                ) {

                    Row(
                        modifier = Modifier
                            .fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,


                        ) {

                        for (i in item.indices) {
                            Box(
                                modifier = Modifier
                                    .weight(1f)
//                                    .fillParentMaxWidth(0.5f)
//                                    .padding(bottom = JlResDimens.dp8)
                                /*.clickable(
                                    enabled = true,
                                    onClickLabel = "Card Click",
                                    onClick = {
                                        navController?.navigate(NavDirectionsLabs.DetailPage.route)
                                    }
                                )*/

                            ) {
                                HomeSensorItem(
                                    modelSensor = item[i],
                                    /* se = item[i].sensorName,
                                     sensorValue = item[i].sensorValue,
                                     sensorUnit = item[i].sensorUnit,
                                     sensorIcon = item[i].sensorIcon*/

                                    onCheckChange = { type: Int, isChecked: Boolean ->
                                        viewModel.onSensorChecked(type, isChecked)

                                    },
                                    onClick = {
                                        navController?.navigate("${NavDirectionsApp.SensorDetailPage.route}/${it}")
                                    }
                                )

                            }

                            if (i < item.size - 1) {
                                Spacer(modifier = Modifier.width(JlResDimens.dp8))
                            }
                        }
                        if (item.size % 2 != 0) {
                            Spacer(modifier = Modifier.width(JlResDimens.dp8))

                            Box(
                                modifier = Modifier
                                    .weight(1f)
                            )
                        }

                    }
                }
                Spacer(modifier = Modifier.height(JlResDimens.dp8))

            }

            item { Spacer(modifier = Modifier.height(JlResDimens.dp16)) }
//            }
        }

}