package io.sensify.sensor.ui.pages

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.AnimationVector1D
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.material3.Text
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.draw.scale
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.TileMode
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.ExperimentalTextApi
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.google.accompanist.systemuicontroller.rememberSystemUiController
import io.sensify.sensor.R
import io.sensify.sensor.ui.navigation.NavDirectionsApp
import io.sensify.sensor.ui.resource.values.JlResColors
import io.sensify.sensor.ui.resource.values.JlResShapes
import io.sensify.sensor.ui.resource.values.JlResTxtStyles
import kotlinx.coroutines.delay

/**
 * Created by Niraj on 24-08-2022.
 */

@Composable
fun SplashPage(navController: NavController) {
//    val systemUiController = rememberSystemUiController()
////    if(darkTheme){
//        systemUiController.setSystemBarsColor(
//            color = Color.Transparent
//        )
    LaunchedEffect(key1 = true) {
        /*scaleAnimation.animateTo(
            targetValue = 0.5F,
            animationSpec = tween(
                durationMillis = durationMillisAnimation,
                easing = {
                    OvershootInterpolator(3F).getInterpolation(it)
                }
            )
        )*/

        delay(timeMillis = 3000)

        navController.popBackStack()
        navController.navigate(NavDirectionsApp.HomePage.route)

        /*navController.navigate(route = DestinationScreen.MainScreenDest.route) {
            popUpTo(route = DestinationScreen.SplashScreenDest.route) {
                inclusive = true
            }
        }*/
    }
    SplashScreen()

}

@OptIn(ExperimentalTextApi::class)
@Composable
fun SplashScreen(
    modifier: Modifier = Modifier,
//    imagePainter: Painter,
//    scaleAnimation: Animatable<Float, AnimationVector1D>
) {
    Box(
        modifier = modifier
            .fillMaxSize()
            .background(JlResColors.black),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            /*Image(
                painter = imagePainter,
                contentDescription = "Logotipo Splash Screen",
                modifier = modifier
                    .size(400.dp)
                    .scale(scale = scaleAnimation.value),
            )*/
            Image(
                painter = painterResource(id = R.drawable.luna_llena),
                contentDescription = "IKTAN Roving's logo",
                modifier = modifier
                    .size(100.dp)
//                    .scale(scale = scaleAnimation.value),
            )
//                        modifier = Modifier.(scale = scaleAnimation.value
                /*color = Color.White,
                fontSize = JlResDimens.dp40,
                fontWeight = FontWeight.ExtraBold,
                fontFamily = FontFamily.Serif,
                textAlign = TextAlign.Center,
                modifier = modifier.scale(scale = scaleAnimation.value
                */
        }
    }
}


@Preview(device = Devices.WEAR_OS_SMALL_ROUND, showSystemUi = true)
@Composable
fun SplashScreenPreview() {
    SplashScreen()
}