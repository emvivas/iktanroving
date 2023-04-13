import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img2013_1 from "../assets/img/gallery/2013/2013-1.jpg";
import img2013_2 from "../assets/img/gallery/2013/2013-2.jpg";
import img2013_3 from "../assets/img/gallery/2013/2013-3.jpg";
import img2013_4 from "../assets/img/gallery/2013/2013-4.jpg";
import img2013_5 from "../assets/img/gallery/2013/2013-5.jpg";
import img2013_6 from "../assets/img/gallery/2013/2013-6.jpg";
import img2013_7 from "../assets/img/gallery/2013/2013-7.jpg";
import img2013_8 from "../assets/img/gallery/2013/2013-8.jpg";
import img2013_9 from "../assets/img/gallery/2013/2013-9.jpg";
import img2013_10 from "../assets/img/gallery/2013/2013-10.jpg";
import img2013_11 from "../assets/img/gallery/2013/2013-11.jpg";
import img2013_12 from "../assets/img/gallery/2013/2013-12.jpg";
import img2013_13 from "../assets/img/gallery/2013/2013-13.jpg";
import img2013_14 from "../assets/img/gallery/2013/2013-14.jpg";
import img2013_15 from "../assets/img/gallery/2013/2013-15.jpg";

import img2014_1 from "../assets/img/gallery/2014/2014-1.jpg";
import img2014_2 from "../assets/img/gallery/2014/2014-2.jpg";
import img2014_3 from "../assets/img/gallery/2014/2014-3.jpg";
import img2014_4 from "../assets/img/gallery/2014/2014-4.jpg";
import img2014_5 from "../assets/img/gallery/2014/2014-5.jpg";
import img2014_6 from "../assets/img/gallery/2014/2014-6.jpg";
import img2014_7 from "../assets/img/gallery/2014/2014-7.jpg";
import img2014_8 from "../assets/img/gallery/2014/2014-8.jpg";
import img2014_9 from "../assets/img/gallery/2014/2014-9.jpg";
import img2014_10 from "../assets/img/gallery/2014/2014-10.jpg";
import img2014_11 from "../assets/img/gallery/2014/2014-11.jpg";
import img2014_12 from "../assets/img/gallery/2014/2014-12.jpg";
import img2014_13 from "../assets/img/gallery/2014/2014-13.jpg";
import img2014_14 from "../assets/img/gallery/2014/2014-14.jpg";
import img2014_15 from "../assets/img/gallery/2014/2014-15.jpg";

import img2015_1 from "../assets/img/gallery/2015/2015-1.jpg";
import img2015_2 from "../assets/img/gallery/2015/2015-2.jpg";
import img2015_3 from "../assets/img/gallery/2015/2015-3.jpg";
import img2015_4 from "../assets/img/gallery/2015/2015-4.jpg";
import img2015_5 from "../assets/img/gallery/2015/2015-5.jpg";
import img2015_6 from "../assets/img/gallery/2015/2015-6.jpg";
import img2015_7 from "../assets/img/gallery/2015/2015-7.jpg";
import img2015_8 from "../assets/img/gallery/2015/2015-8.jpg";
import img2015_9 from "../assets/img/gallery/2015/2015-9.jpg";
import img2015_10 from "../assets/img/gallery/2015/2015-10.jpg";
import img2015_11 from "../assets/img/gallery/2015/2015-11.jpg";
import img2015_12 from "../assets/img/gallery/2015/2015-12.jpg";
import img2015_13 from "../assets/img/gallery/2015/2015-13.jpg";
import img2015_14 from "../assets/img/gallery/2015/2015-14.jpg";
import img2015_15 from "../assets/img/gallery/2015/2015-15.jpg";

import img2016_1 from "../assets/img/gallery/2016/2016-1.jpg";
import img2016_2 from "../assets/img/gallery/2016/2016-2.jpg";
import img2016_3 from "../assets/img/gallery/2016/2016-3.jpg";
import img2016_4 from "../assets/img/gallery/2016/2016-4.jpg";
import img2016_5 from "../assets/img/gallery/2016/2016-5.jpg";
import img2016_6 from "../assets/img/gallery/2016/2016-6.jpg";
import img2016_7 from "../assets/img/gallery/2016/2016-7.jpg";
import img2016_8 from "../assets/img/gallery/2016/2016-8.jpg";
import img2016_9 from "../assets/img/gallery/2016/2016-9.jpg";
import img2016_10 from "../assets/img/gallery/2016/2016-10.jpg";
import img2016_11 from "../assets/img/gallery/2016/2016-11.jpg";
import img2016_12 from "../assets/img/gallery/2016/2016-12.jpg";
import img2016_13 from "../assets/img/gallery/2016/2016-13.jpg";
import img2016_14 from "../assets/img/gallery/2016/2016-14.jpg";
import img2016_15 from "../assets/img/gallery/2016/2016-15.jpg";

