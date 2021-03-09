import React, { useState } from 'react';
import styled from 'styled-components';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const useStyles = makeStyles({
    dialog: {
      position: 'absolute',
      bottom: 0
    }
  });

const CameraView = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = useState('');
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [showBox, setShowBox] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [count, setCount] = useState(0);

    function handleTakePhoto(dataUri) {
        // Do stuff with the photo...
        setImage(dataUri);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickNext = () => {
        //setBorder(false);
        if(count<4) {
            setImage('');
            setShowBox(false);
            setOpen(false);
            setCount(count+1);
            setSelectedButton(null);
        } else {
            setOpen(false);
        }
    }
    const onMouseMove = (e) => {
        setCoordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
        setShowBox(true);
        setOpen(true);
    }
    const handleButtonSelect = (id) => {
        setSelectedButton(id);
    }
    return (
        <div>
            {!image && <Camera
                isFullscreen
                idealFacingMode={FACING_MODES.ENVIRONMENT}
                isImageMirror={false}
                onTakePhoto={(dataUri) => { handleTakePhoto(dataUri) }}
            />}
            {image &&
                <div>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img src={image} onClick={onMouseMove} />
                        <Box showBox={showBox} coordinates={coordinates} ></Box>
                    </div>
                    <Dialog
                    classes={{
                        paper: classes.dialog
                      }}
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        
                        <DialogContent>
                            <Button variant="contained" color={selectedButton == 0 ? `primary`: 'default'} onClick={() => handleButtonSelect(0)}>
                                Lorem ipsum
                            </Button>
                            <Button variant="contained" color={selectedButton == 1 ? `primary`: 'default'} onClick={() => handleButtonSelect(1)}>
                                Lorem ipsum
                            </Button>
                            <Button variant="contained" color={selectedButton == 2 ? `primary`: 'default'} onClick={() => handleButtonSelect(2)}>
                                Lorem ipsum
                            </Button>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClickNext} color="primary">
                                Next
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            }
        </div>
    )
}

const Box = styled.div`
    height: 30px;
    width: 50px;
    border: 1px dashed red;
    position: absolute;
    display: ${props => props.showBox ? 'block' : 'none'};
    top: ${props => props.coordinates.y}px;
    left: ${props => props.coordinates.x}px;
    color: white;
`

export default CameraView;