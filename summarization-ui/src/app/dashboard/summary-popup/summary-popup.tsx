import CloseIcon from '@mui/icons-material/Close';
import {Box, IconButton, Modal, Typography} from '@mui/material';
import {CandidateEntity} from 'src/app/types/candidate';
import {Skills} from './skills';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  data: CandidateEntity | null;
  closeDialog: () => void;
};

export const SummaryPopup: React.FC<Props> = (props) => {
  const {data} = props;
  if (!data) {
    return null;
  }

  return (
    <Modal
      open={!!data}
      onClose={props.closeDialog}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Search
          </Typography>
          <IconButton onClick={props.closeDialog}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{mt: 2}}>
          <Typography mb={2}>{data.name}</Typography>
          <Typography mb={2}>{data.summary}</Typography>
          <Skills skills={data.skills} />
        </Box>
      </Box>
    </Modal>
  );
};