import img2017_1 from "../assets/img/gallery/2017/2017-1.jpg";
import img2017_2 from "../assets/img/gallery/2017/2017-2.jpg";
import img2017_3 from "../assets/img/gallery/2017/2017-3.jpg";
import img2017_4 from "../assets/img/gallery/2017/2017-4.jpg";
import img2017_5 from "../assets/img/gallery/2017/2017-5.jpg";
import img2017_6 from "../assets/img/gallery/2017/2017-6.jpg";
import img2017_7 from "../assets/img/gallery/2017/2017-7.jpg";
import img2017_8 from "../assets/img/gallery/2017/2017-8.jpg";
import img2017_9 from "../assets/img/gallery/2017/2017-9.jpg";
import img2017_10 from "../assets/img/gallery/2017/2017-10.jpg";
import img2017_11 from "../assets/img/gallery/2017/2017-11.jpg";
import img2017_12 from "../assets/img/gallery/2017/2017-12.jpg";
import img2017_13 from "../assets/img/gallery/2017/2017-13.jpg";
import img2017_14 from "../assets/img/gallery/2017/2017-14.jpg";
import img2017_15 from "../assets/img/gallery/2017/2017-15.jpg";

import img2018_1 from "../assets/img/gallery/2018/2018-1.jpg";
import img2018_2 from "../assets/img/gallery/2018/2018-2.jpg";
import img2018_3 from "../assets/img/gallery/2018/2018-3.jpg";
import img2018_4 from "../assets/img/gallery/2018/2018-4.jpg";
import img2018_5 from "../assets/img/gallery/2018/2018-5.jpg";
import img2018_6 from "../assets/img/gallery/2018/2018-6.jpg";
import img2018_7 from "../assets/img/gallery/2018/2018-7.jpg";
import img2018_8 from "../assets/img/gallery/2018/2018-8.jpg";
import img2018_9 from "../assets/img/gallery/2018/2018-9.jpg";
import img2018_10 from "../assets/img/gallery/2018/2018-10.jpg";
import img2018_11 from "../assets/img/gallery/2018/2018-11.jpg";
import img2018_12 from "../assets/img/gallery/2018/2018-12.jpg";
import img2018_13 from "../assets/img/gallery/2018/2018-13.jpg";
import img2018_14 from "../assets/img/gallery/2018/2018-14.jpg";
import img2018_15 from "../assets/img/gallery/2018/2018-15.jpg";

import img2019_1 from "../assets/img/gallery/2019/2019-1.jpg";
import img2019_2 from "../assets/img/gallery/2019/2019-2.jpg";
import img2019_3 from "../assets/img/gallery/2019/2019-3.jpg";
import img2019_4 from "../assets/img/gallery/2019/2019-4.jpg";
import img2019_5 from "../assets/img/gallery/2019/2019-5.jpg";
import img2019_6 from "../assets/img/gallery/2019/2019-6.jpg";
import img2019_7 from "../assets/img/gallery/2019/2019-7.jpg";
import img2019_8 from "../assets/img/gallery/2019/2019-8.jpg";
import img2019_9 from "../assets/img/gallery/2019/2019-9.jpg";
import img2019_10 from "../assets/img/gallery/2019/2019-10.jpg";
import img2019_11 from "../assets/img/gallery/2019/2019-11.jpg";
import img2019_12 from "../assets/img/gallery/2019/2019-12.jpg";
import img2019_13 from "../assets/img/gallery/2019/2019-13.jpg";
import img2019_14 from "../assets/img/gallery/2019/2019-14.jpg";
import img2019_15 from "../assets/img/gallery/2019/2019-15.jpg";

import img2020_1 from "../assets/img/gallery/2020/2020-1.jpg";
import img2020_2 from "../assets/img/gallery/2020/2020-2.jpg";
import img2020_3 from "../assets/img/gallery/2020/2020-3.jpg";
import img2020_4 from "../assets/img/gallery/2020/2020-4.jpg";
import img2020_5 from "../assets/img/gallery/2020/2020-5.jpg";
import img2020_6 from "../assets/img/gallery/2020/2020-6.jpg";
import img2020_7 from "../assets/img/gallery/2020/2020-7.jpg";
import img2020_8 from "../assets/img/gallery/2020/2020-8.jpg";
import img2020_9 from "../assets/img/gallery/2020/2020-9.jpg";
import img2020_10 from "../assets/img/gallery/2020/2020-10.jpg";
import img2020_11 from "../assets/img/gallery/2020/2020-11.jpg";
import img2020_12 from "../assets/img/gallery/2020/2020-12.jpg";
import img2020_13 from "../assets/img/gallery/2020/2020-13.jpg";
import img2020_14 from "../assets/img/gallery/2020/2020-14.jpg";
import img2020_15 from "../assets/img/gallery/2020/2020-15.jpg";

