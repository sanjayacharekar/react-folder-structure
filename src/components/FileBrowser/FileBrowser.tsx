import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Breadcrumbs from './Breadcrumbs';
import FileTable from './FileTable';
import folderStructure from '../../data/folderStructure.json';
import { Container } from '@mui/material';

const darkBackground = {
  default: '#f0f0ff',
  paper: '#1E1E1E',
};

const customTheme = createTheme({
  palette: {
    mode: 'light',
    background: darkBackground,
  },
});

const FileBrowser: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState(folderStructure.app);
  const [breadcrumb, setBreadcrumb] = useState([folderStructure.app]);

  const handleFolderClick = (folder: any) => {
    setCurrentFolder(folder);
    setBreadcrumb([...breadcrumb, folder]);
  };

  const handleBreadcrumbClick = (index: number) => {
    const newBreadcrumb = breadcrumb.slice(0, index + 1);
    setBreadcrumb(newBreadcrumb);
    setCurrentFolder(newBreadcrumb[index]);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="lg" className='bg-[#FFFAFA] p-6 h-screen border-r-4 border-4 rounded-2xl	pb-0 '>
        <div className=''>
        <h1 className="text-3xl font-semibold text-slate-500">File Browser</h1>
        <hr className='my-3 border-t border-gray-300 drop-shadow-md' />

        <Breadcrumbs breadcrumb={breadcrumb} onBreadcrumbClick={handleBreadcrumbClick} />
        <hr className='my-4 border-t border-gray-300 drop-shadow-md shadow-inner' />

        <FileTable files={currentFolder.children} onFolderClick={handleFolderClick} />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default FileBrowser;
