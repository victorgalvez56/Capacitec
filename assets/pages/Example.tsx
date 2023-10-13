import React from 'react';
import { ZapparCamera, ImageTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';
import { icons } from '../icons';

const WelcomeScreen = () => {
    return (
        <>
            <ZapparCanvas>
                <ZapparCamera />
                <ImageTracker
                    onNotVisible={(anchor: any) => console.log(`Not visible ${anchor.id}`)}
                    onNewAnchor={(anchor: any) => console.log(`New anchor ${anchor.id}`)}
                    onVisible={(anchor: any) => console.log(`Visible ${anchor.id}`)}
                    targetImage={icons.welcome1}
                >
                    {/* <mesh position={[0, 0, -5]}>
                        <sphereBufferGeometry />
                        <meshStandardMaterial color="hotpink" />
                    </mesh> */}
                </ImageTracker>
                {/* <directionalLight position={[2.5, 8, 5]} intensity={1.5} /> */}
            </ZapparCanvas>
        </>
    );
};

export default WelcomeScreen;