import img2021_1 from "../assets/img/gallery/2021/2021-1.jpg";
import img2021_2 from "../assets/img/gallery/2021/2021-2.jpg";
import img2021_3 from "../assets/img/gallery/2021/2021-3.jpg";
import img2021_4 from "../assets/img/gallery/2021/2021-4.jpg";
import img2021_5 from "../assets/img/gallery/2021/2021-5.jpg";
import img2021_6 from "../assets/img/gallery/2021/2021-6.jpg";
import img2021_7 from "../assets/img/gallery/2021/2021-7.jpg";
import img2021_8 from "../assets/img/gallery/2021/2021-8.jpg";
import img2021_9 from "../assets/img/gallery/2021/2021-9.jpg";
import img2021_10 from "../assets/img/gallery/2021/2021-10.jpg";
import img2021_11 from "../assets/img/gallery/2021/2021-11.jpg";
import img2021_12 from "../assets/img/gallery/2021/2021-12.jpg";
import img2021_13 from "../assets/img/gallery/2021/2021-13.jpg";
import img2021_14 from "../assets/img/gallery/2021/2021-14.jpg";
import img2021_15 from "../assets/img/gallery/2021/2021-15.jpg";

import img2022_1 from "../assets/img/gallery/2022/2022-1.jpg";
import img2022_2 from "../assets/img/gallery/2022/2022-2.jpg";
import img2022_3 from "../assets/img/gallery/2022/2022-3.jpg";
import img2022_4 from "../assets/img/gallery/2022/2022-4.jpg";
import img2022_5 from "../assets/img/gallery/2022/2022-5.jpg";
import img2022_6 from "../assets/img/gallery/2022/2022-6.jpg";
import img2022_7 from "../assets/img/gallery/2022/2022-7.jpg";
import img2022_8 from "../assets/img/gallery/2022/2022-8.jpg";
import img2022_9 from "../assets/img/gallery/2022/2022-9.jpg";
import img2022_10 from "../assets/img/gallery/2022/2022-10.jpg";
import img2022_11 from "../assets/img/gallery/2022/2022-11.jpg";
import img2022_12 from "../assets/img/gallery/2022/2022-12.jpg";
import img2022_13 from "../assets/img/gallery/2022/2022-13.jpg";
import img2022_14 from "../assets/img/gallery/2022/2022-14.jpg";
import img2022_15 from "../assets/img/gallery/2022/2022-15.jpg";

import img2023_1 from "../assets/img/gallery/2023/2023-1.jpg";
import img2023_2 from "../assets/img/gallery/2023/2023-2.jpg";
import img2023_3 from "../assets/img/gallery/2023/2023-3.jpg";
import img2023_4 from "../assets/img/gallery/2023/2023-4.jpg";
import img2023_5 from "../assets/img/gallery/2023/2023-5.jpg";
import img2023_6 from "../assets/img/gallery/2023/2023-6.jpg";
import img2023_7 from "../assets/img/gallery/2023/2023-7.jpg";
import img2023_8 from "../assets/img/gallery/2023/2023-8.jpg";
import img2023_9 from "../assets/img/gallery/2023/2023-9.jpg";
import img2023_10 from "../assets/img/gallery/2023/2023-10.jpg";
import img2023_11 from "../assets/img/gallery/2023/2023-11.jpg";
import img2023_12 from "../assets/img/gallery/2023/2023-12.jpg";
import img2023_13 from "../assets/img/gallery/2023/2023-13.jpg";
import img2023_14 from "../assets/img/gallery/2023/2023-14.jpg";
import img2023_15 from "../assets/img/gallery/2023/2023-15.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Project.css";


