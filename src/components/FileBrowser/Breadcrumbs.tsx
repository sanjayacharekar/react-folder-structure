import React from 'react';
import Breadcrumb from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link';


interface BreadcrumbsProps {
    breadcrumb: any[];
    onBreadcrumbClick: (index: number) => void;
  }
  
  const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({ breadcrumb, onBreadcrumbClick }) => {
    return (
      <Breadcrumb aria-label="breadcrumb">
        {breadcrumb.map((folder, index) => (
          <Link key={index} color="inherit" onClick={() => onBreadcrumbClick(index)}>
            {folder.name}
          </Link>
        ))}
      </Breadcrumb>
    );
  };
  
  export default BreadcrumbsComponent;