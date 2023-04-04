import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => {
          props.setGameOver(false);
          //   props.setDraw(false);
          //   props.setCount(0);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* {!props.draw && ( */}
        <Box sx={style}>
          <h1>Winner is {props.winner}</h1>
        </Box>
        {/* )} */}
        {/* {props.draw && (
          <Box sx={style}>
            <h1>Draw</h1>
          </Box>
        )} */}
      </Modal>
    </div>
  );
}