export const Projects = () => {

  const images2013 = [
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_1,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_2,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_3,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_4,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_5,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_6,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_7,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_8,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_9,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_10,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_11,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_12,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_13,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_14,
    },
    {
      title: "IKTAN Roving 2013",
      description: "NASA Human Exploration Rover Challenge 2013",
      imgUrl: img2013_15,
    },
  ];

  const images2014 = [
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_1,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_2,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_3,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_4,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_5,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_6,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_7,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_8,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_9,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_10,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_11,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_12,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_13,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_14,
    },
    {
      title: "IKTAN Roving 2014",
      description: "NASA Human Exploration Rover Challenge 2014",
      imgUrl: img2014_15,
    },
  ];

  const images2015 = [
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_1,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_2,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_3,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_4,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_5,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_6,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_7,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_8,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_9,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_10,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_11,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_12,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_13,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_14,
    },
    {
      title: "IKTAN Roving 2015",
      description: "NASA Human Exploration Rover Challenge 2015",
      imgUrl: img2015_15,
    },
  ];

  const images2016 = [
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_1,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_2,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_3,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_4,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_5,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_6,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_7,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_8,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_9,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_10,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_11,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_12,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_13,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_14,
    },
    {
      title: "IKTAN Roving 2016",
      description: "NASA Human Exploration Rover Challenge 2016",
      imgUrl: img2016_15,
    },
  ];

  const images2017 = [
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_1,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_2,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_3,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_4,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_5,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_6,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_7,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_8,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_9,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_10,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_11,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_12,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_13,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_14,
    },
    {
      title: "IKTAN Roving 2017",
      description: "NASA Human Exploration Rover Challenge 2017",
      imgUrl: img2017_15,
    },
  ];

  const images2018 = [
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_1,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_2,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_3,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_4,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_5,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_6,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_7,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_8,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_9,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_10,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_11,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_12,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_13,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_14,
    },
    {
      title: "IKTAN Roving 2018",
      description: "NASA Human Exploration Rover Challenge 2018",
      imgUrl: img2018_15,
    },
  ];

  const images2019 = [
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_1,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_2,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_3,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_4,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_5,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_6,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_7,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_8,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_9,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_10,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_11,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_12,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_13,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_14,
    },
    {
      title: "IKTAN Roving 2019",
      description: "NASA Human Exploration Rover Challenge 2019",
      imgUrl: img2019_15,
    },
  ];

  const images2020 = [
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_1,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_2,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_3,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_4,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_5,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_6,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_7,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_8,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_9,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_10,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_11,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_12,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_13,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_14,
    },
    {
      title: "IKTAN Roving 2020",
      description: "NASA Human Exploration Rover Challenge 2020",
      imgUrl: img2020_15,
    },
  ];

  const images2021 = [
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_1,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_2,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_3,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_4,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_5,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_6,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_7,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_8,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_9,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_10,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_11,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_12,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_13,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_14,
    },
    {
      title: "IKTAN Roving 2021",
      description: "NASA Human Exploration Rover Challenge 2021",
      imgUrl: img2021_15,
    },
  ];

  const images2022 = [
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_1,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_2,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_3,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_4,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_5,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_6,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_7,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_8,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_9,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_10,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_11,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_12,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_13,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_14,
    },
    {
      title: "IKTAN Roving 2022",
      description: "NASA Human Exploration Rover Challenge 2022",
      imgUrl: img2022_15,
    },
  ];

  const images2023 = [
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_1,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_2,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_3,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_4,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_5,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_6,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_7,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_8,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_9,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_10,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_11,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_12,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_13,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_14,
    },
    {
      title: "IKTAN Roving 2023",
      description: "NASA Human Exploration Rover Challenge 2023",
      imgUrl: img2023_15,
    },
  ];

  return (
    <section className="project" id="gallery">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <label><h2>Gallery</h2></label>
                <label><p>This is a photographic collection that demonstrates the progress that IKTAN Roving has made since its inception in the NASA HERC competition. Without a doubt, it is a sample of how great the project has been together with all its generations of students through the years.</p></label>
                <Tab.Container id="images2013-tabs" defaultActiveKey="2023">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="2013"><label>2013</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2014"><label>2014</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2015"><label>2015</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2016"><label>2016</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2017"><label>2017</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2018"><label>2018</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2019"><label>2019</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2020"><label>2020</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2021"><label>2021</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2022"><label>2022</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2023"><label>2023</label></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="2013">
                    <Row>
                        {
                          images2013.map((images2013, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2013}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2014">
                    <Row>
                        {
                          images2014.map((images2014, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2014}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2015">
                    <Row>
                        {
                          images2015.map((images2015, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2015}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2016">
                    <Row>
                        {
                          images2016.map((images2016, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2016}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2017">
                    <Row>
                        {
                          images2017.map((images2017, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2017}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="2018">
                    <Row>
                        {
                          images2018.map((images2018, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2018}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2019">
                    <Row>
                        {
                          images2019.map((images2019, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2019}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2020">
                    <Row>
                        {
                          images2020.map((images2020, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2020}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2021">
                    <Row>
                        {
                          images2021.map((images2021, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2021}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2022">
                    <Row>
                        {
                          images2022.map((images2022, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2022}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2023">
                    <Row>
                        {
                          images2023.map((images2023, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...images2023}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
