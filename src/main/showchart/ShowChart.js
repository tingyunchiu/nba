import React from 'react';
import ChartPlot from './chart/ChartPlot.js';
import Modal from '@material-ui/core/Modal';
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
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
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


