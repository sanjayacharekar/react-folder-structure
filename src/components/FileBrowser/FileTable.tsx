import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableFooter, TableHead } from '@mui/material';
import Search from '@mui/icons-material/Search';
import FolderIcon from '@mui/icons-material/Folder';
import Checkbox from '@mui/material/Checkbox';
import TablePagination from '@mui/material/TablePagination';

interface FileTableProps {
  files: any[];
  onFolderClick: (folder: any) => void;
}

const FileTable: React.FC<FileTableProps> = ({ files, onFolderClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const generateDynamicDate = () => {
    // Generate a random date
    const randomYear = 2023;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1; 
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    const randomSecond = Math.floor(Math.random() * 60);

    return new Date(randomYear, randomMonth, randomDay, randomHour, randomMinute, randomSecond)?.toLocaleString();
  };

  // Filter files based on search term
  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-w-full">
      <div className="flex justify-end py-4 pt-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>

      <Table className="min-w-full bg-white" >
        <TableHead>
          <TableRow className="bg-[#f1f3f4]">
            <TableCell><Checkbox/></TableCell>
            <TableCell className="p-3 font-semibold">NAME</TableCell>
            <TableCell className="p-3 font-semibold">SIZE</TableCell>
            <TableCell className="p-3 font-semibold">TYPE</TableCell>
            <TableCell className="p-3 font-semibold">MODIFIED DATE/TIME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{minHeight:'1px'}}>
          {filteredFiles?.length > 0 ? (
            filteredFiles.map((item, index) => (
              <TableRow
                key={index}
                onClick={() => item.type === 'folder' && onFolderClick(item)}
                className="cursor-pointer hover:bg-[#f6f7f7]"
              >
                <TableCell><Checkbox/></TableCell>
                <TableCell className="p-3"><FolderIcon color='warning'/> {item.name[0]?.toUpperCase() + item.name.slice(1)}</TableCell>
                <TableCell className="p-3">{item.size ? item.size : '-'}</TableCell>
                <TableCell className="p-3">{item.type}</TableCell>
                <TableCell className="p-3">{generateDynamicDate()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
            <TableCell colSpan={5} className="p-3">
              <p className='text-center'>No Data found</p>
            </TableCell>
          </TableRow>
          
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>
            <TablePagination
              component="div"
              count={100}
              page={2}
              onPageChange={()=>{}}
              rowsPerPage={10}
              onRowsPerPageChange={()=>{}}
            />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default FileTable;
