import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './Accordion.module.scss'
import { DescriptionTwoTone } from '@mui/icons-material';

interface IProp{
    description: string
}

export default function SimpleAccordion({description}: IProp) {
    return (
    <div>
    <Accordion className={styles.accordion}>
    <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<KeyboardArrowDownIcon style={{color: 'black'}}/>}
        className={styles.accordion__item}
    >
        <Typography className={styles.accordion__title}>Описание и характеристики</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
        {description}
        </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion className={styles.accordion} sx={{
            '&:before': {
                display: 'none',
            }
        }}>
    <AccordionSummary
        aria-controls="panel2a-content"
        id="panel2a-header"
        expandIcon={<KeyboardArrowDownIcon style={{color: 'black'}}/>}
        className={styles.accordion__item}
    >
        <Typography className={styles.accordion__title}>Отзывы</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
    </AccordionDetails>
    </Accordion>
    </div>
    );
    }