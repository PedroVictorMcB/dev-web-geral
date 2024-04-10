import React from 'react';
import Sidebar from '../../Componentes/SideBar/Sidebar';
import VideoCatalago from '../../Componentes/VideoCatalago/VideoCatalogo';
import VideoComents from '../../Componentes/VideoComents/VideoComents';
import '../Cursos/cursos.css';

export default function Cursos() {
    return (
        <div className='pageCursos'>
            <aside>
                <Sidebar />
            </aside>
            <div className='contentRelated'>
                <div className='videoContent'>
                    <VideoCatalago />
                </div>
                <div className='comentContent'>
                    <VideoComents />
                </div>
            </div>
        </div>
    );
}