import React from "react";
import { MissionStatusFooter } from "../components/MissionStatusFooter";
import { MissionStatusNavBar } from "../components/MissionStatusNavBar";
import { MissionStatusNavBarPanel } from "../components/MissionStatusNavBarPanel";
import { MissionStatusBanner } from "../components/MissionStatusBanner";
import { MissionStatusPanel } from "../components/MissionStatusPanel";
import { GeneralBanner } from "../components/GeneralBanner";
import { GeneralPanel } from "../components/GeneralPanel";
import { RoverBanner } from "../components/RoverBanner";
import { RoverPanel } from "../components/RoverPanel";
import { ToolsBanner } from "../components/ToolsBanner";
import { ToolsPanel } from "../components/ToolsPanel";
import { PilotBanner } from "../components/PilotBanner";
import { PilotPanel } from "../components/PilotPanel";
import { CopilotBanner } from "../components/CopilotBanner";
import { CopilotPanel } from "../components/CopilotPanel";

function MissionStatus() {
    return (
        <div className="Home-container">
            <MissionStatusNavBar/>
            <MissionStatusBanner/>
            <MissionStatusPanel/>
            <GeneralBanner/>
            <GeneralPanel/>
            <PilotBanner/>
            <PilotPanel/>
            <CopilotBanner/>
            <CopilotPanel/>
            <RoverBanner/>
            <RoverPanel/>
            <ToolsBanner/>
            <ToolsPanel/>
            <MissionStatusFooter/>
            <MissionStatusNavBarPanel/>
        </div>
    );
}

export default MissionStatus;