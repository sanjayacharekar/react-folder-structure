import React from 'react';
import Breadcrumb from '@mui/material/Breadcrumbs'
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';


interface BreadcrumbsProps {
  breadcrumb: any[];
  onBreadcrumbClick: (index: number) => void;
}
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;
const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({ breadcrumb, onBreadcrumbClick }) => {

  return (
    <Breadcrumb aria-label="breadcrumb">
      {breadcrumb.map((folder, index) => (

        <StyledBreadcrumb
          component="a"
          href="#"
          label={folder.name}
          key={index}
          onClick={() => onBreadcrumbClick(index)}
        />
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbsComponent;