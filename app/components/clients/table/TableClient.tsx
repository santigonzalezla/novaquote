import styles from './tableclient.module.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {satoshi} from "@/app/fonts/satoshi";
import { createTheme } from '@mui/material';
import {ThemeProvider} from "@mui/system";
import {themeFont} from "@/theme";

const createData = (id: string, name: string, address: string, date: string, project: number, status: string) =>
{
    return { id, name, address, date, project, status };
}

const rows = [
    createData('1', 'Frozen yoghurt', '123 Main St', '2024-11-04', 2, 'En curso'),
    createData('2', 'Ice cream sandwich', '456 Elm St', '2024-10-30', 4, 'Completado'),
    createData('3', 'Eclair', '789 Maple Ave', '2024-09-15', 3, 'Rechazado'),
    createData('4', 'Cupcake', '101 Oak St', '2024-08-21', 5, 'Completado'),
    createData('5', 'Gingerbread', '202 Pine St', '2024-07-01', 1, 'En curso'),
];

const sharedStyles = {
    tableHead: {
        backgroundColor: '#EAEAEA',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 900,
        height: 40,
        padding: 0,
        margin: 0,
    },
    tableRow: {
        height: 30,
    },
    tableCell: {
        paddingLeft: 2,
        paddingTop: 1,
        paddingBottom: 1,
        paddingRight: 2,
    },
};

const TableClient = () =>
{
    return (
        <ThemeProvider theme={themeFont}>
            <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.25)'}}>
                <Table  sx={{ minWidth: 650, borderRadius: 60 }} aria-label="simple table" className={styles.table}>
                    <TableHead sx={sharedStyles.tableHead}>
                        <TableRow sx={sharedStyles.tableRow}>
                            <TableCell sx={sharedStyles.tableCell}>ID</TableCell>
                            <TableCell sx={sharedStyles.tableCell} align="left">Nombre</TableCell>
                            <TableCell sx={sharedStyles.tableCell} align="left">Dirección</TableCell>
                            <TableCell sx={sharedStyles.tableCell} align="left">Fecha</TableCell>
                            <TableCell sx={sharedStyles.tableCell} align="left">Proyectos</TableCell>
                            <TableCell sx={sharedStyles.tableCell} align="center">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.project}</TableCell>
                                <TableCell align="center">
                                    <span className={`${styles.cellstatus} ${row.status === "Completado"
                                        ? styles.cellstatuscomplete : row.status === "En curso" 
                                        ? styles.cellstatusbasic : styles.cellstatusreject}`}
                                    >
                                        {row.status}
                                    </span>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>

    );
}

export default TableClient;