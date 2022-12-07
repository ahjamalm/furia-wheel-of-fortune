import { Button, Link } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertDialog from './components/AlertDialog';
import { mockData } from './helpers';
import { ResetLog } from './reducers/logs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BasicTable from './components/CustomTable';

const Logs = () => {
    let { records } = useSelector(state => state.log);
    const [showAlert, toggleAlert] = useState(false);
    const dispatch = useDispatch()
    return (
        <div style={{ backgroundColor: '#fff', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href='/'>
                    <Typography> Go Back</Typography>
                </Link>
                <Button variant='contained' style={{ color: '#fff', background: 'red', fontFamily: 'Rb2.1b' }} onClick={() => {
                    toggleAlert(true)
                }}>
                    Delete logs
                </Button>
            </div>


            <div style={{ overflow: 'auto', padding: '16px', height: '90vh' }}>
                {
                    records ? Object.keys(records).map((key, index) => {
                        let rec = records[key]
                        return <div key={index}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Date {key}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ padding: '16px' }}>
                                        <Typography variant='h5'>Summary:</Typography>

                                        <div style={{ padding: '4px 0' }}>Total rounds: {rec?.length}</div>
                                        <div style={{ padding: '4px 0' }}>Total redeemed gifts: {rec?.filter(r => ![8].includes(r))?.length}</div>
                                        <div style={{ padding: '16px 0' }}>
                                            <BasicTable dateKey={key} />
                                        </div>
                                    </div>
                                    <div style={{ padding: '16px' }}>


                                        <Typography variant='h5'>Log:</Typography>
                                        <div style={{ padding: '16px 0' }}>

                                            {
                                                rec?.map((item, innerIndex) => {
                                                    return <div key={innerIndex}>
                                                        <Typography> {innerIndex + 1}- {mockData[item - 1].name}</Typography>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>


                        </div>
                    })
                        :
                        <div>
                            <Typography> No records found</Typography>

                        </div>
                }
            </div>
            {
                showAlert && <AlertDialog confirm={() => {
                    dispatch(ResetLog())
                    toggleAlert(false)
                }} dismiss={() => toggleAlert(false)} />
            }

        </div>
    );
};

export default Logs;