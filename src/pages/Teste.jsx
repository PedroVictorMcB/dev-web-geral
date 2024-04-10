import React from 'react';
import Sidebar from '../Componentes/SideBar/Sidebar';
import VideoCatalago from '../Componentes/VideoCatalago/VideoCatalogo';
import VideoComents from '../Componentes/VideoComents/VideoComents';

export default function Sidesbar() {
    return (
        <div>
            <Sidebar />
            <VideoCatalago />
            <VideoComents />
        </div>
    );
}
