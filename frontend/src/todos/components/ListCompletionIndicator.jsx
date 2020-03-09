import React from 'react'
import CheckIcon from "@material-ui/icons/Check";
import { ListItemIcon } from '@material-ui/core';

const ListCompletionIndicator = ({ list }) => {
  
  const allItemsCompleted = () => {
    if (list.length > 0) {
      return list.reduce((val, item) => val && item.completed, true);
    } else {
      return false;
    }
  };

  return (
    <ListItemIcon>
      {allItemsCompleted() ? <CheckIcon color="secondary" /> : <CheckIcon />}
    </ListItemIcon>
  );
};

export default ListCompletionIndicator