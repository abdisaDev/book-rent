import { Box, Dialog, DialogContent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  modalSelector,
  setIsOpenStatus,
} from "../../features/modal/modalSlice";

function PopupModal(props: { children: JSX.Element }) {
  const isOpenSelector = useAppSelector(modalSelector);
  const dispatch = useAppDispatch();

  const handleOnClose = (event, reason) => {
    if (reason === "backdropClick") {
      dispatch(setIsOpenStatus(false));
    }
  };

  return (
    <Box>
      <Dialog open={isOpenSelector.isOpen} onClose={handleOnClose}>
        <DialogContent
          sx={{
            width: "500px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.children}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default PopupModal;
