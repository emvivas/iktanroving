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
using System;
using System.Linq;
using System.Collections.Generic;

namespace IktanRoving.Model
{
    /// <summary>
    /// ProximityModel class.
    /// </summary>
    public class LocationModel : BaseSensorModel
    {

        private double[] points = new double[3];
        private string error;

        /// <summary>
        /// Property for points
        /// </summary>
        public double[] Points
        {
            get { return points; }
            set
            {
                points = value;
                OnPropertyChanged();
            }
        }

        /// <summary>
        /// Property for latitude.
        /// </summary>
        public double Latitude
        {
            get { return points[0]; }
            set
            {
                points[0] = value;
                OnPropertyChanged();
            }
        }

        public String Error
        {
            get { return error; }
            set
            {
                error = value;
                OnPropertyChanged();
            }
        }

        /// <summary>
        /// Property for longitude.
        /// </summary>
        public double Longitude
        {
            get { return points[1]; }
            set
            {
                points[1] = value;
                OnPropertyChanged();
            }
        }

        /// <summary>
        /// Property for altitude.
        /// </summary>
        public double Altitude
        {
            get { return points[2]; }
            set
            {
                points[2] = value;
                OnPropertyChanged();
            }
        }

    }
}