import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Breadcrumbs from './Breadcrumbs';
import FileTable from './FileTable';
import folderStructure from '../../data/folderStructure.json';
import { createTheme } from '@mui/material/styles';

const themes = createTheme({
  spacing: 8, 
});

const useStyles = makeStyles(() => ({
  root: {
    padding: themes.spacing(2),
  },
}));

const FileBrowser: React.FC = () => {
    const classes = useStyles();
    const [currentFolder, setCurrentFolder] = useState(folderStructure.app);
    const [breadcrumb, setBreadcrumb] = useState([folderStructure.app]);
  
    const handleFolderClick = (folder: any) => {
      setCurrentFolder(folder);
      // Update breadcrumb
      setBreadcrumb([...breadcrumb, folder]);
    };
  
    const handleBreadcrumbClick = (index: number) => {
      const newBreadcrumb = breadcrumb.slice(0, index + 1);
      setBreadcrumb(newBreadcrumb);
      setCurrentFolder(newBreadcrumb[index]);
    };
  
    return (
      <div className={classes.root}>
        <Breadcrumbs breadcrumb={breadcrumb} onBreadcrumbClick={handleBreadcrumbClick} />
        <FileTable files={currentFolder.children} onFolderClick={handleFolderClick} />
      </div>
    );
  };
  
  export default FileBrowser;