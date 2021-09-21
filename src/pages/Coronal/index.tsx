import React, {useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import * as cornerstone from 'cornerstone-core';
import cornerstoneMath from 'cornerstone-math';
import cornerstoneTools from 'cornerstone-tools';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';
import Hammer from 'hammerjs';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCanvas = styled.div`
  width: 100%;
  height: 400px;
`;

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;

cornerstoneTools.init();
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

const PageCoronal = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (async () => {
            if (canvasRef.current) {
                const loadedImage = await cornerstone.loadImage('wadouri:case3a_001.dcm');
                cornerstone.enable(canvasRef.current);
                cornerstone.displayImage(canvasRef.current, loadedImage);

                const LengthTool = cornerstoneTools.LengthTool;
                //cornerstoneTools.addTool(LengthTool);
                cornerstoneTools.addTool(LengthTool);
                cornerstoneTools.setToolActive('Length', { mouseButtonMask: 1 });
            }
        })();
    }, [canvasRef]);

    return (
        <StyledPage>
            <StyledCanvas ref={canvasRef} />
        </StyledPage>
    );
};

export default PageCoronal;
