import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface FileTableProps {
  files: any[];
  onFolderClick: (folder: any) => void;
}

  const FileTable: React.FC<FileTableProps> = ({ files, onFolderClick }) => {
    return (
      <Table>
        <TableBody>
          {files.map((item, index) => (
            <TableRow key={index} onClick={() => item.type === 'folder' && onFolderClick(item)}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  
  export default FileTable;