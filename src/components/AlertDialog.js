import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@material-ui/core';

export default function AlertDialog({ dismiss, confirm }) {
    const [password, setPassword] = React.useState('')
    const [passwordIncoorect, setPasswordIncoorect] = React.useState(false)

    const handleClose = () => {
        dismiss()
    };

    const handleConfirm = () => {
        if (password === '1234') {
            confirm()
            dismiss()
        } else {
            setPassword('')
            setPasswordIncoorect(true)
        }
    };
    if (passwordIncoorect) {
        return <RenderPasswordIncorrect handleClose={() => {
            setPasswordIncoorect(false)

        }} />
    }
    return (
        <div>
            <Dialog
                open={true}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Caution"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This operation irreversible,Are you sure you want to proceed with logs deletion?
                    </DialogContentText>
                    <div style={{ padding: '16px 0' }}>
                        <Input placeholder='Enter admin password' type='password' onChange={(e) => setPassword(e.target.value)} />

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Dismiss</Button>
                    <Button onClick={handleConfirm} variant='contained' style={{ backgroundColor: 'red', color: '#fff' }} autoFocus>
                        Delete Logs
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const RenderPasswordIncorrect = ({ handleClose }) => {
    return (
        <div>
            <Dialog
                open={true}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Alert"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are not authorized to procceed with this operation
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Dismiss</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}