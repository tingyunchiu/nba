import React from 'react';
import ChartPlot from './chart/ChartPlot.js';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import './ShowChart.css';

function ShowChart() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="showchart">
      <Button style={{backgroundColor: "#ff7043"}} variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ChartPlot />
      </Modal>
    </div>
  );
}

export default ShowChart;


