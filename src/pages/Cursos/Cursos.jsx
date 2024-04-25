import React from 'react';
import Sidebar from '../../Componentes/SideBar/Sidebar';
import VideoCatalago from '../../Componentes/VideoCatalago/VideoCatalogo';
import VideoComents from '../../Componentes/VideoComents/VideoComents';
import '../Cursos/cursos.css';

export default function Cursos() {
    return (
        <>
            <div className='containerPageCursos'>
                {/* <div className='pageHeader'>
                    <Cabecalho />
                </div> */}
                <div className='pageCursos'>
                    <Sidebar />
                    <div className='contentRelated'>
                        <VideoCatalago />
                        <VideoComents />
                    </div>
                </div>
                {/* <div className='pageFooter'>
                    <Flooter />
                </div> */}
            </div>
        </>
    );
}