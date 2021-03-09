import React from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import CameraView from '../components/CameraView';

const TakeImage = () => {
    return (
        <DeviceOrientation lockOrientation={'landscape'}>
            {/* Will only be in DOM in landscape */}
            <Orientation orientation='landscape' alwaysRender={false}>
                <div>
                    <CameraView />
                </div>
            </Orientation>
            {/* Will stay in DOM, but is only visible in portrait */}
            <Orientation orientation='portrait' alwaysRender={false}>
                <div>
                    <p>Please rotate device</p>
                </div>
            </Orientation>
        </DeviceOrientation>
    )
};

export default TakeImage;