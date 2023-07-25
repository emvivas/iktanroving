/*
 * Copyright (c) 2017 Samsung Electronics Co., Ltd All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using IktanRoving.Extensions;
using IktanRoving.Model;
using SkiaSharp;
using System;
using System.Collections.Generic;
using Tizen.Sensor;
using Tizen.Wearable.CircularUI.Forms;
using Xamarin.Forms.Xaml;
using Tizen.Location;
using Tizen.Security;

namespace IktanRoving.Pages
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class AaLocation : CirclePage
    {
        /// <summary>
        /// Locator instance
        /// </summary>
        private static Locator locator = null;

        /// <summary>
        /// GpsSatellite instance
        /// </summary>
        private static GpsSatellite satellite = null;

        /// <summary>
        /// CircleBoundary instance
        /// </summary>
        private static CircleBoundary circle = null;

        private static ServiceState serviceState = ServiceState.Disabled;
        private static Boolean isBound = false;
        private static Boolean isTrack = false;
        private static Boolean isSatellite = false;

        public AaLocation()
        {
            PrivilegeCheck();
            LocatorStart();
            double[] location = GetLocation();
            Model = new LocationModel
            {
                IsSupported = true,
                SensorCount = 12,
                Longitude = location[1],
                Latitude = location[0],
                Altitude = location[2]
        };
            InitializeComponent();
        }

        public LocationModel Model { get; private set; }

        public double[] GetLocation()
        {
            try
            {
                /// Gets the details of the location.
                Tizen.Location.Location l = locator.GetLocation();
                return new double[] { l.Latitude, l.Longitude };
            }
            catch (InvalidOperationException)
            {
                return new double[] { 16.5, 34.6, 18.9 };
            }
            catch (Exception ex)
            {
                return new double[] { 39.75, 90.45, 34.2 };
            }
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();
        }

        protected override void OnDisappearing()
        {
            base.OnDisappearing();
        }

        public void PrivilegeCheck()
        {
            try
            {
                /// Check location permission
                CheckResult result = PrivacyPrivilegeManager.CheckPermission("http://tizen.org/privilege/location");

                switch (result)
                {
                    case CheckResult.Allow:
                        break;
                    case CheckResult.Deny:
                        break;
                    case CheckResult.Ask:
                        /// Request to privacy popup
                        PrivacyPrivilegeManager.RequestPermission("http://tizen.org/privilege/location");
                        break;
                }
            }
            catch (Exception ex)
            {
            }
        }

        public void LocatorStart()
        {
            if (locator == null)
            {
                try
                {
                    /// <summary>
                    /// Create Locator instance, sets LocationType to GPS
                    /// </summary>
                    /// <param name="Hybrid">This method selects the best method available at the moment.</param>
                    /// <param name="Gps">This method uses Global Positioning System.</param>
                    /// <param name="Wps">This method uses WiFi Positioning System.</param>
                    /// <param name="Passive">This method uses passive mode.</param>
                    locator = new Locator(LocationType.Gps);

                    /// Create GpsSatellite instance
                    satellite = new GpsSatellite(locator);

                    if (locator != null)
                    {
                        /// Starts the Locator which has been created using the specified method.
                        locator.Start();

                        /// Add ServiceStateChanged event to receive the event regarding service state
                        locator.ServiceStateChanged += LocatorServiceStateChanged;
                    }
                }
                catch (Exception ex)
                {
                }
            }
        }

        /// <summary>
        /// Event : ServiceStateChanged
        /// </summary>
        /// <param name="sender">object</param>
        /// <param name="e">An enumeration of type LocationServiceState.</param>
        public void LocatorServiceStateChanged(object sender, ServiceStateChangedEventArgs e)
        {
            if (e.ServiceState == ServiceState.Enabled)
            {
                serviceState = ServiceState.Enabled;
            }
            else
            {
                serviceState = ServiceState.Disabled;
            }
        }

        /// <summary>
        /// New page
        /// </summary>
        /*public class GetLocation
        {
            public double[] GetPoints()
            {
                try
                {
                    /// Gets the details of the location.
                    Tizen.Location.Location l = locator.GetLocation();
                    return new double[] { l.Latitude, l.Longitude };
                }
                catch (InvalidOperationException)
                {
                    return new double[] { -1, -1 };
                }
                catch (Exception ex)
                {
                    return new double[] { -10, -10 };
                }
            }

            public event EventHandler<LocationDataUpdatedEventArgs> DataUpdated;
        }*/

        /*public class LocationDataUpdatedEventArgs : EventArgs
        {
            //
            // Summary:
            //     Gets the value of the ultraviolet index.
            //
            // Value:
            //     The ultraviolet index.
            public double[] Points { get; }
        }

        private void Location_DataUpdated(object sender, LocationDataUpdatedEventArgs e)
        {
            Model.Points = e.Points;
        }*/

        //public GetLocation GetGPS { get; private set; }
    }
}